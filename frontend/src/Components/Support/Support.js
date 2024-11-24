import React, { useState } from 'react'
import useSupportController from '../../Controllers/Support-Controller/useSupportController'
import { Nav } from '../Common/Nav'

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
      <Nav />
      <div class="content-wrapper">

        <section class="content-header">
          <h1>
            Welcome to your help center</h1>
        </section>


        <section className="content">
          <div className="col-md-12">
          <div className="box box-info">
            <div className="box-body">
              <form onSubmit={handleSubmit} >
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6">
                    {/* Issue Type */}
                    <div className="form-group">
                      <label htmlFor="issueType">Please choose your issue below</label>
                      <select
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
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

                    {/* Motion Type */}
                    <div className="form-group">
                      <label htmlFor="motionType">Type of motion</label>
                      <select
                        value={motionType}
                        onChange={(e) => setMotionType(e.target.value)}
                        className="form-control"
                        id="motionType"
                        required
                      >
                        <option value="--None--">--None--</option>
                        <option value="album">Album motion</option>
                        <option value="artist">Artist motion</option>
                      </select>
                    </div>
                      {/* Country */}
                      <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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

                  {/* Right Column */}
                  <div className="col-md-6">
                  

                   

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
                
                  {/* Submit Button */}
              
                </div>

                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </section>

        <section class="content">
          <div class='col-md-12'>
            <div class="box box-info">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Support List</h3>
                </div>
                <div class="box-body">

                  <table id="example2" class="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row">
                        <th class="sorting">Issue Type</th>
                        <th class="sorting">Email</th>
                        <th class="sorting">Client Number</th>
                        <th class="sorting">Country</th>
                        <th class="sorting">Description</th>
                        <th class="sorting">MotionType</th>
                        <th class="sorting">Status</th>
                        <th class="sorting">ACTION</th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                      {supportList.map((item) => (
                        <tr class="odd">
                          <td class="  sorting_1">{item.issueType}</td>
                          <td class="  ">{item.email}</td>
                          <td class="  ">{item.clientNumber}</td>
                          <td class="  ">{item.country}</td>
                          <td class="  ">{item.description}</td>
                          <td class="  ">{item.motionType}</td>
                          <td class="  ">{item.status}</td>
                          <td class=" "><a onClick={() => { }}>MORE</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* {isLoading && "Loading..."} */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
