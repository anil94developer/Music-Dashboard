
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
export const AllDraft = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading ,myTracks, setMyTracks} = OneReleaseController();
 
  return (
    <div>
      <Nav />
      <div class="content-wrapper">
        <section class="container-fluid content">
          <div class="row">
            
          <div class="col-md-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Draft Release</h3>
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
            </div>  
          </div>

        </section> 
      </div>
 
    </div>

  );
};
