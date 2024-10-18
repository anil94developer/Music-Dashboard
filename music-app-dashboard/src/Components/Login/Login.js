import React, { useContext } from 'react';
// import './Login.css';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../Context/Context';

export const Login = () => {
    const navigate = useNavigate();

    const { setUserData, isLogin, setIsLogin } = useContext(DataContext)
    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="#">
                    <b>Music Admin</b>
                </a>
            </div>
            {/* /.login-logo */}
            <div className="login-box-body">
                <p className="login-box-msg">Welcome to Sign in</p>
                <form id="dataform" method="post">
                    <div className="form-group has-feedback">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                        />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                        />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                    <div className="row">
                        {/*<div class="col-xs-8">    */}
                        {/*  <div class="checkbox icheck">*/}
                        {/*    <label>*/}
                        {/*      <input type="checkbox"> Remember Me*/}
                        {/*    </label>*/}
                        {/*  </div>                        */}
                        {/*</div> */}
                        <div className="col-xs-4">
                            <button
                                id="btnsubmit"
                                className="btn btn-primary btn-block btn-flat"
                                type="submit"
                            >
                                Sign In
                            </button>
                            <button
                                id="loader"
                                style={{ display: "none" }}
                                className="cmn--btn active w-100 btn--round"
                            >
                                Loading...
                            </button>
                        </div>
                        {/* /.col */}
                    </div>
                </form>
            </div>
        </div>
    )
}
