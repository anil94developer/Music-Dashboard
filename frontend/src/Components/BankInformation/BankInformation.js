import React from 'react'
import useBankInformationController from '../../Controllers/Bank-Information-Controller/useBankInformationController'
import { Nav } from '../Common/Nav'

export default function BankInformation() {
  const { bankDetails, handleChange, handleSubmit } = useBankInformationController();

  return (
    <div>
      <Nav />
      <div className="content-wrapper">

        <section className="content-header">
          <h1>Bank Details</h1>
        </section>

        <section className="container-fluid content">
          <section className="content">
            <div className="row">
              <div className="col-md-8">
                <div className="box box-info">
                  <div className="box-body">

                    <form onSubmit={handleSubmit}>
                      {/* Account Holder */}
                      <div className="input-group">
                        <span className="input-group-text" id="account-holder-addon">
                          Account Holder
                        </span>
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
                      <div className="input-group mt-3">
                        <span className="input-group-text" id="bank-name-addon">
                          Bank Name
                        </span>
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
                      <div className="input-group mt-3">
                        <span className="input-group-text" id="ifsc-code-addon">
                          IFSC Code
                        </span>
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
                      <div className="input-group mt-3">
                        <span className="input-group-text" id="account-number-addon">
                          Account Number
                        </span>
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
                      <div className="input-group mt-3">
                        <span className="input-group-text" id="account-type-addon">
                          Account Type
                        </span>
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
        </section>
      </div>
    </div>
  );
}
 