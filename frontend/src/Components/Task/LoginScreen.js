import { data } from '@remix-run/router';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { base, endpoint } from '../../Constants/Data.constant';
import { postData } from '../../Services/Ops';
export const LoginScreen = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ email: '', password: '', workspace: '' });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [workspace, setWorkspace] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const validate = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required.';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        //
        if (!workspace) {
            newErrors.workspace = 'Workspace is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Validate input fields
        if (!validate()) return;
        setIsLoading(true)
        // Save workspace to localStorage
        localStorage.setItem('workspace_id', JSON.stringify(workspace));
    
        const url = endpoint+'auth/login';
        const requestBody = {
            email: email.trim(), // Trim to remove leading/trailing whitespace
            password: password.trim()
        };
    
        try {
            // Start loader/spinner if you have one (optional)
            console.log('Logging in...');
    
            const result = await postData(url, JSON.stringify(requestBody), workspace);
            // alert(result.data.token.token)
            console.log("==============??????",result)
            if (result?.status == 200 || result.status == 201) { 
                // Store data in localStorage
                localStorage.setItem("token", result?.data?.token?.token || '');
                localStorage.setItem("userData", JSON.stringify(result.data));
    
                // Redirect to Task page
                navigate("/Task");
    
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome back!',
                    timer: 1500,
                    showConfirmButton: false
                });
    
            } else {
                // If login fails, show error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized',
                    text: result?.message || 'Invalid credentials, please try again.',
                });
            }
    
        } catch (error) {
            // Handle network or server errors
            console.error('Error during login:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsLoading(false)
            // Stop loader/spinner if you have one (optional)
            console.log('Login process finished.');
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="/">
                        <b>Task Admin</b>
                    </a>
                    Email: demo@ridd.in
                    Password: Qwerty@123
                    Workspace 4
                </div>
                <div className="login-box-body" style={{ borderWidth: 2 }}>
                    <p className="login-box-msg">Welcome to Sign in</p>
                    <form id="dataform" onSubmit={onSubmit}>
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
                            {errors.email && <p className="text-danger">{errors.email}</p>}
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
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </div>
                        <div className="form-group has-feedback">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Work Space"
                                id="workspace"
                                value={workspace}
                                onChange={(e) => setWorkspace(e.target.value)}
                            />
                            <span className="glyphicon glyphicon-number form-control-feedback"></span>
                            {errors.workspace && <p className="text-danger">{errors.workspace}</p>}
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
