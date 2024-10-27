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

   
    // if (email === "admin@example.com" && password === "password") {
    //   Swal.fire("Success", "You are logged in!", "success");
    // } else {
    //   Swal.fire("Error", "Invalid email or password", "error");
    // }
    let body = {
      email: email,
      password: password,
    };

    let result = await postData(base.login, body);
    console.log(result);
    if (result.data.status === true) {
      //  await useLocalStorage<String>("token", result.data.token);
      //  await useLocalStorage("userdata", result.data)


      navigate("/Dashboard");
    } else {
      Swal.fire("Error", result.data.message, "error");

     // navigate("/Dashboard");
    }
    // navigate("/Dashboard")
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
