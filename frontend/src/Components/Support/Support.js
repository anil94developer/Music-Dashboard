import React,{useState} from 'react'
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
 }= useSupportController()

  return (
    <div>
      <Nav />
      <div class="content-wrapper">

        <section class="content-header">
          <h1>
            Welcome to your help center</h1>
        </section>


        <section class="content">
          <div class='row'>
            <div class='col-md-8'>
              <div class="box box-info">
              <div class="box-body">
                   
              <form onSubmit={handleSubmit}>
      {/* Issue Type */}
      <div className="form-group">
        <label htmlFor="issueType">Please choose your issue below</label>
        <select
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          className="form-control"
          id="issueType"
        >
          <option value="Apple motion submission">Apple motion submission</option>
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

      {/* Subject (Read-Only) */}
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          value="Apple motion submission"
          className="form-control"
          id="subject"
          readOnly
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

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">
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
  )
}
