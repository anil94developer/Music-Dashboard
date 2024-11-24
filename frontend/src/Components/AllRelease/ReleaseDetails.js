
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import OneReleaseController from '../../Controllers/One-release-controller/OneReleaseController';
import { Nav } from '../Common/Nav'
import MainStepController from '../../Controllers/One-release-controller/MainStepController';
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
            <div class="content-wrapper">
                <section class="container-fluid content">
                    <div class="row">

                        <div class="col-md-12">
                            {myRelease.title != null &&
                                <div style={{ padding: "20px" }}>
                                    <h1>Data Display</h1>

                                    {/* Step 1 */}
                                    <section>
                                        <h2>Step 1</h2>
                                        <p><strong>Sub Title:</strong> {myRelease.step1.subTitle}</p>
                                        <p><strong>Genre:</strong> {myRelease.step1.genre}</p>
                                        <p><strong>Sub Genre:</strong> {myRelease.step1.subGenre}</p>
                                        <p><strong>Label Name:</strong> {myRelease.step1.labelName}</p>
                                        <p><strong>Format:</strong> {myRelease.step1.format}</p>
                                        <p><strong>Original Release Date:</strong> {myRelease.step1.originalReleaseDate}</p>
                                        <p><strong>Production Year:</strong> {myRelease.step1.productionYear}</p>
                                    </section>

                                    {/* Step 3 */}
                                    <section>
                                        <h2>Step 3</h2>
                                        {myRelease.step3.map((item, index) => (
                                            <div key={index} style={{ marginBottom: "20px" }}>
                                                <p><strong>Content Type:</strong> {item.ContentType}</p>
                                                <p><strong>Primary Track Type:</strong> {item.PrimaryTrackType}</p>
                                                <p><strong>Title:</strong> {item.Title}</p>
                                                <p><strong>Primary Artists:</strong></p>
                                                <ul>
                                                    {item.PrimaryArtist.map((artist, idx) => (
                                                        <li key={artist._id || idx}>{artist.name}</li>
                                                    ))}
                                                </ul>
                                                <p><strong>Featuring:</strong></p>
                                                <ul>
                                                    {item.Featuring.map((feature, idx) => (
                                                        <li key={feature._id || idx}>{feature.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </section>
                                </div>
                            }
                        </div>
                    </div>

                </section>
            </div>

        </div>

    );
};
