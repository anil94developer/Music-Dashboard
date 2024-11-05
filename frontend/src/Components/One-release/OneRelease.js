
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
export const OneRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading } = OneReleaseController();
 
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
            {/* <div class="col-md-6">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Old Release</h3>
                </div>
                <div class="box-body">

                  <table id="example2" class="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row">
                         
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TITILE</th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TYPE</th>
                        <th class="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">ACTION</th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                      {myRelease.map((item) => (
                        <tr class="odd">
                          <td class="  sorting_1">{item.title}</td>
                          <td class="  ">{item.type}</td>
                          <td class=" "><a onClick={() => { moreAction(item) }}>MORE</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {isLoading && "Loading..."}
              </div>
            </div> */}
          </div>

        </section>
        <section className="content">
          <div className="col-md-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">All Releases</h3>
                <button 
              onClick={() => exportTableToExcel('example2', 'Releases.xlsx')}
              className="btn btn-success" 
              style={{ float: 'right' }}
            >
              Download as Excel
            </button>
              </div>
             
              <div className="box-body table-responsive">
                <table id="example2" className="table table-bordered table-striped">
                  <thead> 
                    <tr>
                      <th>Content Type</th>
                      <th>Title</th>
                      <th>Catalog ID</th>
                      <th>Content Code</th>
                      <th>Language</th>
                      <th>Category</th>
                      <th>Genre</th>
                      <th>Sub Genre</th>
                      <th>Release Date</th>
                      <th>Released Country</th>
                      <th>Country Of Origin</th>
                      <th>State of Origin</th>
                      <th>Version</th>
                      <th>Vendor</th>
                      <th>Copyright P Line</th>
                      <th>Copyright C Line</th>
                      <th>Lyricist</th>
                      <th>Music Director</th>
                      <th>Singer</th>
                      <th>Actor</th>
                      <th>Actress</th>
                      <th>Banner</th>
                      <th>Producer</th>
                      <th>Director</th>
                      <th>Is Explicit</th>
                      <th>Is Compilation</th>
                      <th>Trivia</th>
                      <th>Keywords</th>
                      <th>Tags</th>
                      <th>Order</th>
                      <th>Mood</th>
                      <th>Tempo</th>
                      <th>Location/Temple</th>
                      <th>Deity/Saint</th>
                      <th>Festival/Occasion</th>
                      <th>Religion</th>
                      <th>Instrument</th>
                      <th>Romantic</th>
                      <th>Party</th>
                      <th>Item Song</th>
                      <th>UnPlugged</th>
                      <th>Bhangra</th>
                      <th>Parent Song Code</th>
                      <th>Movie Release Date</th>
                      <th>Solo-Duet-Group</th>
                      <th>Social Media Links</th>
                      <th>Relationship</th>
                    </tr>
                  </thead>
                  <tbody>
                  {myRelease.map((item) => ( 
                    <tr key={item}>
                      <td>{item.type}</td>
                      <td> <a onClick={() => { moreAction(item) }}>{item.title}</a></td>
                      <td></td>
                      <td></td>
                      <td>English</td>
                      <td>Music</td>
                      <td>{item.step1.genre}</td>
                      <td>{item.step1.subGenre}</td>
                      <td>{item.step1.originalReleaseDate}</td>
                      <td>INDIA</td>
                      <td>INDIA</td>
                      <td>California</td>
                      <td>Version 1</td>
                      <td>Vendor A</td>
                      <td>{item.step1.line}</td>
                      <td>{item.step1.line}</td>
                      <td>{item.step1.cline}</td>
                      <td>{}</td>
                      <td>Singer</td>
                      <td>Actor</td>
                      <td>Actress</td>
                      <td>Banner</td>
                      <td>Producer</td>
                      <td>Director</td>
                      <td>No</td>
                      <td>No</td>
                      <td>Trivia</td>
                      <td>Keywords</td>
                      <td>Tags</td>
                      <td>Order</td>
                      <td>Mood</td>
                      <td>Tempo</td>
                      <td>Location</td>
                      <td>Deity</td>
                      <td>Festival</td>
                      <td>Religion</td>
                      <td>Instrument</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>Parent Song</td>
                      <td>2022-02-02</td>
                      <td>Solo</td>
                      <td>Links</td>
                      <td>Relationship</td>
                    </tr>
                    
                   )) }
                    {/* More rows can be added dynamically */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
       

      </div>
 
    </div>

  );
};
