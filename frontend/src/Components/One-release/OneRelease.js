
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'

export const OneRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease,moreAction } = OneReleaseController();
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
                <div class="box-header">
                  <h3 class="box-title">Old Release</h3>
                </div>
                <div class="box-body">
                  <table id="example2" class="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row">
                        {/* <th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">#</th> */}
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
                          <td class=" "><a onClick={()=>{moreAction(item)}}>MORE</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};
