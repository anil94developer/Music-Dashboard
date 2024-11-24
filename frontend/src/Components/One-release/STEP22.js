import React, { useEffect, useState } from "react";
import Step2Controller from "../../Controllers/One-release-controller/Step2Controller";
import Swal from "sweetalert2";

export default function STEP2(props) {
  const { setStep, releaseData } = props;

  const {
    handleFileChange,
    handleSubmit,
    handleRemove,
    setReleaseData,
    mediaFiles,
  } = Step2Controller();

  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const getData = () => {
      if (releaseData) {
        try {
          const jsonData = JSON.parse(releaseData);
          setReleaseData(jsonData);
        } catch (error) {
          console.error("Error parsing releaseData:", error);
        }
      } else {
        console.error("releaseData is undefined or null");
      }
    };
    getData();
  }, [releaseData, setReleaseData]);

  const handleFileValidation = (event) => {
    const files = Array.from(event.target.files);
    const allowedFormats = ["audio/wav", "audio/x-wav", "audio/flac"];
    const specialChars = /[&/%#@!^*()+=:<>?|{}\[\]`~;]/;
    const errors = [];

    files.forEach((file) => {
      const fileName = file.name;

      // Check file format
      if (!allowedFormats.includes(file.type)) {
        errors.push(`Invalid format: ${fileName}. Only WAV and FLAC files are allowed.`);
      }

      // Check for special characters in file names
      if (specialChars.test(fileName)) {
        errors.push(`Invalid name: ${fileName}. Avoid special characters in file names.`);
      }
    });

    if (errors.length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
      handleFileChange(event); // Proceed with valid files
    }
  };

  return (
    <div className="media-uploader">
      <h3>Upload Media Files</h3>

      <p>
        <strong>You can upload the following formats:</strong>
        <br />
        WAV (PCM only), FLAC
      </p>
      <p>
        <strong>Important:</strong> Avoid using special characters such as & / % #
        etc. in file names. Files might not upload correctly otherwise.
      </p>

      {/* File input for multiple files */}
      <input
        type="file"
        multiple
        accept=".wav,.flac"
        onChange={handleFileValidation}
      />

      {/* Validation errors */}
      {validationErrors.length > 0 && (
        <div className="alert alert-danger mt-3">
          {validationErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      {/* Display the uploaded files list */}
      <div className="media-list mt-3">
        {mediaFiles.map(({ fileName, fileData, fileType }) => (
          <div key={fileName} className="media-item mb-3">
            <p>{fileData.name}</p>
            <button
              onClick={() => handleRemove(fileName)}
              className="btn btn-danger btn-sm mt-2"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-3">
          <button
            onClick={() => [handleSubmit(), setStep("step3")]}
            type="submit"
            className="btn btn-primary"
            disabled={validationErrors.length > 0}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
