
import React, { useEffect } from 'react'
import Step1Controller from '../../Controllers/One-release-controller/Step1Controller'

export default function STEP1(props) {
    const { setStep, releaseData } = props;

    const { releaseTitle, setReleaseTitle,
        versionSubtitle, setVersionSubtitle,
        primaryArtist, setPrimaryArtist,
        featuring, setFeaturing,
        isVariousArtists, setIsVariousArtists,
        genre, setGenre,
        subgenre, setSubgenre,
        labelName, setLabelName,
        format, setFormat,
        releaseDate, setReleaseDate,
        pLine, setPLine,
        cLine, setCLine,
        productionYear, setProductionYear,
        upcEan, setUpcEan,
        producerCatalogueNumber, setProducerCatalogueNumber, handleSubmit, setReleaseData, imagePreview, setImagePreview, handleImageChange } = Step1Controller();
    useEffect(() => {
        const getData = () => {
            if (releaseData) {
                const jsonData = JSON.parse(releaseData);
                setReleaseTitle(jsonData.title)
                setVersionSubtitle(jsonData.subtitle);
                setPrimaryArtist(jsonData.primaryArtist);
                setFeaturing(jsonData.featuring);
                setIsVariousArtists(jsonData.isVariousArtists);
                setGenre(jsonData.genre);
                setSubgenre(jsonData.subgenre);
                setLabelName(jsonData.labelName);
                setFormat(jsonData.format);
                setReleaseDate(jsonData.originalReleaseDate);
                setPLine(jsonData.pLine);
                setCLine(jsonData.cLine);
                setProductionYear(jsonData.productionYear);
                setUpcEan(jsonData.UPCEAN);
                setProducerCatalogueNumber(jsonData.producerCatalogueNumber);
                setReleaseData(jsonData)
            } else {
                console.error("Data is undefined or null");
            }
        }
        getData()
    }, [])

    return (<div>
        <div class="box-header">
            <h1>Release Information</h1>
        </div>
        <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="releaseTitle">Release title *</label>
                    <input
                        value={releaseTitle}
                        type="text"
                        className="form-control"
                        id="releaseTitle"
                        placeholder="Enter release title"
                        onChange={(e) => setReleaseTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="versionSubtitle">Version/Subtitle</label>
                    <input
                        value={versionSubtitle}
                        type="text"
                        className="form-control"
                        id="versionSubtitle"
                        placeholder="Enter version or subtitle"
                        onChange={(e) => setVersionSubtitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="primaryArtist">Primary artist *</label>
                    <input
                        value={primaryArtist}
                        type="text"
                        className="form-control"
                        id="primaryArtist"
                        placeholder="Enter primary artist"
                        onChange={(e) => setPrimaryArtist(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="featuring">Featuring</label>
                    <input
                        value={featuring}
                        type="text"
                        className="form-control"
                        id="featuring"
                        placeholder="Enter featuring artists"
                        onChange={(e) => setFeaturing(e.target.value)}
                    />
                </div>

                <div className="form-check">
                    <input
                        checked={isVariousArtists}
                        type="checkbox"
                        className="form-check-input"
                        id="variousArtists"
                        onChange={(e) => setIsVariousArtists(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="variousArtists">Various Artists / Compilation</label>
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre *</label>
                    <select
                        value={genre}
                        className="form-control"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">Select a genre</option>
                        <option value="429">African</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="subgenre">Subgenre *</label>
                    <select
                        value={subgenre}
                        className="form-control"
                        id="subgenre"
                        onChange={(e) => setSubgenre(e.target.value)}
                    >
                        <option value="">Select a sub-genre</option>
                        <option value="430">Asian</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="labelName">Label name *</label>
                    <select
                        value={labelName}
                        className="form-control"
                        id="labelName"
                        onChange={(e) => setLabelName(e.target.value)}
                    >
                        <option value="">Select a label</option>
                        <option value="label">Label 1</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="format">Format *</label>
                    <select
                        value={format}
                        className="form-control"
                        id="format"
                        onChange={(e) => setFormat(e.target.value)}
                    >
                        <option value="">Select a format</option>
                        <option value="SINGLE">SINGLE</option>
                        <option value="EP">EP</option>
                        <option value="ALBUM">ALBUM</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate">Physical/Original release date</label>
                    <input
                        value={releaseDate}
                        type="date"
                        className="form-control"
                        id="releaseDate"
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
                <div className="form-group">
                    <div className="img-cover">
                        <img className="img-thumbnail" src={imagePreview} alt="Cover Preview" />
                        <input
                            type="file"
                            name="image"
                            accept="image/png, image/jpeg, image/jpg, image/gif, image/bmp, image/webp, image/tiff"
                            onChange={handleImageChange} // Trigger this function on file selection
                        />
                        <p>Upload cover</p>
                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="pLine">℗ line *</label>
                    <input
                        value={pLine}
                        type="text"
                        className="form-control"
                        id="pLine"
                        placeholder="Enter ℗ line"
                        onChange={(e) => setPLine(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cLine">© line *</label>
                    <input
                        value={cLine}
                        type="text"
                        className="form-control"
                        id="cLine"
                        placeholder="Enter © line"
                        onChange={(e) => setCLine(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="productionYear">Production Year *</label>
                    <select
                        value={productionYear}
                        className="form-control"
                        id="productionYear"
                        onChange={(e) => setProductionYear(e.target.value)}
                    >
                        <option value="">Select a year</option>
                        <option value="2024">2024</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="upcEan">UPC/EAN</label>
                    <input
                        value={upcEan}
                        type="text"
                        className="form-control"
                        id="upcEan"
                        placeholder="Enter UPC/EAN"
                        onChange={(e) => setUpcEan(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="producerCatalogueNumber">Producer catalogue number</label>
                    <input
                        value={producerCatalogueNumber}
                        type="text"
                        className="form-control"
                        id="producerCatalogueNumber"
                        placeholder="Enter catalogue number"
                        onChange={(e) => setProducerCatalogueNumber(e.target.value)}
                    />
                </div>

                <button
                    onClick={() => [handleSubmit(), setStep('step2')]}
                    className="btn btn-primary btn-block btn-flat"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
    )
}

