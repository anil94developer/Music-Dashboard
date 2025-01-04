import React, { useState } from 'react';
import Swal from "sweetalert2";
import { postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';
import MainStepController from './MainStepController';

const Step2Controller = () => {
    const { fetchReleaseDetails } = MainStepController();
    const [mediaFiles, setMediaFiles] = useState([]);
    const [releaseData, setReleaseData] = useState({});

    const handleFileChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("id", releaseData._id);
            formData.append("files", e.target.files?.[0])
            // releaseData.step2.forEach((file) => mediaFiles.push(file));

            // mediaFiles.forEach((file) => formData.append("files", file.fileData));
            console.log("mediaFiles=======",formData)
            const result = await postDataContent(base.releaseStep2, formData);
            Swal.fire("Success", result.message, "success");
            fetchReleaseDetails(releaseData._id)
            setMediaFiles([])

        } catch (error) {
            Swal.fire("Error", "An error occurred while uploading files.", "error");
        } finally {
            // setIsUploading(false);
        }
        // const selectedFiles = Array.from(e.target.files);
        // const allowedTypes = ["audio", "video"];
        // const updatedFiles = selectedFiles
        //     .filter((file) => allowedTypes.some((type) => file.type.startsWith(type)))
        //     .map((file) => ({
        //         fileName: file.name,
        //         fileData: file,
        //         fileType: file.type.startsWith("audio") ? "audio" : "video"
        //     }));

        // setMediaFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
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
        setReleaseData
    };
};

export default Step2Controller;
