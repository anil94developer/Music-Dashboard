import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Context/Context';
import Swal from "sweetalert2";
import "../../Styles/plugins/iCheck/all.css";
import "../../Styles/plugins/daterangepicker/daterangepicker-bs3.css";
import "../../Styles/plugins/colorpicker/bootstrap-colorpicker.min.css";
import "../../Styles/plugins/timepicker/bootstrap-timepicker.min.css";
import "../../Styles/dist/css/AdminLTE.min.css";
import "../../Styles/dist/css/skins/_all-skins.min.css";
import '../../Styles/dist/css/AdminLTE.css';
import "../../Styles/build/less/login_and_register.less"

export const Login = () => {
    const navigate = useNavigate();

    const { setUserData, isLogin, setIsLogin } = useContext(DataContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate an API call or validation here
        setTimeout(() => {
            setIsLoading(false);
            if (email === "admin@example.com" && password === "password") {
                Swal.fire("Success", "You are logged in!", "success");
            } else {
                Swal.fire("Error", "Invalid email or password", "error");
            }
        }, 1000);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="/">
                        <b>Music Admin</b>
                    </a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Welcome to Sign in</p>
                    <form id="dataform" onSubmit={handleSubmit}>
                        <div className="form-group has-feedback">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                {!isLoading ? (
                                    <button className="btn btn-primary btn-block btn-flat" type="submit">
                                        Sign In
                                    </button>
                                ) : (
                                    <button className="btn btn-primary btn-block btn-flat" disabled>
                                        Loading...
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};