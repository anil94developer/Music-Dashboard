
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
export const OneRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading, myTracks, setMyTracks } = OneReleaseController();

  function exportTableToExcel(tableId, fileName = 'TableData.xlsx') {
    // Get the table element by ID
    const table = document.getElementById(tableId);
    if (!table) {
      console.error(`Table with ID ${tableId} not found.`);
      return;
    }

    // Convert table to a worksheet
    const worksheet = XLSX.utils.table_to_sheet(table);

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, fileName);
  }
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="container-fluid content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">New Release</h3>
                </div>

                <div className="box-body">
                  <label>What is the type of your new release?</label>
                  <div className="form-group">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="type"
                          id="type"
                          value="Audio"
                          checked="true"
                          onChange={(e) => setType(e.target.value)}
                        />
                        Audio
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="type"
                          id="type"
                          value="Video"
                          onChange={(e) => setType(e.target.value)}
                        />
                        Video
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="type"
                          id="type"
                          value="Ringtone"
                          onChange={(e) => setType(e.target.value)}
                        />
                        Ringtone
                      </label>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Release Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="releaseTitle"
                        placeholder="Enter Release Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="box-footer">
                  <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={() => { handleSubmit() }}>Submit</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">

              </div>
            </div>
          </div>

        </section>


      </div>

    </div>

  );
};
