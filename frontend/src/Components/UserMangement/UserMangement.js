import React, { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import "./styles.css";

const UserManagement = (props) => {
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
    let result = await getData(base.userList);
    console.log("my user list=========>",result.data)
    setUsers(result.data)
  }
  const user_delete=async(userId)=>{
   
    try {
      let body={
        "userId":userId
      }
      let result = await postData(base.deleteUser,body)
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

  const onDetails=(id)=>{
    navigate("/UserDetails",{ state: { userId: id } });

  }
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="content">

          <div className="content">
            <h1>User Management</h1>

            {/* Filters */}
            <div className="filters">
              <input
                type="text"
                placeholder="Search by login or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
               
              {/* <a href="add-user"> <button className="add-user-button">Add a new user</button></a> */}
            </div>

            {/* User List */}
            <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Wallet</th>
                  <th>Status</th> 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users && users?.map((user) => {
                  let bg = user.is_deleted == 1 ? 'red' : 'white';
                  return(
                    <tr style={{ backgroundColor: `${bg}` }} key={user._id}>
                      <td>{user.role}</td>
                      <td><a onClick={()=>{onDetails(user._id)}}>{user.email}</a></td>
                      <td>{user.wallet}</td>
                      <td>{user.is_active}</td> 
                      <td>
                       {/* <button className="action-button edit" onClick={()=>{navigate("/edit-permission",{ state: { userData: user} });}}>Edit</button> */}
                        {/* <button
                          className="action-button delete"
                          onClick={() => handleDelete(user.login)}
                        >
                          Delete
                        </button>
                        <button className="action-button disable">Disable</button> */}
                        {user.is_deleted == '0' && <button  onClick={() => user_delete(user._id)} className="action-button disable">Disable</button> }
                      </td>
                    </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserManagement;
