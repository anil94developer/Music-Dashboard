import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { base } from '../../Constants/Data.constant';
import { getData, postData } from '../../Services/Ops';
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
import "./styles.css";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';


import DataTable from "../Common/DataTable/DataTable";
import { Box, Button, Modal, Typography } from '@mui/material';


export default function PaymentOperations() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState();
  const [widthdraw, setWidthdraw] = useState([]);
  const [userData, setUserData] = useState({})
  const [withdrawalRequest, setWithdrawalRequest] = useState([]);

  useEffect(() => {
    // getWidthdrawal()
    getProfile()
  }, [])
  const getProfile = async () => {
    try {
      // const userId = "671e08391a2071afe4269f80";
      const result = await getData(base.userProfile); // pass as query parameter
      console.log(result)
      if (result && result.status === true) {
        setUserData(result.data); // Assuming result.data has user data directly
      } else {
        Swal.fire({
          icon: 'error', // Use "error" icon for unauthorized message
          title: 'Unauthorized !!', // Set your custom title here
          text: 'You do not have permission to access this resource.' // Custom message (optional)
        });
        // Uncomment if you want to redirect:
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.'
      });
    }
  };
  const handleSubmit = async () => {
    if (amount < 100) {
      Swal.fire("Error", "Please enter miimum $100", "error");
    } else {
      let body = {
        amount: amount
      }
      let result = await postData(base.sendWithdrawal, body);
      if (result.data.status === true) {
        Swal.fire("Success", result.data.message, "success");
        window.location.reload();
      } else {
        Swal.fire("Error", result.message, "error");
      }
    }
  }
  const getWidthdrawal = async () => {
    let result = await getData(base.getWithdraw);
    console.log(result)
    setWidthdraw(result.data)
    const resultList = Array.isArray(result?.data)
      ? result.data
        .map((item, index) => ({
          id: index + 1,
          amount: item.amount,
          status: item.status,
        }))
      : [];
    setWithdrawalRequest(resultList)
  }
  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header', },
    { field: 'amount', headerName: 'AMOUNT', headerClassName: 'black-header', },
    { field: 'status', headerName: 'STATUS', headerClassName: 'black-header', },
  ];
return (
  <div>
    <SideBar />
    <div className="main-cotent">
      <Nav />
      <div className="content-main">
        <section className="page-heading">
          <h1>Payment Operation</h1>
        </section>
        <section className="my-wallet dash-detail">
          <div className="wallet-inner d-flex flex-wrap align-items-center">
            <div className="inner">
              <h4>Available Balance</h4>
              <p>Balance: € {userData?.wallet}</p>
            </div>
            <div className="icon">
              <img className="img-fluid" src={require('../../assets/images/music-wallet1.png')} />
            </div>
          </div>
        </section>
        <section className="amount-request">
          <div className="row">
            {widthdraw[widthdraw?.length - 1]?.amount > 0 && widthdraw[widthdraw?.length - 1]?.status == "pending" ?
              <div className="col-md-6">
                <div className="box box-primary">
                  <div className="balance-container">
                    <h2>My available balance</h2>
                    <p>
                      Your Available balance is calculated according to your royalties and your advance, if you have an active advance.
                    </p>
                    <a href="#" className="faq-link">
                      Find out more on the FAQ
                    </a>
                    <div className="payment-status">
                      <h3>Your payment of € {JSON.stringify(widthdraw[widthdraw?.length - 1]?.amount)} </h3>
                      <div className="status-steps">
                        <div className={widthdraw[widthdraw?.length - 1]?.status == 'pending' ? "step active" : "step"}>
                          <span className="circle">✔</span>
                          <span className="label">Requested</span>
                        </div>
                        <div className={widthdraw[widthdraw?.length - 1]?.status == 'active' ? "step active" : "step"}>
                          <span className="circle">2</span>
                          <span className="label">Processed</span>
                        </div>
                        <div className={widthdraw[widthdraw?.length - 1]?.status == 'complete' ? "step active" : "step"}>
                          <span className="circle">3</span>
                          <span className="label">Complete</span>
                        </div>
                      </div>
                      <p className="payment-info">
                        You have requested the payment <strong>{widthdraw[widthdraw?.length - 1]?._id}</strong> of € {JSON.stringify(widthdraw[widthdraw?.length - 1]?.amount)} on {moment(widthdraw[widthdraw?.length - 1]?.createdAt).format("DD-MM-YYYY HH:MM:SS")}.
                        <br />
                        Your payment request will be confirmed by our team and sent to the payout provider with in 7 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="col-lg-5 col-12">
                <div className="dash-detail dash-detail-two amount-form">
                  <div className="amount-request-heading">
                    <h3 className="title">Send Amount Request</h3>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Amount *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      placeholder="Enter Amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="submit-btn">
                    <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={() => { handleSubmit() }}>Submit</button>
                  </div>
                </div>
              </div>
            }

            <div className="col-lg-7 col-12">
              <div className="dash-detail dash-detail-two">
                <DataTable
                  columns={columns}
                  rows={withdrawalRequest}
                  height="500"
                  columnNo={5}
                // width={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
)
}