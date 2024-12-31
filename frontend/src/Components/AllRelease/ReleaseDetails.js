import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import initialCountryList from '../../Enums/store.list.json';
import { SideBar } from '../Common/SideBar'
import MainStepController from '../../Controllers/One-release-controller/MainStepController';
import { base, domainUrl } from '../../Constants/Data.constant';
import { postData } from '../../Services/Ops';
import Swal from 'sweetalert2';
export const ReleaseDetails = () => {
  const location = useLocation();
  const releaseId = location.state?.releaseId;
  const navigate = useNavigate();
  const { myRelease, setMyRelease, fetchReleaseDetails, } = MainStepController();
  useEffect(() => {
    fetchReleaseDetails(releaseId)
  }, [])

  const getLogo = (name) => {
    let item = initialCountryList.find(item => item.name == name);
    return item.logo
  }
  const changeStatus=async(status)=>{
    let body={
      releaseId:releaseId,
      status:status
    }
    try{
      let result= await postData(base.releaseChangeStatus,body)
     if (result.data.status === true) {
            Swal.fire("Success",`${status} successfully`, "success");
            fetchReleaseDetails(releaseId)
          } else {
            Swal.fire("Error", result.data.message, "error");
          }
    } catch (error) {
          console.error("Error submitting form:", error);
          Swal.fire("Error", "Something went wrong. Please try again later.", "error");
        }
        
  }
  return (
    <div>
      <SideBar />
      <div className="main-cotent">
        <Nav />
        <div className="content-main">
          <section className="content">

            <div className="audio-table release-inner dash-detail dash-detail-two mb-4">
              <div className="release-title">
                <h2>Relase Information</h2>
                <div className="release-detail d-flex flex-wrap mt-3">
                  <p className="release-data"><strong>Title :</strong> {myRelease?.title}</p>
                  <p className="release-data"><strong>SubTitle :</strong> {myRelease?.step1?.subTitle}</p>
                  <p className="release-data">
                    <strong>Artists:</strong>{" "}
                    {myRelease?.step1?.primaryArtist?.map((item, index) => (
                      <span key={index}>
                        {item.name}
                        {index < myRelease.step1.primaryArtist.length - 1 && ", "}
                      </span>
                    ))}
                    <br />
                  </p>
                  <p className="release-data"><strong>Genre :</strong> {myRelease?.step1?.genre}</p>
                  <p className="release-data"><strong>Sub Genre :</strong> {myRelease?.step1?.subGenre}</p>
                  <p className="release-data"><strong>Label Name :</strong> {myRelease?.step1?.labelName}</p>      
                  <p className="release-data"><strong>Format :</strong> {myRelease?.step1?.format}</p>      
                  <p className="release-data"><strong>P Line :</strong> {myRelease?.step1?.line}</p>      
                  <p className="release-data"><strong>C Line :</strong> {myRelease?.step1?.cline}</p>      
                  <p className="release-data"><strong>Production Year :</strong> {myRelease?.step1?.productionYear}</p>      
                  <p className="release-data"><strong>UPCEAN :</strong> {myRelease?.step1?.UPCEAN}</p>      
                  <p className="release-data"><strong>Producer Catalogue Number :</strong> {myRelease?.step1?.producerCatalogueNumber}</p>      
                </div>
              </div>
            </div>
            <div className="audio-table release-inner dash-detail dash-detail-two">
              <div className="release-title">
                <h2>Audio / Video Files</h2>
              </div>
              <div className="release-table">
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
                        <td className=" ">
                          <a href={domainUrl + '' + item.fileData} target="_blank">
                            <img className="img-fluid" src={require('../../assets/images/play.jpg')} alt={"logo"} style={{ width: "20px", height: "20px", borderRadius: "360px" }}
                            />
                          </a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* {isLoading && "Loading..."} */}
            </div>
            <div className="track-table release-inner dash-detail dash-detail-two">
              <div className="release-title">
                <h3 className="title">Tracks</h3>
              </div>
              <div className="release-table">
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
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="release-inner dash-detail dash-detail-two">
                  <div className="release-title">
                    <h3 className="title">Stores</h3>
                  </div>
                  <div className="release-detail d-flex flex-wrap">
                    {myRelease?.step4?.map((item, index) => (
                      <div key={index} className="colElement">
                        <div className="countryItem">
                          <input type="checkbox" checked={item.status === 'active'} />{item.name}
                          <img className="img-fluid" src={require(`../../assets/images/store/${getLogo(item.name)}`)} alt={item.name} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="release-inner dash-detail dash-detail-two">
                  <div className="release-title">
                    <h3 className="title">Release Dates</h3>
                  </div>
                  <div className="release-detail d-flex flex-wrap">
                    <p className="release-data"><strong>Main Release Date:</strong> {myRelease?.step5?.MainReleaseDate}</p>
                    <p className="release-data"><strong>Pre Order Release Date:</strong></p>
                    {myRelease?.step5?.PreOrder?.map((item, index) => (
                      <p className="release-data" key={index}><strong>{item.name}:</strong> {item.date}</p>
                    ))}
                    <p className="release-data"><strong>Exclusive Release Dates:</strong></p>
                    {myRelease?.step5?.ExclusiveReleaseDates?.map((item, index) => (
                      <p className="release-data" key={index}><strong>{item.name}:</strong> {item.date}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h2>{myRelease.status}</h2>
             <div className="submit-btn text-center my-4">
                <button type="submit" className="btn btn-success" onClick={()=>{
                  changeStatus("approve")
                }}>Approve</button>
                <button type="submit" className="btn btn-danger mx-4" onClick={()=>{
                  changeStatus("reject")
                }}>Reject </button>
                 <button type="submit" className="btn btn-info mx-4" onClick={()=>{
                  changeStatus("pending")
                }}>Pending </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};