import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getData, postData } from "../../Services/Ops";
import { base } from "../../Constants/Data.constant";
import useLocalStorage from "use-local-storage";


const AuthController = (props) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState("");
    const [userPermission, setUserPermission] = useState([]);
 
    useEffect(() => {
        getProfile();
        getPermissoin();
    }, []);


    const getProfile = async () => {
        try {
            // const userId = "671e08391a2071afe4269f80";
            const result = await getData(base.userProfile); // pass as query parameter
            console.log(result)
            if (result && result.status === true) {
                setUserData(result.data); // Assuming result.data has user data directly
            } else {
                Swal.fire({
                    icon: 'error', // Use "error" icon for unauthorized message
                    title: 'Unauthorized !!', // Set your custom title here
                    text: 'You do not have permission to access this resource.' // Custom message (optional)
                });
                // Uncomment if you want to redirect:
                navigate("/");
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.'
            });
        }
    };

    const getPermissoin = async () => {
        try {
            const result = await getData(base.myPermission); // pass as query parameter
            console.log(result)
            if (result && result.status === true) {
                setUserPermission(result.data); // Assuming result.data has user data directly
            } else {
                Swal.fire({
                    icon: 'error', // Use "error" icon for unauthorized message
                    title: 'Unauthorized !!', // Set your custom title here
                    text: 'You do not have permission to access this resource.' // Custom message (optional)
                });

            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.'
            });
        }
    };


    const handleLogout = () => {
         
    
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "No, Stay",
            reverseButtons: true, // Optional: swaps the position of Yes/No buttons
        }).then((result) => {
            if (result.isConfirmed) {
                // Clear session storage or localStorage
                localStorage.clear();
                sessionStorage.clear();
    
                // Redirect to login page
                navigate("/");
    
                // Show a success message
                Swal.fire({
                    title: "Logged out!",
                    text: "You have been logged out successfully.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        });
    };

    return {
        userData,
        handleLogout,
        userPermission
    };
};
export default AuthController;
