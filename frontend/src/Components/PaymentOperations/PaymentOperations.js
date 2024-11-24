import React, { useState } from 'react'
import { Nav } from '../Common/Nav'
import "./styles.css";
export default function PaymentOperations() {
  const [amount, setAmount] = useState();
  return (
    <div>

      <Nav />
      <div className="content-wrapper">

        <section className="content-header">
          <h1>Payment Operations</h1>
        </section>

        <div className="row">
           

           <div className="col-md-6">
             <div className="box">

               <div className="small-box bg-aqua">
                 <div className="inner">
                   <h3>My Wallet</h3>
                   <p>Balance:100</p>
                 </div>
                 <div className="icon">
                   <i className="ion ion-bag"></i>
                 </div>
                 <a href="all-release" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
               </div>
             </div>
           </div>
         </div>

         
        <section className="content">

          <div className="row">
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
                    <h3>Your payment of 871.38 €</h3>

                    <div className="status-steps">
                      <div className="step active">
                        <span className="circle">✔</span>
                        <span className="label">Requested</span>
                      </div>
                      <div className="step">
                        <span className="circle">2</span>
                        <span className="label">Sent</span>
                      </div>
                      <div className="step">
                        <span className="circle">3</span>
                        <span className="label">Processed</span>
                      </div>
                    </div>

                    <p className="payment-info">
                      You have requested the payment <strong>BLVS00420255</strong> of 871.38 € on 11/15/2024.
                      <br />
                      Your payment request will be confirmed by our team and sent to the payout provider on 12/01/2024.
                    </p>

                    <a href="#" className="transaction-history">
                      Transaction history & invoices
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">Send Amount Request</h3>
                </div>

                <div className="box-body">

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
                </div>


                <div className="box-footer">
                  <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={() => { }}>Submit</button>
                </div>
              </div>
            </div>
          </div>



         
        </section>
      </div>

    </div>
  )
}
