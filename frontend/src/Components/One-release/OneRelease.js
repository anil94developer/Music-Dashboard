
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
export const OneRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading ,myTracks, setMyTracks} = OneReleaseController();
 
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
      <div class="content-wrapper">
        <section class="container-fluid content">
          <div class="row">
            <div class="col-md-6">
              <div class="box box-primary">
                <div class="box-header">
                  <h3 class="box-title">New Release</h3>
                </div>

                <div class="box-body">
                  <label>What is the type of your new release?</label>
                  <div class="form-group">
                    <div class="radio">
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
                    <div class="radio">
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
                    <div class="radio">
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
                    <div class="form-group">
                      <label for="exampleInputEmail1">Release Title *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="releaseTitle"
                        placeholder="Enter Release Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="box-footer">
                  <button type="submit" id="btnsubmit" class="btn btn-primary" onClick={() => { handleSubmit() }}>Submit</button>
                </div>
              </div>
            </div>
          <div class="col-md-6">
              <div class="box">
                
              </div>
            </div>  
          </div>

        </section>
        

      </div>
 
    </div>

  );
};
