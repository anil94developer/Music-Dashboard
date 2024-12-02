import React, { useState } from "react";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import "./UserAccessForm.css";

function UserAccessForm() {
  const [menuPermission, setMenuPermission] = useState([
    {
      "mainMenuName": "Dashboard",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "One Release",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "Multiple Release",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "Catalog",
      "status": false,
      "submenu": [
        {
          "subMenuName": "All releases",
          "status": false,
          "submenu": []
        },
        {
          "subMenuName": "All drafts",
          "status": false,
          "submenu": []
        },
        {
          "subMenuName": "All Tracks",
          "status": false,
          "submenu": []
        }
      ]
    },
    {
      "mainMenuName": "Daily Trends",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "Financial",
      "status": false,
      "submenu": [
        {
          "subMenuName": "Payment Operations",
          "status": false,
          "submenu": []
        },
        {
          "subMenuName": "Financial Report",
          "status": false,
          "submenu": []
        }
      ]
    },
    {
      "mainMenuName": "User Access",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "Support",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "User Mangement",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "Withdraw Request",
      "status": false,
      "submenu": []
    },
    {
      "mainMenuName": "All Transcations",
      "status": false,
      "submenu": []
    }
  ]);
  const [otherPermission, setOtherPermission] = useState([
    { sectionName: "Airtest", status: false, list: [] },
    { sectionName: "Label", status: false, list: [] },
    { sectionName: "Channel", status: false, list: [] },

  ]);
  const [userPermission, setUserPermission] = useState({
    email: "",
    password: "",
    name: "",
    noOfLabel: ""
  });

  const handleCheckboxChange = (e, category, index, subIndex = null) => {
    const { checked } = e.target;

    if (category === "menuPermission") {
      setMenuPermission((prev) => {
        const updated = [...prev];
        if (subIndex !== null) {
          updated[index].submenu[subIndex].status = checked;
        } else {
          updated[index].status = checked;
        }
        return updated;
      });
    } else if (category === "otherPermission") {
      setOtherPermission((prev) => {
        const updated = [...prev];
        updated[index].status = checked;
        return updated;
      });
    }
  };

  const handleSubmit = async () => {
    const payload = {
      ...userPermission,
      menuPermission,
      otherPermission,
    };

    try {
      const result = await postData(base.addPermission, payload);
      if (result?.data?.status === true) {
        Swal.fire("Success", result.data.message, "success");
      } else {

        Swal.fire("Error", result.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred during submission", "error");
      console.error("Submission error:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="content">
          <div className="form-container">
            <h2>User Access Management</h2>
            <div className="form-section">

              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      type="test"
                      className="form-control"
                      value={userPermission.name}
                      onChange={(e) => setUserPermission((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="col-md-6">
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
                </div>
              </div>
            </div>
            <br></br>
            <div className="form-section">
              <h3>Menu Permissions</h3>
              {menuPermission.map((menu, index) => (
                <div key={menu.mainMenuName}>
                  <label>
                    <input
                      type="checkbox"
                      checked={menu.status}
                      onChange={(e) => handleCheckboxChange(e, "menuPermission", index)}
                    />
                    {menu.mainMenuName}
                  </label>
                  {menu.submenu.map((submenu, subIndex) => (
                    <label key={submenu.subMenuName} style={{ marginLeft: "20px" }}>
                      <input
                        type="checkbox"
                        checked={submenu.status}
                        onChange={(e) => handleCheckboxChange(e, "menuPermission", index, subIndex)}
                      />
                      {submenu.subMenuName}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <br></br>
            {/* Catalog Scope */} 
              <div className="form-section">
                <h3>Catalog Scope</h3>
                {otherPermission.map((item, index) => (
                  <label key={item.sectionName}>
                    <input
                      type="checkbox"
                      checked={item.status}
                      onChange={(e) => handleCheckboxChange(e, "otherPermission", index)}
                    />
                    {item.sectionName}
                  </label>
                ))}
              



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

export default UserAccessForm;
