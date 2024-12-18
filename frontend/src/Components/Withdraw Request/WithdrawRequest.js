import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { getData, postData } from "../../Services/Ops";
import DataTable from "../Common/DataTable/DataTable";
import { Nav } from "../Common/Nav";
import "./styles.css";
import { Box, Button, Modal, Typography } from '@mui/material';

const WithdrawRequest = (props) => {
  const [search, setSearch] = useState("");
  const [accountStatus, setAccountStatus] = useState("All");
  const [permissionLevel, setPermissionLevel] = useState("All");
  const [withdrawalRequest, setWithdrawalRequest] = useState([]);
  const navigate = useNavigate();

  // const handleDelete = (login) => {
  //   setUsers(users.filter((user) => user.login !== login));
  // };


  useEffect(() => {
    getWithdrawListList();
  }, [props])
  const getWithdrawListList = async () => {
    let result = await getData(base.getWithdrawList);
    console.log("getWithdrawList list=========>", result.data)
    const resultList = Array.isArray(result.data)
      ? result.data
        // .filter((item) => item.status === 'Pending') // Filter items with status 'pending'
        .map((item, index) => ({
          _id: item._doc._id,
          id: index + 1,
          amount: item._doc.amount,
          email: item.userdetails.email,
          status: item._doc.status,
          // remark: item._doc.remark,
          action: "",
        }))
      : [];
    setWithdrawalRequest(resultList)
  }
  const handle_change_status = async (status, id) => {
    try {
      let body = {
        "status": status,
        "id": id
      }
      let result = await postData(base.withdrawStatus, body)
      if (result.data.status === true) {
        Swal.fire("Success", result.data.message, "success");
        getWithdrawListList();
      } else {
        Swal.fire("Error", result.data.message, "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  }

  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header', width: 50 },
    { field: '_id', headerName: 'Id', headerClassName: 'black-header', width: 250 },
    { field: 'amount', headerName: 'AMOUNT', headerClassName: 'black-header', width: 150 },
    { field: 'email', headerName: 'EMAIL', headerClassName: 'black-header', width: 250 },
    { field: 'status', headerName: 'STATUS', headerClassName: 'black-header', width: 150 },
    // { field: 'remark', headerName: 'REMARK', headerClassName: 'black-header' ,width:250},

    {
      field: 'action', headerName: 'ACTION', width: 300,
      renderCell: (params) => (
        <div style={{ gap: '8px', display: 'flex',padding:10 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            handle_change_status("Complete", params.row._id);
          }}
        >
          Complete
        </Button>
        <Button
          variant="contained"
          color="secondary" // Corrected the color to "secondary"
          size="small"
          onClick={() => {
            handle_change_status("Reject", params.row._id);
          }}
        >
          Reject
        </Button>
      </div>
      
      )
    }
  ];
  return (
    <div style={{ background: '#000' }}>
      <Nav />
      <div className="content-wrapper">
        <section className="content">

          <div className="content">
            <h1>Withdraw Request Management</h1>

            
            <DataTable
              columns={columns}
              rows={withdrawalRequest}
              height="500"
              width="100%"
            />
            {/* User List */}
            {/* <table className="user-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users && users?.map((user) => {
                  let bg = user.is_deleted == 1 ? 'red' : 'white';
                  return (
                    <tr   key={user._id}>
                      <td>{user._doc.amount}</td>
                      <td>{user.userdetails.email}</td>
                      <td>{user.userdetails.role}</td>
                      <td>{user._doc.status}</td>
                      <td>
                        <select defaultValue={user._doc.status} onChange={(e) => { handle_change_status(e.target.value, user._doc._id) }}>
                          <option value={'Pending'}>{'Pending'}</option>
                          <option value={'Active'}>{'Active'}</option>
                          <option value={'Complete'}>{'Complete'}</option>

                        </select>
                        {/* <button className="action-button edit" onClick={()=>{navigate("/edit-permission",{ state: { userData: user} });}}>Edit</button> */}
            {/* <button
                          className="action-button delete"
                          onClick={() => handleDelete(user.login)}
                        >
                          Delete
                        </button>
                        <button className="action-button disable">Disable</button>  
                      {user.is_deleted == '0' && <button  onClick={() => user_delete(user._id)} className="action-button disable">Disable</button> } 
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WithdrawRequest;
