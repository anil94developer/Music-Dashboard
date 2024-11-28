import React, { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { base } from "../../Constants/Data.constant";
import { getData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import "./styles.css";

const UserAccess = (props) => {
  const [search, setSearch] = useState("");
  const [accountStatus, setAccountStatus] = useState("All");
  const [permissionLevel, setPermissionLevel] = useState("All");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (login) => {
    setUsers(users.filter((user) => user.login !== login));
  };


  useEffect(() => {
    const getUserList = async () => {
      let result = await getData(base.getUserList);
      console.log("my user list=========>",result.data)
      setUsers(result.data)
    }
    getUserList();
  }, [props])

  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="content">

          <div className="container">
            <h1>User Management</h1>

            {/* Filters */}
            <div className="filters">
              <input
                type="text"
                placeholder="Search by login or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
               
              <a href="add-user"> <button className="add-user-button">Add a new user</button></a>
            </div>

            {/* User List */}
            <table className="user-table">
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
                {users && users?.map((user) => (
                    <tr key={user.userDetails._id}>
                      <td>{user.userDetails.role}</td>
                      <td>{user.userDetails.email}</td>
                      <td>{user.userDetails.wallet}</td>
                      <td>{user.userDetails.is_active}</td> 
                      <td>
                       <button className="action-button edit" onClick={()=>{navigate("/edit-permission",{ state: { userData: user} });}}>Edit</button>
                        {/* <button
                          className="action-button delete"
                          onClick={() => handleDelete(user.login)}
                        >
                          Delete
                        </button>
                        <button className="action-button disable">Disable</button> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserAccess;
