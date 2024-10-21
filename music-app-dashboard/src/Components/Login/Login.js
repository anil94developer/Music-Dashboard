import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Context/Context';
import LoginController from '../../Controllers/Login-controller/LoginController';
// import Swal from "sweetalert2"; 

export const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit,  email,  setEmail,  password, setPassword, isLoading } = LoginController();
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