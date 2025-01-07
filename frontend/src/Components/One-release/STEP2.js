import React, { useEffect } from 'react'
import { domainUrl } from '../../Constants/Data.constant';
import Step2Controller from '../../Controllers/One-release-controller/Step2Controller';
import Loader from '../Common/Loader';
export default function STEP2(props) {
  const { setStep, releaseData } = props;
  const { handleFileChange, inputRef, files, setReleaseData, uploadProgress,fetchReleaseDetails,
    mediaFiles } = Step2Controller()
   
  useEffect(() => {
    const getData = () => {
      setReleaseData(releaseData)
      fetchReleaseDetails(releaseData._id)
    };
    getData();
  }, [releaseData]);

  
  return (
    <div className="media-uploader">
      <div className="row">
        {/* <div className="dash-detail dash-detail-two media-heading"> */}
        <h2>Upload Media Files</h2>
        <div className="col-lg-5 col-12">
          <div className="form-group">
            <input 
              type="file"
              multiple
              accept="audio/*,video/*"
              className="form-control"
              onChange={handleFileChange}
              ref={inputRef} // Attach ref to the input
              key={uploadProgress}
            />
          </div>
        </div>

        {uploadProgress > 0 && (
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${uploadProgress}%` }}
            >
              <Loader/>
            </div>
          </div>
        )}
        {/* </div> */}

      </div>
      <div className="col-lg-12 col-12">
        <div className="dash-detail">
          <div className="old-heading">
            <h3 className="title">Old Files</h3>
          </div>
          <div className="file-table">
            <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
              <thead>
                <tr role="row">
                  <th>Name</th>
                  <th>TYPE</th>
                  <th>FILE URL</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                {files && files.map((item) => (
                  <tr className="odd">
                    <td className="  sorting_1">{item.fileName}</td>
                    <td className="  ">{item.fileType}</td>
                    <td className="">
                      <a href={item.fileData} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-play"></i> Play
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* {isLoading && "Loading..."} */}
        </div>
      </div>
    </div>
  )
}