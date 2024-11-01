import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { base } from '../../Constants/Data.constant';
import { postData, postDataContent } from '../../Services/Ops';
const Step5Controller = (props) => {
     
    // const [countryList, setCountryList] = useState([]);
    const [releaseData,setReleaseData]= useState({})
    
    const navigate = useNavigate();
 
        // State to store the uploaded files
 

     
    const handleSubmit =async (e) => { 
        
      };

    return { 
        handleSubmit,
    }

}
export default Step5Controller;
