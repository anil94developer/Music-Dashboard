import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postData } from "../../Services/Ops";
import { base } from "../../Constants/Data.constant";
import useLocalStorage from "use-local-storage";


const LoginController = (props) => {
  // const { setUserData, isLogin, setIsLogin } = useContex(DataContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false); 
    let body = {
      email: email,
      password: password,
    };

    let result = await postData(base.login, body);
    console.log(result);
    if (result.data.status === true) {
      localStorage.setItem("token",result.data.data.token)
      localStorage.setItem("userData",result.data.data) 


      navigate("/Dashboard");
    } else {
      Swal.fire("Error", result.message, result.message); 
    } 
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
  };
};
export default LoginController;
