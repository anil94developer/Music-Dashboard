import React from 'react'
import useBankInformationController from '../../Controllers/Bank-Information-Controller/useBankInformationController'
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
export default function BankInformation() {
const { bankDetails, handleChange, handleSubmit } = useBankInformationController();
return (
<div>
  <SideBar/>
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="page-heading">
        <h1>Bank Details</h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box box-info">
              <div className="box-body">
                <form onSubmit={handleSubmit}>
                  {/* PAN Number */}
                  <div className="form-group">
                    <label className="form-group-text" id="pan_number-addon">
                    Pan Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Pan Number"
                      aria-label="Pan Number"
                      aria-describedby="pan-number-addon"
                      name="panNumber"
                      value={bankDetails.panNumber}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Account Holder */}
                  <div className="form-group">
                    <label className="form-group-text" id="account-holder-addon">
                    Account Holder
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter account holder name"
                      aria-label="Account Holder"
                      aria-describedby="account-holder-addon"
                      name="accountHolder"
                      value={bankDetails.accountHolder}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Bank Name */}
                  <div className="form-group mt-3">
                    <label className="form-group-text" id="bank-name-addon">
                    Bank Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter bank name"
                      aria-label="Bank Name"
                      aria-describedby="bank-name-addon"
                      name="bankName"
                      value={bankDetails.bankName}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* IFSC Code */}
                  <div className="form-group mt-3">
                    <label className="form-group-text" id="ifsc-code-addon">
                    IFSC Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter IFSC code"
                      aria-label="IFSC Code"
                      aria-describedby="ifsc-code-addon"
                      name="ifscCode"
                      value={bankDetails.ifscCode}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Account Number */}
                  <div className="form-group mt-3">
                    <label className="form-group-text" id="account-number-addon">
                    Account Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter account number"
                      aria-label="Account Number"
                      aria-describedby="account-number-addon"
                      name="accountNumber"
                      value={bankDetails.accountNumber}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Account Type */}
                  <div className="form-group mt-3">
                    <label className="form-group-text" id="account-type-addon">
                    Account Type
                    </label>
                    <select
                      className="form-control"
                      name="accountType"
                      value={bankDetails.accountType}
                      onChange={handleChange}
                      required
                      >
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary mt-3">
                  Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
);
}