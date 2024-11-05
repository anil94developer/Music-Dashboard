
import React, { useEffect } from 'react'
import Step1Controller from '../../Controllers/One-release-controller/Step1Controller'
import SearchInput from '../Common/SearchBox';
import ARTISTLIST from '../../Enums/artist.list.json';
import GENRES from '../../Enums/genres.json';
import { images } from '../../assets/images';


export default function STEP1(props) {
    const { setStep, releaseData } = props;

    const { releaseTitle, setReleaseTitle,
        versionSubtitle, setVersionSubtitle,
        primaryArtist, setPrimaryArtist,
        featuring, setFeaturing,
        isVariousArtists, setIsVariousArtists,
        genre, setGenre,
        subGenre, setSubGenre,
        labelName, setLabelName,
        format, setFormat,
        releaseDate, setReleaseDate,
        pLine, setPLine,
        cLine, setCLine,
        productionYear, setProductionYear,
        upcEan, setUpcEan,
        newLabelName, setNewLabelName,
        labelNameStatus, setLabelNameStatus,
        producerCatalogueNumber, setProducerCatalogueNumber, handleSubmit, imagePreview, setImagePreview, handleImageChange, setStepNext, addNewLabel, labelNameList,setReleaseData } = Step1Controller();
    useEffect(() => {
        const getData = () => {
            setReleaseData(releaseData)
            if (releaseData.step1) { 
                let jsonData = releaseData.step1;
                setReleaseTitle(releaseData.title) 
                setVersionSubtitle(jsonData.subTitle);
                setPrimaryArtist(jsonData.primaryArtist);
                setFeaturing(jsonData.featuring);
                setIsVariousArtists(jsonData.isVariousArtists);
                setGenre(jsonData.genre);
                setSubGenre(jsonData.subGenre);
                setLabelName(jsonData.labelName);
                setFormat(jsonData.format);
                setReleaseDate(jsonData.originalReleaseDate);
                setPLine(jsonData.line);
                setCLine(jsonData.cline);
                setProductionYear(jsonData.productionYear);
                setUpcEan(jsonData.UPCEAN);
                setProducerCatalogueNumber(jsonData.producerCatalogueNumber);
               
            } else {
                console.error("Data is undefined or null");
            }

        }
        getData()
    }, [releaseData])
    // Get the subgenres for the selected genre
    const selectedGenre = GENRES.find((g) => g.name === genre);
    const subgenres = selectedGenre ? selectedGenre.subgenres : [];

    return (<div>
        <div class="box-header">
            <h1>Release Information</h1>
        </div>
        {releaseData._id}
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
                    <SearchInput artistData={primaryArtist} setSelectData={setPrimaryArtist} />
                </div>

                <div className="form-group">
                    <label htmlFor="featuring">Featuring</label>
                    <SearchInput artistData={featuring} setSelectData={setFeaturing} />
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
                        <option value={genre}>{genre ? genre : 'Select a genre'}</option>
                        {GENRES.map((item) =>
                            (<option value={item.name}>{item.name}</option>)
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="subgenre">SubGenre * </label>
                    <select
                        value={subGenre}
                        className="form-control"
                        id="subgenre"
                        onChange={(e) => setSubGenre(e.target.value)}
                        disabled={!subgenres.length} // Disable if no subgenres available
                    >
                        <option value={subGenre}>{subGenre ? subGenre : 'Select a Subgenre'}</option>
                        {subgenres.map((sub) => (
                            <option key={sub.id} value={sub.name}>{sub.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="labelName">Label name * </label>
                    <div className="dynamic-input-container d-flex row">
                        <div class="input-group input-group-sm">
                            <select
                                value={labelName}
                                className="form-control"
                                id="labelName"
                                onChange={(e) => setLabelName(e.target.value)}
                            >
                                <option value={labelName}>{labelName ? labelName : 'Select a label'}</option>
                                {labelNameList && labelNameList.map((item) => (
                                    <option value={item.title}>{item.title}</option>
                                ))}

                            </select>
                            <span class="input-group-btn">
                                <button class="btn btn-info btn-flat" type="button" onClick={() => { setLabelNameStatus((!labelNameStatus)) }} >+</button>
                            </span>
                        </div>
                    </div>
                    {labelNameStatus &&
                        <div class="box">
                            <div class="box-body">
                                <div className="form-group">
                                    <label htmlFor="primaryArtist">Label Name</label>
                                    <div class="input-group input-group-sm">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={newLabelName}
                                            onChange={(e) => setNewLabelName(e.target.value)}
                                            placeholder="Enter New Label"
                                        />
                                    </div>
                                </div>
                                <button class="btn btn-success btn-flat " type="button" onClick={addNewLabel}>Add Label</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="format">Format *</label>
                    <select
                        value={format}
                        className="form-control"
                        id="format"
                        onChange={(e) => setFormat(e.target.value)}
                    >
                                <option value={format}>{format ? format : 'Select a format'}</option>
 
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
                        <img className="img-thumbnail" src={images.user} alt="Cover Preview" />
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
                    onClick={() => [handleSubmit()]}
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

