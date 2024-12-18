import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { useUserProfile } from "../../Context/UserProfileContext";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
// import "./UserAccessForm.css";

function AddCompany(props) {
    const  navigate  = useNavigate()
    const { userProfile } = useUserProfile()

    const [userPermission, setUserPermission] = useState([
        { key: 'email', label: "Email", value: "", disable: false, type: 'text' },
        { key: 'password', label: "Password", value: "", disable: false, type: 'password' },
        { key: 'phone', label: "Phone Number", value: "", disable: false, type: 'number' },
        { key: 'name', label: "Name", value: "", disable: false, type: 'text' },
        { key: 'noOfLabel', label: "Number Of Label", value: "", disable: false, type: 'number' },
        { key: 'role', label: "Role", value: "company", disable: true, type: 'text' },
        { key: 'panNO', label: "Pan Card Number", value: "", disable: false, type: 'text' },
        { key: 'aadharNo', label: "Aadhar  Number", value: "", disable: false, type: 'number' },

    ]);
    // Handle input change
    const handleInputChange = (index, newValue) => {
        setUserPermission((prev) =>
            prev.map((item, idx) =>
                idx === index ? { ...item, value: newValue } : item
            )
        );
    };

    // Handle form submission
    const handleSubmit = async () => {
        const requestBody = userPermission.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});

        try { 
            const result = await postData(base.addCompany, requestBody);
            console.log("Response:", result);
            if (result.data.status == true) { 
                Swal.fire({
                    icon: 'success',              // Use "error" icon for unauthorized message
                    title: 'Success !!',    // Set your custom title here
                    text: result.message, // Custom message (optional)
                  });
                navigate("/CompanyManagement");
                
              } else {
                Swal.fire({
                  icon: 'error',              // Use "error" icon for unauthorized message
                  title: 'Error !!',    // Set your custom title here
                  text: result.message, // Custom message (optional)
                });
                // Swal.fire("Error", result.message, result.message); 
              }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };
    // const handleSubmit = async () => {
    //     const payload = {
    //         ...userPermission,
    //         menuPermission,
    //         ...otherPermission,
    //     };

    //     console.log("payload=======", payload)
    //     try {
    //         const result = await postData(base.addPermission, payload);
    //         if (result?.data?.status === true) {
    //             Swal.fire("Success", result.data.message, "success");
    //             navigate("user access")
    //         } else {

    //             Swal.fire("Error", result.message, "error");
    //         }
    //     } catch (error) {
    //         Swal.fire("Error", "An error occurred during submission", "error");
    //         console.error("Submission error:", error);
    //     }
    // };

    return (
        <div>
            <Nav />
            <div className="content-wrapper">
                <section className="content">
                    <div className="form-container">
                        <h2>Add Master Account</h2>
                        <div className="form-section">
                            <div className="row">
                                {userPermission.map((item, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="form-group">
                                            <label>{item.label}:</label>
                                            <input
                                                disabled={item.disable} // Corrected attribute
                                                type={item.type}
                                                secure={item.secure}
                                                className="form-control"
                                                value={item.value}
                                                onChange={(e) => handleInputChange(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={userPermission.email}
                                            onChange={(e) => setUserPermission((prev) => ({ ...prev, email: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={userPermission.password}
                                            onChange={(e) => setUserPermission((prev) => ({ ...prev, password: e.target.value }))}
                                        />
                                    </div>
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>No Of Label: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={userPermission.noOfLabel}
                                            onChange={(e) => setUserPermission((prev) => ({ ...prev, noOfLabel: e.target.value }))}
                                        />
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <br></br>
                        <button
                            onClick={() => [handleSubmit()]}
                            className="btn btn-primary btn-block btn-flat"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddCompany;
