import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { base } from '../../Constants/Data.constant';
import { getData, postData } from '../../Services/Ops';
const MainStepController = (props) => {
  // const { setUserData, isLogin, setIsLogin } = useContex(DataContext)
  const navigate = useNavigate();
  const [step, setStep] = useState("step1"); 

  const [myRelease, setMyRelease] = useState({});

 
  useEffect(() => {
      fetchReleaseDetails()
    }, [])
    const fetchReleaseDetails = async () => { 
      let body={
        releaseId:"671e641db2e85067827474e2"
      }
      let result = await postData(base.releaseDetails,body);
     
      if (result.data.status === true) { 
          setMyRelease(result.data.data)
      } else {
        // Swal.fire("Error", result.message, result.message);
      }
    }

  return {
    setStep,
    step,
    myRelease
  }

}
export default MainStepController;