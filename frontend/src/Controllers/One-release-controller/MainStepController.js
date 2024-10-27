import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const MainStepController = (props) => {
  // const { setUserData, isLogin, setIsLogin } = useContex(DataContext)
  const navigate = useNavigate();
  const [step, setStep] = useState("step1"); 

  return {
    setStep,
    step
  }

}
export default MainStepController;