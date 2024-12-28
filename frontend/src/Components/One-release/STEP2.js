import React, { useEffect } from 'react'
import { domainUrl } from '../../Constants/Data.constant';
import Step2Controller from '../../Controllers/One-release-controller/Step2Controller';
export default function STEP2(props) {
const { setStep, releaseData } = props;
const { handleFileChange, handleSubmit, handleRemove, setReleaseData,
mediaFiles } = Step2Controller()
useEffect(() => {
const getData = () => {
setReleaseData(releaseData)
};
getData();
}, [releaseData]);
return (
<div className="media-uploader">
  <div className="row">
    <div className="col-md-4 col-12">
      <div className="dash-detail dash-detail-two media-heading">
        <h2>Upload Media Files</h2>
        {/* Uploaded Media Files */}
        <div className="media-list">
          {mediaFiles && mediaFiles.map(({ fileName, fileData, fileType }) => (
          <div
            key={fileName}
            // style={{borderColor:'#fff',borderWidth:2,borderStyle:'solid'}}
            className="border media-item d-flex align-items-center justify-content-between border p-3 mb-3 rounded"
            >
            {/* File Details */}
            {/* Actions */}
            <div className="d-flex align-items-center">
              <div className="row " style={{ padding: 10 }}>
              {/* Left Column */}
              <div className="col-md-6 ">
                <div className="form-group">
                  {/* <input
                    type="file"
                    accept="audio/*,video/*"
                    className="form-control form-control-sm me-2"
                    onChange={handleFileChange} 
                    /> */}
                  <p className="mb-1 fw-bold">{fileData.name}</p>
                  {/* <small className="text-muted">Type: {fileType}</small> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <button
                    onClick={() => handleRemove(fileName)}
                  className="btn btn-danger btn-sm"
                  >
                  Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="upload-files d-flex flex-wrap">
        <div className="form-group">
          {/* <label className="form-label">Select Media Files:</label> */}
          <input
            type="file"
            multiple
            accept="audio/*,video/*"
            className="form-control"
            onChange={handleFileChange}
            />
        </div>
        <div className="submit-btn">
          <button
            onClick={() => handleSubmit()}
          type="submit"
          className="btn btn-primary"
          >
          Submit
          </button>
        </div>
      </div>
    </div>
  </div>
    <div className="col-md-8 col-12">
      <div className="dash-detail dash-detail-two">
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
              {releaseData?.step2 && releaseData?.step2.map((item) => (
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
</div>
</div>
)
}