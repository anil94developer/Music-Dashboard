



import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { postData, postDataContent } from '../../Services/Ops';
const Step2Controller = (props) => {
     
    const [mediaFiles, setMediaFiles] = useState([]);
    const [releaseData,setReleaseData]= useState({})
    
    const navigate = useNavigate(); 
        const handleFileChange =async (e) => {
            const selectedFiles = Array.from(e.target.files);
 
            const updatedFiles = await Promise.all(
                selectedFiles.map(async (file) => { 
                    let blobFile = file;
                    if (file.type.startsWith("audio") || file.type.startsWith("video")) {
                        blobFile = await convertToBlob(file);
                    } 
                    return { 
                        fileName: blobFile.name, // Blob URL for preview
                        fileData: blobFile,
                        fileType: file.type.startsWith("audio") ? "audio" : file.type.startsWith("video") ? "video" : "image"
                    };
                })
            );
    
            setMediaFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
       
        };
        // Convert an image to Blob
    const convertToBlob =async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            // Set up the reader to read as ArrayBuffer (required for Blob conversion)
            reader.readAsArrayBuffer(file);
    
            // On successful load, convert the data to Blob
            reader.onloadend = () => {
                const blob = new Blob([reader.result], { type: file.type });
                resolve(blob);
            };
    
            // Handle any errors in reading the file
            reader.onerror = (error) => reject(`File conversion failed: ${error}`);
        });
    };

    // Remove file from the list
    const handleRemove = (fileName) => {
        setMediaFiles((prevFiles) => prevFiles.filter((file) => file.fileName !== fileName));
        URL.revokeObjectURL(fileName); // Clean up URL
    };

    const handleSubmit =async (e) => { 
        console.log(mediaFiles)
        let body={
            "_id": releaseData._id,
            "step2": mediaFiles
        }
        
        console.log("body===========>",body)
         
        let result =await postData(base.releaseStep2,body);
        console.log(result)
        if (result.data.status === true) {  
            Swal.fire("Success", result.message, result.message); 
          } else {
            Swal.fire("Error", result.message, result.message); 
          }  
      };

    return { 
        handleFileChange,
        mediaFiles,
        handleSubmit,
        handleRemove,
        setReleaseData
    }

}
export default Step2Controller;
