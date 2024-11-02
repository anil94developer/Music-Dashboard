import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getData, postData } from "../../Services/Ops";
import { base } from "../../Constants/Data.constant";
import useLocalStorage from "use-local-storage";


const AuthController = (props) => {
    // const { setUserData, isLogin, setIsLogin } = useContex(DataContext)
    const navigate = useNavigate();
    const [userData, setUserData] = useState("");

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
    
    useEffect(() => {
        getProfile();
    }, []);

    return {
        userData
    };
};
export default AuthController;
