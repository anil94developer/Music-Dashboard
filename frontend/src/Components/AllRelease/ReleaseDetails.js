import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import initialCountryList from '../../Enums/store.list.json';
import { SideBar } from '../Common/SideBar'
import MainStepController from '../../Controllers/One-release-controller/MainStepController';
import { domainUrl } from '../../Constants/Data.constant';
export const ReleaseDetails = () => {
const location = useLocation();
const releaseId = location.state?.releaseId;
const navigate = useNavigate();
const { myRelease, setMyRelease, fetchReleaseDetails, } = MainStepController();
useEffect(() => {
fetchReleaseDetails(releaseId)
}, [])

const getLogo=(name)=>{
 let item= initialCountryList.find(item => item.name == name);
 return item.logo
}
return (
<div>
  <SideBar />
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="content">
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
                  <td className=" "><a href={domainUrl + '' + item.fileData} target="_blank">PLAY</a></td>
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
                    <input type="checkbox" checked={item.status === 'active'}/>{item.name}
                    <img className="img-fluid" src={require(`../../assets/images/store/${getLogo(item.name)}`)} alt={item.name}/>
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
      </section>
    </div>
  </div>
</div>
);
};