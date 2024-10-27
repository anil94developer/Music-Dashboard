
import React from 'react'
import { Nav } from '../Common/Nav'

export const OneRelease = () => {
  return (
    <div>
      <Nav />
      <div class="content-wrapper" >
        <section class="container-fluid content">
          <div class="row">
            <div class="col-md-6">
              <div class="box box-primary">
                <div class="box-header">
                  <h3 class="box-title">New Release</h3>
                </div>

                <form role="form" id="dataform" method="post">
                  <div class="box-body">
                    <label>What is the type of your new release?</label>
                    <div class="form-group">
                      <div class="radio">
                        <label>
                          <input type="radio" name="type" id="type" value="Audio" checked=""/>
                            Audio
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="type" id="type" value="Video"/>
                            Video
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="type" id="type" value="Ringtone" />
                            Ringtone
                        </label>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Release Title *</label>
                        <input type="text" class="form-control" id="releaseTitle" placeholder="Enter Release Title"/>
                      </div>
                    </div>
                  </div>

                  <div class="box-footer">
                    <button type="submit" id="btnsubmit" class="btn btn-primary">Submit</button>
                   </div>
                </form>
              </div>


            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Old Release</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th >#</th>
                        <th>Title</th>
                        <th>Progress</th>
                        <th>Label</th>
                      </tr>
                    </thead>
                    <tbody id="taskTableBody">
                    </tbody>
                  </table>
                </div>
                <div class="box-footer clearfix">
                  <ul class="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">«</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )

} 