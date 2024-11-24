import React, { useState } from "react";
import { Nav } from "../Common/Nav";
import "./styles.css";

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [accountStatus, setAccountStatus] = useState("All");
  const [permissionLevel, setPermissionLevel] = useState("All");
  const [users, setUsers] = useState([
    {
      login: "Dahariya-music",
      email: "newapdigital@gmail.com",
      accountStatus: "Confirmed, last login 11/08/2024 07:35:40",
      access: "All Except Short-form videos, Catalog optimization, Promotion",
      permissionLevel: "Standard user",
    },
    {
      login: "developerk",
      email: "ab2softwares@gmail.com",
      accountStatus: "Confirmed, last login 11/15/2024 17:39:29",
      access: "All Except Promotion",
      permissionLevel: "Standard user",
    },
    {
      login: "DR-Musical",
      email: "debesh458@gmail.com",
      accountStatus: "Confirmed, last login 11/06/2024 16:32:22",
      access: "All Except Promotion",
      permissionLevel: "Standard user",
    },
    {
      login: "Majisa-Tunes",
      email: "kherajjangidonline.in@gmail.com",
      accountStatus: "Confirmed, last login 11/04/2024 18:48:59",
      access: "All Except Playlists & Charts, Short-form videos, Catalog optimization, Promotion",
      permissionLevel: "Standard user",
    },
  ]);

  const handleDelete = (login) => {
    setUsers(users.filter((user) => user.login !== login));
  };

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
              <select
                value={accountStatus}
                onChange={(e) => setAccountStatus(e.target.value)}
              >
                <option value="All">Account Status: All</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
              </select>
              <select
                value={permissionLevel}
                onChange={(e) => setPermissionLevel(e.target.value)}
              >
                <option value="All">Permission Level: All</option>
                <option value="Standard user">Standard user</option>
                <option value="Admin">Admin</option>
              </select>
              <a href="add-user"> <button className="add-user-button">Add a new user</button></a>
            </div>

            {/* User List */}
            <table className="user-table">
              <thead>
                <tr>
                  <th>Login</th>
                  <th>Email</th>
                  <th>Account Status</th>
                  <th>Access</th>
                  <th>Permission Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (user) =>
                      user.login.toLowerCase().includes(search.toLowerCase()) ||
                      user.email.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((user) => (
                    <tr key={user.login}>
                      <td>{user.login}</td>
                      <td>{user.email}</td>
                      <td>{user.accountStatus}</td>
                      <td>{user.access}</td>
                      <td>{user.permissionLevel}</td>
                      <td>
                        <button className="action-button edit">Edit</button>
                        <button
                          className="action-button delete"
                          onClick={() => handleDelete(user.login)}
                        >
                          Delete
                        </button>
                        <button className="action-button disable">Disable</button>
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

export default UserManagement;
