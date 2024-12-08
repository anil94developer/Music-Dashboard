
import React, { useState, useEffect } from 'react'
import Step3Controller from '../../Controllers/One-release-controller/Step3Controller'
import ARTISTLIST from '../../Enums/artist.list.json';
import DynamicInputList from '../Common/DynamicInputList';
import SearchInput from '../Common/SearchBox';
import GENRES from '../../Enums/genres.json';

export default function STEP3(props) {
  const { releaseData, fetchReleaseDetails } = props
  const {
    contentType,
    setContentType,
    primaryTrackType,
    setPrimaryTrackType,
    secondaryTrackType,
    setSecondaryTrackType,
    instrumental,
    setInstrumental,
    title,
    setTitle,
    versionSubtitle,
    setVersionSubtitle,
    primaryArtist,
    setPrimaryArtist,
    featuring,
    setFeaturing,
    remixer,
    setRemixer,
    author,
    setAuthor,
    composer,
    setComposer,
    arranger,
    setArranger,
    producer,
    setProducer,
    pLine,
    setPLine,
    productionYear,
    setProductionYear,
    publisher,
    setPublisher,
    isrc,
    setIsrc,
    generateISRC,
    setGenerateISRC,
    genre,
    setGenre,
    subgenre,
    setSubgenre,
    secondaryGenre,
    setSecondaryGenre,
    subSecondaryGenre,
    setSubSecondaryGenre,
    price,
    setPrice,
    producerCatalogueNumber,
    setProducerCatalogueNumber,
    parentalAdvisory,
    setParentalAdvisory,
    previewStart,
    setPreviewStart,
    trackTitleLanguage,
    setTrackTitleLanguage,
    lyricsLanguage,
    setLyricsLanguage,
    lyrics,
    setLyrics,
    step3, setStep3,
    handleSubmit,
    setReleaseData,
    btnName, setBtnName, setRowId,
    volume, setVolume,

  } = Step3Controller()

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setBtnName("Add");
    setIsModalOpen(true)
  };

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const getData = async () => {
      setStep3(releaseData.step3);
      setReleaseData(releaseData)
      // alert(releaseData.step1.format)
      if (releaseData?.step1?.format == "SINGLE") {
        setTitle(releaseData.title || "");
        setVersionSubtitle(releaseData.step1.subTitle || "");
        setContentType(releaseData.type);
        setPrimaryArtist(releaseData.step1.primaryArtist)
        setFeaturing(releaseData.step1.featuring);
        setPLine(releaseData.step1.line);

      }
    }
    getData()
  }, [releaseData.step3])

  useEffect(() => {
    fetchReleaseDetails(releaseData._id)
  }, [isModalOpen])

  const editTracks = (item) => {
    setBtnName("Edit")
    setRowId(item._id)
    setIsModalOpen(true)
    console.log(item)
    setContentType(item.ContentType || "audio");
    setPrimaryTrackType(item.PrimaryTrackType || "music");
    setSecondaryTrackType(item.SecondaryTrackType || "original");
    setInstrumental(item.Instrumental || false);
    setTitle(item.Title || "");
    setVersionSubtitle(item.VersionSubtitle || "");
    setPrimaryArtist(item.PrimaryArtist || "");
    setFeaturing(item.Featuring || "");
    setRemixer(item.Remixer || [{ value: '' }]);
    setAuthor(item.Author || [{ value: '' }]);
    setComposer(item.Composer || [{ value: '' }]);
    setArranger(item.Arranger || [{ value: '' }]);
    setProducer(item.Producer || [{ value: '' }]);
    setPLine(item.Pline || "");
    setProductionYear(item.ProductionYear || "");
    setPublisher(item.Publisher || "");
    setIsrc(item.ISRC || "");
    setGenerateISRC(item.GenerateISRC || false);
    setGenre(item.Genre || "");
    setSubgenre(item.Subgenre || "");
    setSecondaryGenre(item.SecondaryGenre || "");
    setSubSecondaryGenre(item.SubSecondaryGenre || "");
    setPrice(item.Price || "");
    setProducerCatalogueNumber(item.ProducerCatalogueNumber || "");
    setParentalAdvisory(item.ParentalAdvisory || "");
    setPreviewStart(item.PreviewStart || "");
    setTrackTitleLanguage(item.TrackTitleLanguage || "");
    setLyricsLanguage(item.LyricsLanguage || "");
    setLyrics(item.Lyrics || "");
    setVolume(item.Volume || "");
  }



  // Function to generate ISRC code
  const generateISRCCode = () => {
    const countryCode = "IN";         // Country code
    const registrantCode = "R2";      // Registrant code
    const yearCode = "24";            // Year code (for 2024)
    const designationCode = Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
    return `${countryCode}${registrantCode}${yearCode}${designationCode}`;
  };

  // useEffect to set ISRC when generateISRC is true
  useEffect(() => {
    if (generateISRC) {
      setIsrc(generateISRCCode());
    }
  }, [generateISRC]);


  const selectedGenre = GENRES.find((g) => g.name === genre);
  const subgenres = selectedGenre ? selectedGenre.subgenres : [];


  return (
    <div>
      <div className='row'>
        <div className="box-header">
          <h1>Tracks</h1>
          <div className="mt-3">
            <button onClick={openModal} className="btn btn-primary ">+ Add Track</button>
          </div>
        </div>

      </div>
      <br></br>
      <div className="box box-primary">
        <div className="box">
          <div className="box-body">
            <div className="dataTables_wrapper form-inline" role="grid">

              <table className="table" aria-describedby="example2_info">
                <thead>
                  <tr draggable="true">
                    <th rowspan="1" colspan="1">Volume</th>
                    <th rowspan="1" colspan="1">Content Type</th>
                    <th rowspan="1" colspan="1">PrimaryTrackType</th>
                    <th rowspan="1" colspan="1">SecondaryTrackType</th>
                    <th rowspan="1" colspan="1">Title</th>
                    <th rowspan="1" colspan="1">ACTION</th>
                  </tr>                </thead>

                <tbody role="alert" aria-live="polite" aria-relevant="all">
                  {step3 && step3.map((item) => (
                    <tr draggable="true" className="odd">
                      <td className="  sorting_1">{item.Volume}</td>
                      <td className="">{item.ContentType}</td>
                      <td className=" ">{item.PrimaryTrackType}</td>
                      <td className=" ">{item.SecondaryTrackType}</td>
                      <td className=" ">{item.Title}</td>
                      <td className=" ">
                        <a className="btn btn-app" onClick={() => { editTracks(item) }}>
                          <i className="fa fa-edit"></i> Edit
                        </a></td>
                    </tr>
                  ))}
                </tbody></table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen &&
        <div className="modal" style={{ display: 'block' }} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="btn btn-danger" className="close" onClick={closeModal} aria-label="Close">
                  <span  >×</span>
                </button>
                <h4 className="modal-title">Add Track</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">

                    <div className="col-md-6">
                      <label>Content Type *{contentType}</label><br />
                      <input type="radio" value="Audio" checked={contentType == "Audio"} onChange={() => setContentType("Audio")} /> Audio
                      <input type="radio" value="Video" checked={contentType == "Video"} onChange={() => setContentType("Video")} style={{ marginLeft: "10px" }} /> Video
                    </div>

                    {/* Primary Track Type */}
                    <div className="col-md-6">
                      <label>Primary Track Type *</label><br />
                      <input type="radio" value="music" checked={primaryTrackType === "music"} onChange={() => setPrimaryTrackType("music")} /> Music
                    </div>

                    {/* Secondary Track Type */}
                    <div className="col-md-6">
                      <label>Secondary Track Type *</label><br />
                      <input type="radio" value="original" checked={secondaryTrackType === "original"} onChange={() => setSecondaryTrackType("original")} /> Original
                      <input type="radio" value="karaoke" checked={secondaryTrackType === "karaoke"} onChange={() => setSecondaryTrackType("karaoke")} style={{ marginLeft: "10px" }} /> Karaoke
                      <input type="radio" value="medley" checked={secondaryTrackType === "medley"} onChange={() => setSecondaryTrackType("medley")} style={{ marginLeft: "10px" }} /> Medley
                      <input type="radio" value="cover" checked={secondaryTrackType === "cover"} onChange={() => setSecondaryTrackType("cover")} style={{ marginLeft: "10px" }} /> Cover
                    </div>

                    {/* Instrumental */}
                    <div className="col-md-6">
                      <label>Instrumental *</label><br />
                      <input type="radio" value={true} checked={instrumental === true} onChange={() => setInstrumental(true)} /> Yes
                      <input type="radio" value={false} checked={instrumental === false} onChange={() => setInstrumental(false)} style={{ marginLeft: "10px" }} /> No
                    </div>

                    {/* Volume Year */}
                    <div className="col-md-6">
                      <label>Volume Year</label>
                      <select className="form-control" value={volume} onChange={(e) => setVolume(e.target.value)}>
                        <option value="">- Select a Volume -</option>
                        {[...Array(20)].map((_, i) => (
                          <option key={i} value={`Volume` + (i + 1)}>{`Volume` + (i + 1)}</option>
                        ))}
                      </select>
                    </div>
                    {/* Title */}
                    <div className="col-md-6">
                      <label>Title *</label>
                      <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    {/* Version/Subtitle */}
                    <div className="col-md-6">
                      <label>Version/Subtitle</label>
                      <input type="text" className="form-control" value={versionSubtitle} onChange={(e) => setVersionSubtitle(e.target.value)} />
                    </div>

                    {/* Primary Artist */}
                    <div className="col-md-6">
                      <label>Primary Artist *</label>
                      <SearchInput artistData={primaryArtist} setSelectData={setPrimaryArtist} />
                    </div>

                    {/* Featuring */}
                    <div className="col-md-6">
                      <label>Featuring</label>
                      <SearchInput artistData={featuring} setSelectData={setFeaturing} />

                    </div>

                    {/* Remixer */}
                    <div className="col-md-6">
                      <label>Remixer</label>
                      <DynamicInputList inputs={remixer} setInputs={setRemixer} />
                      {/* <SearchInput />  */}
                    </div>

                    {/* Author */}
                    <div className="col-md-6">
                      <label>Author *</label>
                      <DynamicInputList inputs={author} setInputs={setAuthor} />

                    </div>

                    {/* Composer */}
                    <div className="col-md-6">
                      <label>Composer *</label>
                      <DynamicInputList inputs={composer} setInputs={setComposer} />

                    </div>

                    {/* Arranger */}
                    <div className="col-md-6">
                      <label>Arranger</label>
                      <DynamicInputList inputs={arranger} setInputs={setArranger} />
                    </div>

                    {/* Producer */}
                    <div className="col-md-6">
                      <label>Producer</label>
                      <DynamicInputList inputs={producer} setInputs={setProducer} />

                    </div>

                    {/* P Line */}
                    <div className="col-md-6">
                      <label>P Line</label>
                      <input type="text" className="form-control" value={pLine} onChange={(e) => setPLine(e.target.value)} />
                    </div>

                    {/* Production Year */}
                    <div className="col-md-6">
                      <label>Production Year</label>
                      <select className="form-control" value={productionYear} onChange={(e) => setProductionYear(e.target.value)}>
                        <option value="">- Select a year -</option>
                        {[...Array(100)].map((_, i) => (
                          <option key={i} value={2023 - i}>{2023 - i}</option>
                        ))}
                      </select>
                    </div>

                    {/* Publisher */}
                    <div className="col-md-6">
                      <label>Publisher</label>
                      <input type="text" className="form-control" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                    </div>

                    {/* ISRC */}
                    <div className="col-md-6">
                      <label>ISRC</label>
                      <input disabled={generateISRC} type="text" className="form-control" value={isrc} onChange={(e) => setIsrc(e.target.value)} />
                    </div>

                    {/* Generate ISRC */}
                    <div className="col-md-6">
                      <label>Generate ISRC</label><br />
                      <input type="radio" value={true} checked={generateISRC === true} onChange={() => setGenerateISRC(true)} /> Yes
                      <input type="radio" value={false} checked={generateISRC === false} onChange={() => setGenerateISRC(false)} style={{ marginLeft: "10px" }} /> No
                    </div>

                    <div className="col-md-6">
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

                    <div className="col-md-6">
                      <label htmlFor="subgenre">SubGenre * </label>
                      <select
                        value={subgenre}
                        className="form-control"
                        id="subgenre"
                        onChange={(e) => setSubgenre(e.target.value)}
                        disabled={!subgenres.length} // Disable if no subgenres available
                      >
                        <option value={subgenre}>{subgenre ? subgenre : 'Select a Subgenre'}</option>
                        {subgenres.map((sub) => (
                          <option key={sub.id} value={sub.name}>{sub.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="genre">Secondary Genre *</label>
                      <select
                        value={secondaryGenre}
                        className="form-control"
                        id="genre"
                        onChange={(e) => setSecondaryGenre(e.target.value)}
                      >
                        <option value={secondaryGenre}>{secondaryGenre ? secondaryGenre : 'Select a Secondary genre'}</option>
                        {GENRES.map((item) =>
                          (<option value={item.name}>{item.name}</option>)
                        )}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="subgenre">Secondary SubGenre * </label>
                      <select
                        value={subSecondaryGenre}
                        className="form-control"
                        id="subgenre"
                        onChange={(e) => setSubSecondaryGenre(e.target.value)}
                        disabled={!subgenres.length} // Disable if no subgenres available
                      >
                        <option value={subSecondaryGenre}>{subSecondaryGenre ? subSecondaryGenre : 'Select a Secondary Subgenre'}</option>
                        {subgenres.map((sub) => (
                          <option key={sub.id} value={sub.name}>{sub.name}</option>
                        ))}
                      </select>
                    </div>



                    {/* Price */}
                    <div className="col-md-6">
                      <label>Price *</label>
                      {/* <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} /> */}
                      <select
                        value={price}
                        className="form-control"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                      >
                        <option value="">Please select...</option>
                        <option selected="selected" value="156">Back : 15₹ / 0.99$ / 0Sg$</option>
                        <option value="155">Mid : 20₹ / 1.49$ / 0Sg$</option>
                        <option value="154">Front : 30₹ / 1.99$ / 0Sg$</option>
                      </select>


                    </div>

                    {/* Parental Advisory */}
                    <div className="col-md-6">
                      <label>Parental Advisory *</label><br />
                      <input type="radio" value="yes" checked={parentalAdvisory === "yes"} onChange={() => setParentalAdvisory("yes")} /> Yes
                      <input type="radio" value="no" checked={parentalAdvisory === "no"} onChange={() => setParentalAdvisory("no")} style={{ marginLeft: "10px" }} /> No
                      <input type="radio" value="no" checked={parentalAdvisory === "Cleaned"} onChange={() => setParentalAdvisory("Cleaned")} style={{ marginLeft: "10px" }} /> Cleaned

                    </div>



                    <div className="col-md-6">
                      <label>Preview start</label>
                      <input type="text" className="form-control" value={previewStart} onChange={(e) => setPreviewStart(e.target.value)} />
                    </div>


                    <div className="col-md-6">
                      <label>Track title language</label>
                      <input type="text" className="form-control" value={trackTitleLanguage} onChange={(e) => setTrackTitleLanguage(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label>Lyrics language</label>
                      <input type="text" className="form-control" value={lyricsLanguage} onChange={(e) => setLyricsLanguage(e.target.value)} />
                    </div>

                    {/* Lyrics */}
                    <div className="col-md-6">
                      <label>Lyrics</label>
                      <textarea className="form-control" rows="4" value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
                    </div>

                  </div>

                </div>


              
              <div className="form-group">
                {/* Submit Button */}
                {/* <div className="col-ml-12"> */}

                <button type="submit" className="btn btn-primary"
                  onClick={async () => {
                    await handleSubmit();  // Ensure handleSubmit completes first
                    closeModal();
                    // Then close the modal
                  }}
                >{btnName}</button>
                {/* </div> */}
              </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}
