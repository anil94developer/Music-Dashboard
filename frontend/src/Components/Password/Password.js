import React from 'react'
import useChangePasswordController from '../../Controllers/Change-Password/useChangePasswordController'
import { Nav } from '../Common/Nav'

export default function Password() {
  const { newPassword,
    setNewPassword,
    oldPassword, setOldPassword,
    handleSubmit,
  } = useChangePasswordController();
  return (
    <div>
      <Nav />
      <div class="content-wrapper">

        <section class="content-header">
          <h1> Password</h1>
        </section>


        <section class="container-fluid content">
          <section class="content">
            <div class='row'>
              <div class='col-md-12'>
                <div class="box box-info">
                  <div class="box-body">


                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="form-group-text" id="old-password-addon">
                          Old Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter old password"
                          aria-label="Old Password"
                          aria-describedby="old-password-addon"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)} // Update state on input change
                          required
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label className="form-group-text" id="new-password-addon">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter new password"
                          aria-label="New Password"
                          aria-describedby="new-password-addon"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)} // Update state on input change
                          required
                        />
                      </div>

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
  )
}
