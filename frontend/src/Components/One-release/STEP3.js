
import React, { useState } from 'react'
import Step3Controller from '../../Controllers/One-release-controller/Step3Controller'
import ARTISTLIST from '../../Enums/artist.list.json';
import DynamicInputList from '../Common/DynamicInputList';
import SearchInput from '../Common/SearchBox';

export default function STEP3(props) {
  const { releaseData } = props
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
    handleSubmit
  } = Step3Controller()

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);


  return (
    <div>
      <div className='row'>
        <div class="box-header">
          <h1>Tracks</h1>
        </div>
        <div className="mt-3">
          <button onClick={openModal} className="btn btn-primary ">+ Add Track</button>
        </div>
      </div>
      <br></br>
      <div class="box box-primary">
        <div class="box">
          <div class="box-body">
            <div id="example2_wrapper" class="dataTables_wrapper form-inline" role="grid"><div class="row"><div class="col-xs-6"></div><div class="col-xs-6"></div></div>
              <table id="example2" class="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                <thead>
                  <tr draggable="true">
                    <th rowspan="1" colspan="1">Content Type</th>
                    <th rowspan="1" colspan="1">PrimaryTrackType</th>
                    <th rowspan="1" colspan="1">SecondaryTrackType</th>
                    <th rowspan="1" colspan="1">Title</th>
                    <th rowspan="1" colspan="1">ACTION</th>
                  </tr>                </thead>

                <tfoot>
                  <tr draggable="true">
                    <th rowspan="1" colspan="1">Content Type</th>
                    <th rowspan="1" colspan="1">PrimaryTrackType</th>
                    <th rowspan="1" colspan="1">SecondaryTrackType</th>
                    <th rowspan="1" colspan="1">Title</th>
                    <th rowspan="1" colspan="1">ACTION</th>
                  </tr>
                </tfoot>
                <tbody role="alert" aria-live="polite" aria-relevant="all">
                  {releaseData.step3.map((item) => (
                    <tr draggable="true" class="odd">
                      <td class="  sorting_1">{item.ContentType}</td>
                      <td class=" ">{item.PrimaryTrackType}</td>
                      <td class=" ">{item.SecondaryTrackType}</td>
                      <td class=" ">{item.Title}</td>
                      <td class=" "> 
                      <a class="btn btn-app" onClick={()=>{setIsModalOpen(true)}}>
                        <i class="fa fa-edit"></i> Edit
                      </a></td>
                    </tr>
                  ))}
                </tbody></table><div class="row"><div class="col-xs-6"><div class="dataTables_info" id="example2_info">Showing 1 to 10 of 57 entries</div></div><div class="col-xs-6"><div class="dataTables_paginate paging_bootstrap"><ul class="pagination"><li class="prev disabled"><a href="#">← Previous</a></li><li class="active"><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li class="next"><a href="#">Next → </a></li></ul></div></div></div></div>
          </div>
        </div>
      </div>

      {isModalOpen &&
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">Add Track</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">

                    <div className="col-md-6">
                      <label>Content Type *</label><br />
                      <input type="radio" value="audio" checked={contentType === "audio"} onChange={() => setContentType("audio")} /> Audio
                      <input type="radio" value="video" checked={contentType === "video"} onChange={() => setContentType("video")} style={{ marginLeft: "10px" }} /> Video
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
                      <input type="text" className="form-control" value={isrc} onChange={(e) => setIsrc(e.target.value)} />
                    </div>

                    {/* Generate ISRC */}
                    <div className="col-md-6">
                      <label>Generate ISRC</label><br />
                      <input type="radio" value={true} checked={generateISRC === true} onChange={() => setGenerateISRC(true)} /> Yes
                      <input type="radio" value={false} checked={generateISRC === false} onChange={() => setGenerateISRC(false)} style={{ marginLeft: "10px" }} /> No
                    </div>

                    {/* Price */}
                    <div className="col-md-6">
                      <label>Price *</label>
                      <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    {/* Parental Advisory */}
                    <div className="col-md-6">
                      <label>Parental Advisory *</label><br />
                      <input type="radio" value="yes" checked={parentalAdvisory === "yes"} onChange={() => setParentalAdvisory("yes")} /> Yes
                      <input type="radio" value="no" checked={parentalAdvisory === "no"} onChange={() => setParentalAdvisory("no")} style={{ marginLeft: "10px" }} /> No
                    </div>

                    {/* Lyrics */}
                    <div className="col-md-6">
                      <label>Lyrics</label>
                      <textarea className="form-control" rows="4" value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
                    </div>

                    {/* Submit Button */}
                    <div className="col-md-6 mt-3">

                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

