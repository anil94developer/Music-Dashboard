import React from 'react';
import { useUserProfile } from '../../Context/UserProfileContext';
import useProfileController from '../../Controllers/Profile-Controller/useProfileController';
import { Nav } from '../Common/Nav';

export default function Profile() {
  const {userProfile}= useUserProfile()
  const { profile, handleChange, handleSubmit } = useProfileController();

  return (
    <div>
      <Nav />
      <div className="content-wrapper">

        <section className="content-header">
          <h1>Profile</h1>
        </section>

        <section className="container-fluid content">
          <section className="content">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="box box-info">
                    <div className="box-body">
                      {userProfile?.role == "company" &&
                        <>
                          {/* Company Name */}

                          <div className="form-group">

                            <label for="exampleInputEmail1"> Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter company name"
                              name="companyName"
                              value={profile.companyName}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Client Number */}
                          <div className="form-group mt-3">
                            <label >Client Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter client number"
                              name="clientNumber"
                              value={profile.clientNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Main Email */}
                          <div className="form-group mt-3">
                            <label >Main Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter main email address"
                              name="mainEmail"
                              value={profile.mainEmail}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Royalties Email */}
                          <div className="form-group mt-3">
                            <label >Royalties Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter royalties email address"
                              name="royaltiesEmail"
                              value={profile.royaltiesEmail}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </>
                      }
                      {/* First Name */}
                      <div className="form-group mt-3">
                        <label >First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                          name="firstName"
                          value={profile.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div className="form-group mt-3">
                        <label >Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                          name="lastName"
                          value={profile.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="form-group mt-3">
                        <label >Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter phone number"
                          name="phoneNumber"
                          value={profile.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>


                      {/* Postal Address */}
                      <div className="form-group mt-3">
                        <label >Postal Address</label>
                        <textarea
                          className="form-control"
                          placeholder="Enter postal address"
                          name="postalAddress"
                          value={profile.postalAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Postal Code */}
                      <div className="form-group mt-3">
                        <label >Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter postal code"
                          name="postalCode"
                          value={profile.postalCode}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* City */}
                      <div className="form-group mt-3">
                        <label >City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter city"
                          name="city"
                          value={profile.city}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Country */}
                      <div className="form-group mt-3">
                        <label >Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter country"
                          name="country"
                          value={profile.country}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Time Zone */}
                      <div className="form-group mt-3">
                        <label >Default Time Zone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter default time zone"
                          name="timeZone"
                          value={profile.timeZone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Language */}
                      <div className="form-group mt-3">
                        <label >Default Language</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter default language"
                          name="language"
                          value={profile.language}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="btn btn-primary mt-3">
                        Update Profile
                      </button>


                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
}
