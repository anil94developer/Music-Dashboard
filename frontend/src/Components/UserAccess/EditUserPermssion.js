import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { getData, postData, putData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import { SideBar } from '../Common/SideBar'
import SearchInput from "../Common/SearchBox";
import "./UserAccessForm.css";
function EditUserPermission() {
const navigate = useNavigate();
const location = useLocation();
const userData = location.state?.userData;
const [labelNameList, setLabelNameList] = useState([])
const [menuPermission, setMenuPermission] = useState([]);
const [otherPermission, setOtherPermission] = useState([]);
const [userPermission, setUserPermission] = useState({
email: userData.userDetails?.email,
password: userData.userDetails?.password,
name: userData.userDetails?.naem,
noOfLabel: userData.userDetails?.noOfLabel,
});
const [selectedItems, setSelectedItems] = useState(otherPermission.map(() => []));
useEffect(() => {
setMenuPermission(userData.menuPermission)
setOtherPermission(userData.otherPermission)
}, [])
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
name: userPermission.name,
noOfLabel: userPermission.noOfLabel,
"registeredUserId": userData.userDetails?._id,
menuPermission: menuPermission,
otherPermission: otherPermission,
};
try {
const result = await putData(base.updatePermission, payload);
if (result?.status === true) {
Swal.fire("Success", result.data.message, "success");
navigate("/User Access")
} else {
Swal.fire("Error", result.message, "error");
}
} catch (error) {
Swal.fire("Error", "An error occurred during submission", "error");
console.error("Submission error:", error);
}
};
// const handleSearchChange = (index, data) => {
//     // Update selected item for a particular section
//     const updatedItems = [...selectedItems];
//     updatedItems[index] = data;
//     setSelectedItems(updatedItems);
// };
// const fetchLabel = async () => {
//     let result = await getData(base.labelList);
//     setLabelNameList(result.data)
//     console.log(base.labelList, "==============>", result)
//   }
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
        <div className="user-edit-form">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" value={userPermission.name} onChange={(e) => setUserPermission((prev) => ({ ...prev, name: e.target.value }))}/>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="form-group">
                <label>Email:</label>
                <input type="email" value={userPermission.email} onChange={(e) => setUserPermission((prev) => ({ ...prev, email: e.target.value }))}/>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="form-group">
                <label>Password:</label>
                <input type="text" value={userPermission.password} onChange={(e) => setUserPermission((prev) => ({ ...prev, password: e.target.value }))}/>
              </div>
            </div>
          </div>
          <div className="menu-permission">
            <h2>Menu Permissions</h2>
            <div className="permission-form form-section d-flex flex-wrap">
              {menuPermission.map((menu, index) => (
              <div className="form-inner d-flex align-items-center" key={menu.mainMenuName}>
                <input type="checkbox" checked={menu.status} onChange={(e) => handleCheckboxChange(e, "menuPermission", index)}/>
                <label>{menu.mainMenuName}</label>
                {menu.submenu.map((submenu, subIndex) => (
                <label key={submenu.subMenuName} style={{ marginLeft: "20px" }}>
                <input type="checkbox" checked={submenu.status} onChange={(e) => handleCheckboxChange(e, "menuPermission", index, subIndex)}
                />
                {submenu.subMenuName}
                </label>
                ))}
              </div>
              ))}
            </div>
          </div>
          {/* Catalog Scope */}
          <div className="catalog-form">
            <h3 className="title">Catalog Scope</h3>
            {otherPermission.map((item, index) =>
            (
            <label key={item.sectionName}>
              <input
                type="checkbox"
                checked={item.status}
                onChange={(e) => handleCheckboxChange(e, "otherPermission", index)}
              />
              {item.sectionName}
              {item.status && (
              <div className="form-group">
            <label htmlFor="featuring">Search {item.sectionName}</label>
            {/* <SearchInput
              artistData={selectedItems[index]}
              setSelectData={(data) => handleSearchChange(index, data)}
            /> */}
            </div>
            )}
            </label>
            )
            )}
          </div>
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
export default EditUserPermission;