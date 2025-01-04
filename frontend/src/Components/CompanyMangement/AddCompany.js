import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { useUserProfile } from "../../Context/UserProfileContext";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import { SideBar } from "../Common/SideBar";
// import "./UserAccessForm.css";

function AddCompany(props) {
    const navigate = useNavigate()
    const { userProfile } = useUserProfile()
    const [form, setForm] = useState({
        email: "",
        noofLabel: "",
        role: "company",
        panNo: "",
        aadharNo: "",
        companyName: "",
        clientNumber: "",
        mainEmail: "",
        royaltiesEmail: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        postalAddress: "",
        postalCode: "",
        city: "",
        country: "",
        timeZone: "",
        language: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const result = await postData(base.addCompany, form);
            if (result.data?.status === true) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: result.message,
                });
                navigate("/CompanyManagement");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: result.message || "An error occurred.",
                });
            }
        } catch (error) {
            console.error("Error sending data:", error);
            Swal.fire("Error", "An unexpected error occurred. Please try again.", "error");
        }
    };

    return (
        <div>
            <SideBar />
            <div className="main-cotent">
                <Nav />
                <div className="content-main">
                    <section className="page-heading">
                        <h1>Add Company</h1>
                    </section>
                    <section className="content">
                        <form className="profile-form" onSubmit={handleSubmit}>
                            <div className="dash-detail dash-detail-two">
                                <div className="row">


                                    {/* Company Name */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1"> Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter company name"
                                                name="companyName"
                                                value={form.companyName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Main Email */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Main Email Address</label> 
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter main email address"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Royalties Email */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Royalties Email Address</label>
                                            <input
                                                type="royaltiesEmail"
                                                className="form-control"
                                                placeholder="Enter royalties email address"
                                                name="royaltiesEmail"
                                                value={form.royaltiesEmail}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>

                                    {/* First Name */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter first name"
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Last Name */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter last name"
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Phone Number */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter phone number"
                                                name="phoneNumber"
                                                value={form.phoneNumber}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>

                                    {/* Pan Card Number */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Pan Card</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Pan Card Number"
                                                name="panNo"
                                                value={form.panNo}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Aadhar Card  number*/}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Pan Card</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Aadhar Card Number"
                                                name="aadharNo"
                                                value={form.aadharNo}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>

                                    {/* Postal Address */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Postal Address</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter postal address"
                                                name="postalAddress"
                                                value={form.postalAddress}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Postal Code */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Postal Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter postal code"
                                                name="postalCode"
                                                value={form.postalCode}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* City */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter city"
                                                name="city"
                                                value={form.city}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Country */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter country"
                                                name="country"
                                                value={form.country}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Time Zone */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Default Time Zone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter default time zone"
                                                name="timeZone"
                                                value={form.timeZone}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Language */}
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <div className="form-group">
                                            <label >Default Language</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter default language"
                                                name="language"
                                                value={form.language}
                                                onChange={handleChange}
                                                
                                            />
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="submit-btn">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AddCompany;
