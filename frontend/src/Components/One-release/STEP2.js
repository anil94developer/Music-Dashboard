
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
            <h3>Upload Media Files</h3>
            {releaseData._id}
            {/* File input for multiple files */}
            <input
                type="file"
                multiple
                accept="audio/*,video/*"
                onChange={handleFileChange}
            />

            {/* Display the uploaded files list */}
            <div className="media-list mt-3">
                {mediaFiles.map(({ fileName, fileData, fileType }) => (
                    <div key={fileName} className="media-item mb-3">
                        <p>{fileData.name}</p>
                        <input
                            type="file"
                            multiple
                            accept="audio/*,video/*"
                            onChange={handleFileChange}
                        />
                        <button onClick={() => handleRemove(fileName)} className="btn btn-danger btn-sm mt-2">
                            Remove
                        </button>
                    </div>
                ))}
                <br></br>
                <div className="mt-3">
                    <button
                        onClick={() => [handleSubmit()]}
                        type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>

            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Old Files</h3>
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
                      {releaseData.step2.map((item) => (
                        <tr className="odd">
                          <td className="  sorting_1">{item.fileName}</td>
                          <td className="  ">{item.fileType}</td>
                          <td className=" "><a href={domainUrl+''+item.fileData} target="_blank">PLAY</a></td>
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
