import React, { useState } from 'react';
import Swal from "sweetalert2";
import { postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';

const Step2Controller = () => {
    const [mediaFiles, setMediaFiles] = useState([]);
    const [releaseData, setReleaseData] = useState({});

    const handleFileChange = async (e) => {
        const selectedFiles = Array.from(e.target.files);
        const allowedTypes = ["audio", "video"];
        const updatedFiles = selectedFiles
            .filter((file) => allowedTypes.some((type) => file.type.startsWith(type)))
            .map((file) => ({
                fileName: file.name,
                fileData: file,
                fileType: file.type.startsWith("audio") ? "audio" : "video"
            }));
        
        setMediaFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    };

    const handleRemove = (fileName) => {
        setMediaFiles((prevFiles) => prevFiles.filter((file) => file.fileName !== fileName));
    };

    const handleSubmit = async () => {
        // setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("id", releaseData._id);
            mediaFiles.forEach((file) => formData.append("files", file.fileData));
    
            const result = await postDataContent(base.releaseStep2, formData);
            Swal.fire("Success", result.message, "success");
        } catch (error) {
            Swal.fire("Error", "An error occurred while uploading files.", "error");
        } finally {
            // setIsUploading(false);
        }
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
