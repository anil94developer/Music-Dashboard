
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import MainStepController from '../../Controllers/One-release-controller/MainStepController';
import { domainUrl } from '../../Constants/Data.constant';
import appImage from "../../assets/images/store/apptune.png";
export const ReleaseDetails = () => {
    const location = useLocation();
    const releaseId = location.state?.releaseId;
    const navigate = useNavigate();
    const { myRelease, setMyRelease, fetchReleaseDetails, } = MainStepController();

    useEffect(() => {
        fetchReleaseDetails(releaseId)
    }, [])

    return (
        <div>
            <Nav />
            <div className="content-wrapper">
                <section className="container-fluid content">
                    <div className="row">

                        <div className="col-md-12">
                            {myRelease.title != null &&
                                <div style={{ padding: "20px" }}>
                                    {/* <h1>Data Display</h1> */}

                                    {/* Step 1 */}
                                    <div className="col-md-12">
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Release Information</h3>
                                            </div>
                                            <div className="box-body form-row">
                                                <div className="col-md-6">
                                                    <img style={{ height: 400, width: 200 }} src={domainUrl + myRelease.step1.coverImage} alt="Cover Preview" />

                                                </div>
                                                <div className="col-md-6">
                                                    <p><strong>Sub Title:</strong> {myRelease.step1.subTitle}</p>
                                                    <p><strong>Genre:</strong> {myRelease.step1.genre}</p>
                                                    <p><strong>Sub Genre:</strong> {myRelease.step1.subGenre}</p>
                                                    <p><strong>Label Name:</strong> {myRelease.step1.labelName}</p>
                                                    <p><strong>Format:</strong> {myRelease.step1.format}</p>
                                                    <p><strong>Original Release Date:</strong> {myRelease.step1.originalReleaseDate}</p>
                                                    <p><strong>Production Year:</strong> {myRelease.step1.productionYear}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <br></br>
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Audio / Video Files</h3>
                                            </div>
                                            <div className="box-body">

                                                <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                                                    <thead>
                                                        <tr role="row">
                                                            <th>Name</th>
                                                            <th>TYPE</th>
                                                            <th>FILE URL</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                                                        {myRelease?.step2 && myRelease?.step2.map((item) => (
                                                            <tr className="odd">
                                                                <td className="  sorting_1">{item.fileName}</td>
                                                                <td className="  ">{item.fileType}</td>
                                                                <td className=" "><a href={domainUrl + '' + item.fileData} target="_blank">PLAY</a></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* {isLoading && "Loading..."} */}
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <br></br>
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Tracks</h3>
                                            </div>
                                            <div className="box-body">
                                                <div className="box box-primary">
                                                    <div className="box">
                                                        <div className="box-body">
                                                            <div className="dataTables_wrapper form-inline" role="grid">

                                                                <table className="table" aria-describedby="example2_info">
                                                                    <thead>
                                                                        <tr draggable="true">
                                                                            <th rowspan="1" colspan="1">Volume</th>
                                                                            <th rowspan="1" colspan="1">Content Type</th>
                                                                            <th rowspan="1" colspan="1">PrimaryTrackType</th>
                                                                            <th rowspan="1" colspan="1">SecondaryTrackType</th>
                                                                            <th rowspan="1" colspan="1">Title</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                                                                        {myRelease?.step3 && myRelease?.step3.map((item) => (
                                                                            <tr draggable="true" className="odd">
                                                                                <td className="  sorting_1">{item.Volume}</td>
                                                                                <td className="">{item.ContentType}</td>
                                                                                <td className=" ">{item.PrimaryTrackType}</td>
                                                                                <td className=" ">{item.SecondaryTrackType}</td>
                                                                                <td className=" ">{item.Title}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <br></br>
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Stores</h3>
                                            </div>
                                            <div className="box-body">

                                                {myRelease?.step4?.map((item, index) => (
                                                    <div key={index} className="colElement">
                                                        <div className="countryItem">
                                                            <input
                                                                type="checkbox"
                                                                checked={item.status === 'active'}
                                                            />&nbsp;&nbsp;
                                                            {item.name}
                                                            &nbsp;&nbsp;
                                                           <img src={appImage} height="100" width="100" />

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <br></br>
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Release Dates</h3>
                                            </div>
                                            <div className="box-body form-row">
                                                <p><strong>Main Release Date:</strong> {myRelease?.step5?.MainReleaseDate}</p>
                                                <div className="col-md-6"> 
                                                    <p><strong>Pre Order Release Date:</strong></p>
                                                    {myRelease?.step5?.PreOrder?.map((item, index) => (
                                                        <div key={index}  >
                                                            <p><strong>{item.name}:</strong> {item.date}</p>
                                                        </div>
                                                    ))} 
                                                </div>
                                                <div className="col-md-6"> 
                                                    <p><strong>Exclusive Release Dates:</strong></p>
                                                    {myRelease?.step5?.ExclusiveReleaseDates?.map((item, index) => (
                                                        <div key={index}  >
                                                            <p><strong>{item.name}:</strong> {item.date}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </section>
            </div>

        </div>

    );
};
