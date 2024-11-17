import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getData, postData } from "../../Services/Ops";
import { base } from "../../Constants/Data.constant";
import useLocalStorage from "use-local-storage";


const useDashboardController = (props) => {
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState("");

    const getDashboardData = async () => {
        try {
            const releaseList = await getData(base.releaseList); // pass as query parameter
            const tracksList = await getData(base.tracksList); // pass as query parameter
            // alert(releaseList.data.length)
            setDashboardData({
                "myReleaseCount": releaseList.data.length,
                "myTracksCount": tracksList.data.length
            });  

        } catch (error) {
            console.error("Error fetching profile:", error);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Something went wrong. Please try again later.'
            // });
        }
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    return {
        dashboardData
    };
};
export default useDashboardController;
