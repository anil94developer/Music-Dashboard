
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
export const AllRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading, myTracks, setMyTracks } = OneReleaseController();

  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <section className="container-fluid content">
          <div className="row">

            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Old Release</h3>
                </div>
                <div className="box-body">

                  <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row">

                        <th >TITILE</th>
                        <th >TYPE</th>
                        <th >ACTION</th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                      {myRelease.map((item) => (
                        item.status == "submit" &&
                        <tr className="odd">
                          <td className="  sorting_1">{item.title}</td>
                          <td className="  ">{item.type}</td>
                          <td className=" "><a onClick={() => {
                            navigate("/release-details", { state: { releaseId: item._id } });
                          }}>MORE</a></td>
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
