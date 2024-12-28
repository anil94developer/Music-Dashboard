import React, { useState } from 'react'
import useSupportController from '../../Controllers/Support-Controller/useSupportController'
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
export default function Support() {
const {
// States
issueType,
email,
clientNumber,
country,
description,
motionType,
motionLink,
attachments,
// State setters
setIssueType,
setEmail,
setClientNumber,
setCountry,
setDescription,
setMotionType,
setMotionLink,
setAttachments,
// Handlers
handleFileChange,
handleSubmit,
supportList
} = useSupportController()
return (
<div>
  <SideBar/>
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="page-heading">
        <h1>Welcome to your help center</h1>
      </section>
      <section className="content">
        <div className="dash-detail dash-detail-two">
          <form onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-4">
                {/* Issue Type */}
                <div className="form-group">
                  <label htmlFor="issueType">Please choose your issue below</label>
                  <select
                    value={issueType}
                    onChange={(e) =>
                    setIssueType(e.target.value)}
                    className="form-control"
                    id="issueType"
                    >
                    <option value="Default Choice">--None--</option>
                    <option value="Modify your Release">Modify your Release</option>
                    <option value="Wrong Artist ID">Wrong Artist ID</option>
                    <option value="Apple motion submission">Apple motion submission</option>
                    <option value="Financial report">Financial report</option>
                    <option value="Payment request">Payment request</option>
                    <option value="Other requests">Other requests</option>
                    <option value="Backstage account login issue">Backstage account login issue</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Your email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                  />
                </div>
              </div>
              <div className="col-4">
                {/* Client Number */}
                <div className="form-group">
                  <label htmlFor="clientNumber">Client number</label>
                  <input
                    type="text"
                    value={clientNumber}
                    onChange={(e) => setClientNumber(e.target.value)}
                  className="form-control"
                  id="clientNumber"
                  placeholder="Enter client number"
                  required
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                {/* Motion Type */}
                <div className="form-group">
                  <label htmlFor="motionType">Type of motion</label>
                  <select
                    value={motionType}
                    onChange={(e) =>
                    setMotionType(e.target.value)}
                    className="form-control"
                    id="motionType"
                    required
                    >
                    <option value="--None--">--None--</option>
                    <option value="album">Album motion</option>
                    <option value="artist">Artist motion</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                {/* Country */}
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    value={country}
                    onChange={(e) =>
                    setCountry(e.target.value)}
                    className="form-control"
                    id="country"
                    required
                    >
                    <option value="">--None--</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                {/* Motion Link */}
                <div className="form-group">
                  <label htmlFor="motionLink">Link to your motion</label>
                  <input
                    type="url"
                    value={motionLink}
                    onChange={(e) => setMotionLink(e.target.value)}
                  className="form-control"
                  id="motionLink"
                  placeholder="Enter a link to your motion file"
                  required
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                {/* Attachments */}
                <div className="form-group">
                  <label htmlFor="attachments">Attachments (optional)</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="form-control"
                    id="attachments"
                    multiple
                    />
                </div>
              </div>
              <div className="col-12">
                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="description"
                  placeholder="Enter the details of your request"
                  rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                {/* Submit Button */}
                <div className="submit-btn">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="support-list content">
        <div className="support-heading">
          <h2>Support List</h2>
        </div>
        <div className="dash-detail dash-detail-two">
          <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
            <thead>
              <tr role="row">
                <th className="sorting">Issue Type</th>
                <th className="sorting">Email</th>
                <th className="sorting">Client Number</th>
                <th className="sorting">Country</th>
                <th className="sorting">Description</th>
                <th className="sorting">MotionType</th>
                <th className="sorting">Status</th>
                <th className="sorting">ACTION</th>
              </tr>
            </thead>
            <tbody role="alert" aria-live="polite" aria-relevant="all">
              {supportList.map((item) => (
              <tr className="odd">
                <td className="  sorting_1">{item.issueType}</td>
                <td className="  ">{item.email}</td>
                <td className="  ">{item.clientNumber}</td>
                <td className="  ">{item.country}</td>
                <td className="  ">{item.description}</td>
                <td className="  ">{item.motionType}</td>
                <td className="  ">{item.status}</td>
                <td className=" "><a onClick={() => { }}>MORE</a></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</div>
)
}