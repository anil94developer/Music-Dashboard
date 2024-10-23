import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const LoginController = (props) => {
  // const { setUserData, isLogin, setIsLogin } = useContex(DataContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setIsLoading(false);
    // if (email === "admin@example.com" && password === "password") {
    //     Swal.fire("Success", "You are logged in!", "success");
    // } else {
    //     Swal.fire("Error", "Invalid email or password", "error");
    // }
    navigate("/Dashboard")
  };

}
export default LoginController;