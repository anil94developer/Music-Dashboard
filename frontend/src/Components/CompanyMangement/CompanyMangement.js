import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { getData, postData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import "./styles.css";
import { Box, Button, Modal, Typography } from '@mui/material';
import DataTable from "../Common/DataTable/DataTable";

const CompanyManagement = (props) => {
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
    console.log("my user list=========>", result.data)
    const resultList = Array.isArray(result.data)
      ? result.data
        // .filter((item) => item.status === 'Pending') // Filter items with status 'pending'
        .map((item, index) => ({
          _id: item._id,
          id: index + 1,
          name: item.name,
          email: item.email,
          wallet: item.wallet,
          status: item.is_deleted == 1 ? "DeActive" : "Active", 
          action: "",
        }))
      : [];
    setUsers(resultList)
  }
  const user_delete = async (userId) => {

    try {
      let body = {
        "userId": userId
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

  const onDetails = (id) => {
    navigate("/UserDetails", { state: { userId: id } });
  }


  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header', width: 50 },
    { field: '_id', headerName: 'Client ID', headerClassName: 'black-header', width: 250 }, 
    { field: 'name', headerName: 'Name', headerClassName: 'black-header', width: 100 },
    { field: 'email', headerName: 'EMAIL', headerClassName: 'black-header', width: 200 },
    { field: 'wallet', headerName: 'WALLET', headerClassName: 'black-header', width: 60 }, 
    { field: 'status', headerName: 'STATUS', headerClassName: 'black-header', width: 200 },
    {
      field: 'action', headerName: 'ACTION', width: 300,
      renderCell: (params) => (
        <div style={{ gap: '8px', display: 'flex',padding:10 }}>
        <Button
          variant="contained"
          color="info"
          size="small"
          onClick={() => {
            user_delete(params.row._id);
          }}
        >
          Disable
        </Button>
         <Button
          variant="contained"
          color="secondary" // Corrected the color to "secondary"
          size="small"
          onClick={() => {
            navigate("/CompanyDetails", { state: { userId: params.row._id } });

          }}
        >
          View
        </Button>  
      </div>
      
      )
    }
  ];
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="content">

          <div className="content">
            <h1>User Management</h1>

            {/* Filters */}
            <div className="filters">
              {/* <input
                type="text"
                placeholder="Search by login or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              /> */}

              <a href="AddCompany"> <button className="add-user-button">Add Master Account</button></a>
            </div>
 
            <DataTable
              columns={columns}
              rows={users}
              height="500"
              width="100%"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyManagement;
