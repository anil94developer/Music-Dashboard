import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { postData } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';

const OneReleaseController = (props) => {
  
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoading(false);
        // if (email === "admin@example.com" && password === "password") {
        //   Swal.fire("Success", "You are logged in!", "success");
        // } else {
        //   Swal.fire("Error", "Invalid email or password", "error");
        // }
        let body = {
            title: title,
            type: type,
        };

        let result = await postData(base.addOneRelease. body);
        console.log(result);

        if(result.data.status == true) {
                        
        }

        // let result = await postData(base.login, body);
        // console.log(result);
        // if (result.data.status === true) {
        //   localStorage.setItem("user", JSON.stringify(result.data));
        //   localStorage.setItem("token", result.data.token);
    
    
        //   navigate("/Dashboard");
        // } else {
        //   Swal.fire("Error", result.data.message, "error");
    
         // navigate("/Dashboard");
        }
        // navigate("/Dashboard")
      
    

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