
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import * as XLSX from 'xlsx';
import DataTable from '../Common/DataTable/DataTable';
import { Box, Button, Modal, Typography } from '@mui/material';

export const AllRelease = () => {
  const navigate = useNavigate();
  const { setType, setTitle, handleSubmit, myRelease, moreAction, isLoading, myTracks, setMyTracks } = OneReleaseController();


  const columns = [
    { field: 'id', headerName: '#', headerClassName: 'black-header' },
    { field: '_id', headerName: 'Id', headerClassName: 'black-header' },
    { field: 'type', headerName: 'Type', headerClassName: 'black-header' },
    { field: 'status', headerName: 'Status', headerClassName: 'black-header' },
    { field: 'title', headerName: 'Title / Artist', headerClassName: 'black-header' },
    { field: 'label', headerName: 'Label', headerClassName: 'black-header' },
    { field: 'releaseDate', headerName: 'Release date / Hour / Time zone', headerClassName: 'black-header' ,width:150},
    { field: 'noOfTrack', headerName: '# of track', headerClassName: 'black-header' },
    { field: 'upcCatalogNumber', headerName: 'UPC / Catalog Number', headerClassName: 'black-header',width:150 },
    { field: 'deliveredTerritories', headerName: 'Delivered Territories & Stores	', headerClassName: 'black-header' },
        {
      field: 'action', headerName: 'Action',
      renderCell: (params) => (
        <div style={{ gap: '8px' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              navigate("/release-details", { state: { releaseId: params.row._id } });
            }}
          >
            More
          </Button>
        </div>
      )
    }
  ];

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
                  <DataTable
                    columns={columns}
                    rows={myRelease}
                    height="500"
                    width="100%"
                  />
                  {/* <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
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
                  </table> */}
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
