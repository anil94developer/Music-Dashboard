
import React,{useEffect} from 'react'
import Step2Controller from '../../Controllers/One-release-controller/Step2Controller';
 

export default function STEP2(props) {
  const { setStep, releaseData } = props;

   const {handleFileChange,handleSubmit,handleRemove,setReleaseData,
    mediaFiles} = Step2Controller()

    useEffect(() => {
      const getData = () => {
          if (releaseData) {
              const jsonData = JSON.parse(releaseData);
              setReleaseData(jsonData)
          } else {
              console.error("Data is undefined or null");
          }
      }
      getData()
  }, [])


  return (
  
    <div className="media-uploader">
            <h3>Upload Media Files</h3>
            
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
                        
                        {/* Render appropriate media player */}
                        {fileType === "audio" ? (
                            <audio controls>
                                <source src={fileName} type={fileData.fileType} />
                                Your browser does not support the audio element.
                            </audio>
                        ) : fileType === "video" ? (
                            <video controls width="300">
                                <source src={fileName} type={fileData.fileType} />
                                Your browser does not support the video element.
                            </video>
                        ) : (
                            <img src={fileName} alt="Uploaded" width="300" />
                        )}

                        {/* Remove button */}
                        <button onClick={() => handleRemove(fileName)} className="btn btn-danger btn-sm mt-2">
                            Remove
                        </button>
                    </div>
                ))}

               
            </div>
            <br></br>
            <button
                    onClick={() => [handleSubmit(),setStep("step3")]}
                    className="btn btn-primary btn-block btn-flat"
                    type="submit"
                >
                    Save
                </button>
        </div>
  )
}

