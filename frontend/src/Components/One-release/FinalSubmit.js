import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import MainStepController from '../../Controllers/One-release-controller/MainStepController'
import { Nav } from '../Common/Nav';
const FinalSubmit = () => {
  const location = useLocation();
  const releaseId = location.state?.releaseId;
  const { step, setStep, myRelease, fetchReleaseDetails, isLoading, } = MainStepController();
  const [isRefresh, setIsRefresh] = useState(new Date().getTime())
  const [artistConfirmed, setArtistConfirmed] = useState(false);
  const [releaseDate, setReleaseDate] = useState("2024-11-29");
  const [ignoreDate, setIgnoreDate] = useState(false);
  const [oacUrl, setOacUrl] = useState("");

  useEffect(() => {
    fetchReleaseDetails(releaseId)
    console.log("releaseId--------", releaseId)
  }, [releaseId])



  // Handlers
  const handleCancel = () => {
    alert("You have canceled the process.");
  };

  const handleSubmit = () => {
    const message = `Submission Details:
- Artist Pages Confirmed: ${artistConfirmed ? "Yes" : "No"}
- Release Date: ${releaseDate} ${ignoreDate ? "(Ignored Recommendation)" : ""}
- YouTube OAC URL: ${oacUrl ? oacUrl : "Not Provided"}`;

    alert(message);
  };

  return (
    <div>
      <Nav />
      <div class="content-wrapper">
        <section class="container-fluid content">
          <div style={styles.container}>
            <h1>Finalize Your Release</h1>

            {/* Section 1: Confirm Artist Pages */}
            <section style={styles.section}>
              {/* {JSON.stringify(myRelease.step1.primaryArtist)} */}
              <h2>1. Confirm Your Artist Pages</h2>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th>Artist</th>
                    <th>Apple Artist Page</th>
                    <th>Spotify Artist Page</th>
                  </tr>
                </thead>
                <tbody>

                {myRelease.step1?.primaryArtist?.length > 0 &&
  myRelease.step1.primaryArtist.map((artist, index) => (
    <tr key={index}>
      {/* Artist Name */}
      <td>{artist.name}</td>

      {/* iTunes Link */}
      <td>
        {artist.itunesLinkId ? (
          <a
            href={artist.itunesLinkId}
            target="_blank"
            rel="noopener noreferrer"
          >{artist.itunesLinkId}
            <img
              src="https://static.believedigital.com/images/logos/stores/408.svg"
              className="artist-image"
              alt="iTunes Logo"
            />
          </a>
        ) : (
          `No Artist Page details`
        )}
      </td>

      {/* Spotify Link */}
      <td>
        {artist.link ? (
          <a
            href={artist.link}
            target="_blank"
            rel="noopener noreferrer"
          >{artist.link}
            <img
              src="https://static.believedigital.com/images/logos/stores/204.svg"
              className="artist-image"
              alt="Spotify Logo"
            />
          </a>
        ) : (
          `No Artist Page details`
        )}
      </td>
    </tr>
  ))}

                  
                  <tr>
                    <td>Various Artists</td>
                    <td>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        36270
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Spotify Link
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label>
                <input
                  type="checkbox"
                  checked={artistConfirmed}
                  onChange={(e) => setArtistConfirmed(e.target.checked)}
                />
                I confirm that an Artist Page has not been created for the stores above.
              </label>
            </section>

            {/* Section 2: Set Release Date */}
            <section style={styles.section}>
              <h2>2. Set Your Release Date</h2>
              <p>
                You requested a release of your product in less than 48 hours. We
                recommend setting your release date to at least two weeks ahead.
              </p>
              <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                style={styles.inputField}
              />
              <label>
                <input
                  type="checkbox"
                  checked={ignoreDate}
                  onChange={(e) => setIgnoreDate(e.target.checked)}
                />
                Ignore recommended release date and proceed with my selected date.
              </label>
            </section>

            {/* Section 3: YouTube OAC Certification */}
            <section style={styles.section}>
              <h2>3. Get Your OAC Certified by YouTube</h2>
              <p>
                Enter the URL of your Official Artist Channel (OAC) to certify your
                YouTube account as your official channel.
              </p>
              <input
                type="text"
                value={oacUrl}
                onChange={(e) => setOacUrl(e.target.value)}
                style={styles.inputField}
                placeholder="Enter Official Artist Channel URL"
              />
              <a
                href="https://www.youtube.com/oac-certification-guide"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.tooltip}
              >
                What is OAC Certification?
              </a>
            </section>

            {/* Action Buttons */}
            <div style={styles.btnContainer}>
              <button style={{ ...styles.btn, ...styles.btnDanger }} onClick={handleCancel}>
                Cancel
              </button>
              <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={handleSubmit}>
                Save & Continue
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  section: {
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  tooltip: {
    fontSize: "0.9em",
    color: "#0073e6",
    textDecoration: "none",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  btnDanger: {
    backgroundColor: "#e74c3c",
    color: "#fff",
  },
  btnPrimary: {
    backgroundColor: "#3498db",
    color: "#fff",
  },
};

export default FinalSubmit;
