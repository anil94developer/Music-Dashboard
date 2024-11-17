import React, { useState } from "react";
import Swal from "sweetalert2";
import { postDataContent } from "../../Services/Ops"; // Adjust the path to your service
import { base } from "../../Constants/Data.constant";

const useProfileController = () => {
  // State for managing form inputs
  const [profile, setProfile] = useState({
    companyName: "JEET MUSIC ASSAMESE",
    clientNumber: "1017404",
    mainEmail: "zumanjeetofficial@gmail.com",
    royaltiesEmail: "zumanjeetofficial@gmail.com",
    firstName: "Bhabesh Roy",
    lastName: "Medhi",
    phoneNumber: "8474866534",
    postalAddress: "Near Zoo Guwahati, R. G Baruah Road",
    postalCode: "781005",
    city: "Guwahati",
    country: "India", // Default value
    timeZone: "",
    language: "English", // Default value
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postDataContent(base.updateProfile, profile); // Adjust endpoint
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
    profile,
    handleChange,
    handleSubmit,
  };
};

export default useProfileController;
