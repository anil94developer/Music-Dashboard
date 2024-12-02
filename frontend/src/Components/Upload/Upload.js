import React from 'react'
import { Nav } from '../Common/Nav'

export default function Upload() {
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
      <h1> Uploads</h1>
        <div >
          <div className="col-md-12">
            <div className="box p-4 border rounded shadow-sm">
              <div className="box-body">
                <h3 className="mb-4">Upload Media Files</h3> 
                <section className="content-header">
                  
                  {/* Upload Input */}
                  <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                      <div className="form-group">
                        {/* <label className="form-label">Select Media Files:</label> */}
                        <input
                          type="file"
                          multiple
                          accept="audio/*,video/*"
                          className="form-control"
                        // onChange={handleFileChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <button
                          // onClick={() => handleSubmit()}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </div>
        </div>


        <section className="container-fluid content">
        </section>
      </div>

    </div>
  )
}
