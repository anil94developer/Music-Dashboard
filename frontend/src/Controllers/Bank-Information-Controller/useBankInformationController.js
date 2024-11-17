import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { base } from '../../Constants/Data.constant';
import { getData, postData, postDataContent } from '../../Services/Ops';
const useBankInformationController = (props) => {
  const [bankDetails, setBankDetails] = useState({
    accountHolder: "",
    bankName: "",
    ifscCode: "",
    accountNumber: "",
    accountType: "Savings", // Default to 'Savings'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postDataContent(base.bankDetails, bankDetails);
      console.log("Server Response:", result);

      if (result.data.status === true) {
        Swal.fire("Success", result.data.message, "success");
      } else {
        Swal.fire("Error", result.data.message, "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };

  return {
    bankDetails,
    handleChange,
    handleSubmit,
  };
};

export default useBankInformationController;