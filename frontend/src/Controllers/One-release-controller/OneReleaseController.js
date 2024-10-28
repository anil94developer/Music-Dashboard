import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';

const OneReleaseController = (props) => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Audio");


    const handleSubmit = async (e) => {
        let body = {
            title: title,
            type: type,
        };

        let result = await postData(base.addOneRelease, body);
        console.log(result);
        if (result.data.status === true) { 
            navigate("/main-step",{ state: { releaseData: JSON.stringify(result.data.data) } });
          } else {
            Swal.fire("Error", result.message, result.message); 
          } 
    }

    return {
        isLoading,
        setIsLoading,
        title,
        setTitle,
        type,
        setType,
        handleSubmit
    }

}
export default OneReleaseController;