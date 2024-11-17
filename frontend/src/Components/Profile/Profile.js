import React from 'react'; 
import useProfileController from '../../Controllers/Profile-Controller/useProfileController';
import { Nav } from '../Common/Nav';

export default function Profile() {
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
            <div className="row">
              <div className="col-md-8">
                <div className="box box-info">
                  <div className="box-body">
                    <form onSubmit={handleSubmit}>
                      {/* Company Name */}
                      <div className="input-group">
                        <span >Company Name</span>
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
                      <div className="input-group mt-3">
                        <span >Client Number</span>
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
                      <div className="input-group mt-3">
                        <span >Main Email Address</span>
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
                      <div className="input-group mt-3">
                        <span >Royalties Email Address</span>
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

                      {/* First Name */}
                      <div className="input-group mt-3">
                        <span >First Name</span>
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
                      <div className="input-group mt-3">
                        <span >Last Name</span>
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
                      <div className="input-group mt-3">
                        <span >Phone Number</span>
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
                      <div className="input-group mt-3">
                        <span >Postal Address</span>
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
                      <div className="input-group mt-3">
                        <span >Postal Code</span>
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
                      <div className="input-group mt-3">
                        <span >City</span>
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
                      <div className="input-group mt-3">
                        <span >Country</span>
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
                      <div className="input-group mt-3">
                        <span >Default Time Zone</span>
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
                      <div className="input-group mt-3">
                        <span >Default Language</span>
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
