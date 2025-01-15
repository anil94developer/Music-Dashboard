import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { useUserProfile } from "../../Context/UserProfileContext";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import { SideBar } from '../Common/SideBar'
import "./styles.css";
const UserAccess = (props) => {
const { userProfile } = useUserProfile()
const [search, setSearch] = useState("");
const [accountStatus, setAccountStatus] = useState("All");
const [permissionLevel, setPermissionLevel] = useState("All");
const [users, setUsers] = useState([]);
const navigate = useNavigate();
const handleDelete = (login) => {
setUsers(users.filter((user) => user.login !== login));
};
useEffect(() => {
getUserList();
}, [props])
const getUserList = async () => {
let result = await getData(base.getUserList);
console.log("my user list=========>", result.data)
setUsers(result.data)
}
const user_delete = async (userId, status) => {
try {
let body = {
"userId": userId,
status: status == 1 ? 0 :1
}
let result = await postData(base.deleteUser, body)
if (result.data.status === true) {
Swal.fire("Success", result.data.message, "success");
getUserList();
} else {
Swal.fire("Error", result.data.message, "error");
}
} catch (error) {
console.error("Error submitting form:", error);
Swal.fire("Error", "Something went wrong. Please try again later.", "error");
}
}
return (
  <div>
  <SideBar />
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <div className="page-heading d-flex flex-wrap align-items-center justify-content-between">
        <h1>User Management</h1>
        <a className="btn btn-primary" href="add-user">Add a new user</a>
      </div>
      <section className="content">
        {/* Filters */} 
        {/* User List */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users?.map((user) => (
            <tr key={user?.userDetails?._id}>
              <td>{user?.userDetails?.name}</td>
              <td>{user?.userDetails?.email}</td>
              <td>{user?.userDetails?.is_deleted == 1 ? "DeActive" : "Active"}</td>
              <td>
                <button
                className={user?.userDetails?.is_deleted == 0 ?"action-button delete":"btn btn-primary"}
                onClick={() => {
                user_delete(user?.userDetails?._id, user?.userDetails?.is_deleted);
                }}
                >
                { user?.userDetails?.is_deleted == 0 ? "DeActive" : "Active"}
                </button>
                {/* <button className="btn btn-primary" onClick={() => { navigate("/edit-permission", { state: { userData: user } }); }}>Edit</button> */}
                
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  </div>
</div>
);
};
export default UserAccess;