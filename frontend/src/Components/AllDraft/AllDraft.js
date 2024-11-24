
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
      <div className="content-wrapper">
        <section className="container-fluid content">
          <div className="row">
            
          <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Draft Release</h3>
                </div>
                <div className="box-body">

                  <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row"> 
                        <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TITILE</th>
                        <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">TYPE</th>
                        <th className="sorting" role="columnheader" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">ACTION</th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                      {myRelease.map((item) => (
                        item.status == "Pending" &&

                        <tr className="odd">
                          <td className="  sorting_1">{item.title}</td>
                          <td className="  ">{item.type}</td>
                          <td className=" "><a onClick={() => { moreAction(item) }}>MORE</a></td>
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
