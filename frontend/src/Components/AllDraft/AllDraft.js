import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
import * as XLSX from 'xlsx';
import { Box, Button, Modal, Typography } from '@mui/material';
import DataTable from '../Common/DataTable/DataTable';
export const AllDraft = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading, myReleaseDraft, setMyTracks } = OneReleaseController();
  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header' },
    { field: '_id', headerName: 'id', headerClassName: 'black-header' },
    { field: 'type', headerName: 'Type', headerClassName: 'black-header' },
    { field: 'status', headerName: 'Status', headerClassName: 'black-header' },
    { field: 'title', headerName: 'Title / Artist', headerClassName: 'black-header' },
    { field: 'label', headerName: 'Label', headerClassName: 'black-header' },
    { field: 'releaseDate', headerName: 'Release date / Hour / Time zone', headerClassName: 'black-header', width: 150 },
    { field: 'noOfTrack', headerName: '# of track', headerClassName: 'black-header' },
    { field: 'upcCatalogNumber', headerName: 'UPC / Catalog Number', headerClassName: 'black-header', width: 150 },
    { field: 'deliveredTerritories', headerName: 'Delivered Territories & Stores  ', headerClassName: 'black-header' },
    {
      field: 'action', headerName: 'Action',
      renderCell: (params) => (
        <div style={{ gap: '8px' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => moreAction(params.row)}
          >
            More
          </Button>
        </div>
      )
    }
  ];
  return (
    <div>
      <SideBar />
      <div className="main-cotent">
        <Nav />
        <div className="content-main">
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Draft Releasess</h3>
                  </div>
                  <div className="box-body">
                    {/* <DataTable
                      columns={columns}
                      rows={myReleaseDraft}
                      height="500"
                      width="100%"
                    /> */}
                    {/* 
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
                */}
                <div className="box-body table-responsive">
                      <table id="example2" className="table table-bordered table-striped">
                        <thead>
                          <tr role="row">
                            <th >Title / Artist</th>
                            <th >Type</th>
                            <th >Status</th>
                            <th >Label</th>
                            <th >Release date / Hour / Time zone</th>
                            <th ># of track</th>
                            <th >UPC / Catalog Number</th>
                            <th >Delivered Territories & Stores</th>
                            <th >ACTION</th>
                          </tr>
                        </thead>
                        <tbody role="alert" aria-live="polite" aria-relevant="all">
                          {myRelease.map((item) => (
                            item.status == "submit" &&
                            <tr className="odd">
                              <td className="  sorting_1">{item.title}</td>
                              <td className="  ">{item.type}</td>
                              <td className="  ">{item.status}</td>
                              <td className="  ">{item?.step1?.labelName}</td>
                              <td className="  ">{item.step1?.originalReleaseDate}</td>
                              <td className="  ">{Array.isArray(item?.step3) ? item.step3.length : 0}</td>
                              <td className="  ">{item.step1?.UPCEAN}</td>
                              <td className="  ">{item?.step5?.MainReleaseDate}</td>

                              <td>
                                <div className="action-buttons">
                                  <button title="Download" className="action-button">
                                    <a  onClick={() => moreAction(item)}>
                                      <i className="fa fa-eye"></i>
                                    </a>
                                  </button>
                                   
                                </div>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {isLoading && "Loading..."}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};