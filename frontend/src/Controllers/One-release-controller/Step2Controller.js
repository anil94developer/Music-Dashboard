import React, { useState,useEffect,useRef } from 'react';
import Swal from "sweetalert2";
import { postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';
import MainStepController from './MainStepController';
import axios from 'axios';

const Step2Controller = () => {

    const [mediaFiles, setMediaFiles] = useState([]);
    const [releaseData, setReleaseData] = useState({});
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null); // Use ref to access the input element
    
    const [uploadProgress, setUploadProgress] = useState(0);


    


    const fetchReleaseDetails = async (releaseId) => { 
        let body = {
            releaseId: releaseId
        }
        let result = await postData(base.releaseDetails, body);
        if (result.data.status === true) {
            setFiles(result.data.data.step2)
        } else {

        }
    }

    const handleFileChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("id", releaseData._id);
            formData.append("files", e.target.files?.[0])
            console.log("mediaFiles=======", formData)
            let token = localStorage.getItem("token")

            const config = {
                headers: { Authorization: token, "content-type": 'multipart/form-data;', 'Cache-Control': 'no-cache', },
                // headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(progress); // Update progress state
                },
            };

            const result = await axios.post(base.releaseStep2, formData, config);



            // const result = await postDataContent(base.releaseStep2, formData); 
            Swal.fire("Success", result.message, "success");
            fetchReleaseDetails(releaseData._id)
            // setMediaFiles([])

        } catch (error) {
            Swal.fire("Error", "An error occurred while uploading files.", "error");
        } finally {
            setUploadProgress(0);
            if (inputRef.current) {
                inputRef.current.value = ""; // Clear input value
              }
        }
    };

    const handleRemove = (fileName) => {
        setMediaFiles((prevFiles) => prevFiles.filter((file) => file.fileName !== fileName));
    };

    const handleSubmit = async () => {
        // setIsUploading(true);
        // try {
        //     const formData = new FormData();
        //     formData.append("id", releaseData._id);
        //     // formData.append("files", file.e.target.files?.[0])
        //     // releaseData.step2.forEach((file) => mediaFiles.push(file));

        //     // mediaFiles.forEach((file) => formData.append("files", file.fileData));
        //     console.log("mediaFiles=======", mediaFiles)
        //     const result = await postDataContent(base.releaseStep2, formData);
        //     Swal.fire("Success", result.message, "success");
        //     fetchReleaseDetails(releaseData._id)
        //     setMediaFiles([])

        // } catch (error) {
        //     Swal.fire("Error", "An error occurred while uploading files.", "error");
        // } finally {
        //     // setIsUploading(false);
        // }
    };

    return {
        handleFileChange,
        mediaFiles,
        handleSubmit,
        handleRemove,
        setReleaseData,
        uploadProgress,
        files,
        fetchReleaseDetails,
        inputRef

    };
};

export default Step2Controller;
