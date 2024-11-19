import React, { useState } from 'react'
import { Nav } from '../Common/Nav'
import "./styles.css";
export default function PaymentOperations() {
  const [amount, setAmount] = useState();
  return (
    <div>

      <Nav />
      <div class="content-wrapper">

        <section class="content-header">
          <h1>Payment Operations</h1>
        </section>

        <div class="row">
           

           <div class="col-md-6">
             <div class="box">

               <div class="small-box bg-aqua">
                 <div class="inner">
                   <h3>My Wallet</h3>
                   <p>Balance:100</p>
                 </div>
                 <div class="icon">
                   <i class="ion ion-bag"></i>
                 </div>
                 <a href="all-release" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
             </div>
           </div>
         </div>

         
        <section class="content">

          <div class="row">
            <div class="col-md-6">
              <div class="box box-primary">
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
            <div class="col-md-6">
              <div class="box box-primary">
                <div class="box-header">
                  <h3 class="box-title">Send Amount Request</h3>
                </div>

                <div class="box-body">

                  <div class="form-group">
                    <label for="exampleInputEmail1">Amount *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="amount"
                      placeholder="Enter Amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>


                <div class="box-footer">
                  <button type="submit" id="btnsubmit" class="btn btn-primary" onClick={() => { }}>Submit</button>
                </div>
              </div>
            </div>
          </div>



         
        </section>
      </div>

    </div>
  )
}
