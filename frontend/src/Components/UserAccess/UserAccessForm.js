import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { useUserProfile } from "../../Context/UserProfileContext";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import { SideBar } from '../Common/SideBar'
import "./UserAccessForm.css";
function UserAccessForm(props) {
const { navigate } = useNavigate()
const { userProfile } = useUserProfile()
const [labelNameList, setLabelNameList] = useState([])
const [airtestNameList, setaAirtestNameList] = useState([])
const [menuPermission, setMenuPermission] = useState([]);
const [otherPermission, setOtherPermission] = useState([
{ sectionName: "Airtest", status: false, list: [] },
{ sectionName: "Label", status: false, list: [] },
// { sectionName: "Channel", status: false, list: [] },
]);
const [userPermission, setUserPermission] = useState({
email: "",
password: "",
name: "",
noOfLabel: "",
role: userProfile.type == "Admin" ? "company" : "employee",
});
const handleCheckboxChange = (e, category, index, subIndex = null) => {
const { checked } = e.target;
if (category == "menuPermission") {
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
useEffect(() => {
fetchLabel()
fetchAirtest()
getPermmissoin()
}, [props, userProfile])
const fetchLabel = async () => {
let result = await getData(base.labelList);
console.log(result)
setLabelNameList(result.data)
}
const fetchAirtest = async () => {
let result = await getData(base.fetchArtistList);
console.log(result)
setaAirtestNameList(result.data)
}
const getPermmissoin = () => {
setMenuPermission(
userProfile.role == "Admin" ?
[
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
]
:
userProfile.role == "company" ?
[
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
"mainMenuName": "Support",
"status": false,
"submenu": []
}
]
: userProfile.role == "employee" &&
[]
)
}
const handleSubmit = async () => {
const payload = {
...userPermission,
menuPermission,
...otherPermission,
};
if (userPermission.email == "" || userPermission.name == "" || userPermission.password == "") {
Swal.fire("Error", "Please fill email , password and name", "error");
return 0;
}
console.log("payload=======", payload)
try {
const result = await postData(base.addPermission, payload);
if (result?.data?.status === true) {
Swal.fire("Success", result.data.message, "success");
navigate("user access")
} else {
Swal.fire("Error", result.message, "error");
}
} catch (error) {
Swal.fire("Error", "An error occurred during submission", "error");
console.error("Submission error:", error);
}
};
const selectHandleChange = (e, index) => {
const value = e.target.value;
setOtherPermission((prev) => {
const updatedPermissions = [...prev];
updatedPermissions[index] = {
...updatedPermissions[index],
list: [...(updatedPermissions[index].list || []), value],
};
return updatedPermissions;
});
};
return (
<div>
  <SideBar/>
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <div className="page-heading">
        <h2>User Access Management</h2>
      </div>
      <section className="content">
        <div className="user-add-form">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
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
            <div className="col-md-4 col-sm-6 col-12">
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
            <div className="col-md-4 col-sm-6 col-12">
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
          </div>
          <div className="row">
            {userProfile.role == "Admin" &&
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
            }
          </div>
          <div className="menu-permission">
            <h2>Menu Permissions</h2>
            <div className="permission-form form-section d-flex flex-wrap">
              {menuPermission && menuPermission?.map((menu, index) => (
              <div className="form-inner d-flex align-items-center" key={menu.mainMenuName}>
                <input type="checkbox" checked={menu.status} onChange={(e) => handleCheckboxChange(e, "menuPermission", index)}/>
                <label>{menu?.mainMenuName}</label>
                {menu?.submenu.map((submenu, subIndex) => (
                <label key={submenu.subMenuName} style={{ marginLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={submenu.status}
                  onChange={(e) => handleCheckboxChange(e, "menuPermission", index, subIndex)}
                />
                {submenu?.subMenuName}
                </label>
                ))}
              </div>
              ))}
            </div>
          </div>
          {/* Catalog Scope */}
          {userProfile?.role == "company" &&
          <div className="catalog-form">
            <h3 className="title">Catalog Scope</h3>
            {otherPermission?.map((item, index) => (
            <div class="form-group">
              <label for="genre">{item.sectionName}</label>
              {item.sectionName == "Label" &&
              <select class="form-control"
                multiple
                onChange={(e) =>
                selectHandleChange(e, index)}
                >
                {labelNameList?.map((iitt, iinn) => {
                return 
                <option value={iitt?._id}>{iitt.title}</option>
                })}
              </select>
              }
              {item.sectionName == "Airtest" &&
              <select class="form-control"
                multiple
                onChange={(e) =>
                selectHandleChange(e, index)}
                >
                {airtestNameList?.map((iitt, iinn) => {
                return 
                <option value={iitt?._id}>{iitt.name}</option>
                })}
              </select>
              }
            </div>
            ))}
          </div>
          }
          <button
            onClick={() => [handleSubmit()]}
          className="btn btn-primary"
          type="Submit"
          >
          Submit
          </button>
        </div>
      </section>
    </div>
  </div>
</div>
);
}
export default UserAccessForm;