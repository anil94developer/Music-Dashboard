
import React from 'react'
import Step1Controller from '../../Controllers/One-release-controller/Step1Controller'

export default function STEP1(props) {
    const { setStep } = props;
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
        producerCatalogueNumber, setProducerCatalogueNumber, handleSubmit } = Step1Controller();
    return (<div>

        {/* <div className="container"> */}
        <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="releaseTitle">Release title *</label>
                    <input
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
                        type="text"
                        className="form-control"
                        id="featuring"
                        placeholder="Enter featuring artists"
                        onChange={(e) => setFeaturing(e.target.value)}
                    />
                </div>

                <div className="form-check">
                    <input
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
                        className="form-control"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">Select a genre</option>
                        <option value="429">African</option><option value="1">Alternative</option><option value="431">Arabic</option><option value="430">Asian</option><option value="2">Blues</option><option value="433">Brazilian</option><option value="3">Children Music</option><option value="9">Christian &amp; Gospel</option><option value="4">Classical</option><option value="5">Country</option><option value="6">Dance</option><option value="7">Easy Listening</option><option value="354">Electronic</option><option value="356">Folk</option><option value="8">Hip Hop/Rap</option><option value="432">Indian</option><option value="10">Jazz</option><option value="11">Latin</option><option value="355">Metal</option><option value="13">Pop</option><option value="14">R&amp;B/Soul</option><option value="15">Reggae</option><option value="28">Relaxation</option><option value="16">Rock</option><option value="12">Various</option><option value="17">World Music / Regional Folklore</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="subgenre">Subgenre *</label>
                    <select
                        className="form-control"
                        id="subgenre"
                        onChange={(e) => setSubgenre(e.target.value)}
                    >
                        <option value="">Select a sub-genre</option>
                        <option value="430">Asian</option>
                        <option value="778">Asian - Chinese</option>
                        <option value="780">Asian - Chinese / Tibetan Native</option>
                        <option value="779">Asian - Chinese Folk</option>
                        <option value="694">Asian - Filipino / Bikol</option><option value="695">Asian - Filipino / Cebuano</option><option value="702">Asian - Filipino / Chavacano</option><option value="697">Asian - Filipino / Ilocano</option><option value="698">Asian - Filipino / Kapampangan</option><option value="696">Asian - Filipino / llonggo</option><option value="699">Asian - Filipino / Pangasinan</option><option value="700">Asian - Filipino / Tagalog</option><option value="701">Asian - Filipino / Waray</option><option value="692">Asian - Hong Kongese</option><option value="688">Asian - Indonesian</option><option value="691">Asian - Indonesian / Christian Pop</option><option value="690">Asian - Indonesian / Keroncong</option><option value="689">Asian - Indonesian / Koplo</option><option value="783">Asian - Indonesian / Religious</option><option value="782">Asian - Japanese</option><option value="781">Asian - Korean</option><option value="667">Asian - Malaysian</option><option value="670">Asian - Malaysian / Chinese New Year</option><option value="668">Asian - Malaysian / Christmas</option><option value="672">Asian - Malaysian / Deepavali</option><option value="669">Asian - Malaysian / Hari Raya</option><option value="671">Asian - Malaysian / Traditional</option><option value="703">Asian - OPM / 70’s Pinoy Music</option><option value="704">Asian - OPM / 80’s Pinoy Music</option><option value="705">Asian - OPM / 90’s Pinoy Music</option><option value="706">Asian - OPM / Bisrock</option><option value="707">Asian - OPM / Cebuano</option><option value="708">Asian - OPM / Chavacano</option><option value="709">Asian - OPM / Folk Songs / Country Music</option><option value="710">Asian - OPM / Harana &amp; Kundiman</option><option value="711">Asian - OPM / Hiligaynon</option><option value="712">Asian - OPM / Ilocano</option><option value="716">Asian - OPM / Kapampangan</option><option value="713">Asian - OPM / Pinoy Acoustic</option><option value="714">Asian - OPM / Pinoy Ballad</option><option value="715">Asian - OPM / Pinoy Love Songs</option><option value="717">Asian - Pinoy Rock</option><option value="693">Asian - Taiwanese</option><option value="784">Asian - Taiwanese Folk</option><option value="661">Asian - Thaï</option><option value="666">Asian - Thaï / Folk Music</option><option value="663">Asian - Thaï / Luk-Krung</option><option value="662">Asian - Thaï / Luk-Thung</option><option value="664">Asian - Thaï / Mo-Lam</option><option value="665">Asian - Thaï / Song For Life</option><option value="673">Asian - Vietnamese</option><option value="686">Asian - Vietnamese / Bài tròi</option><option value="674">Asian - Vietnamese / Bolero</option><option value="681">Asian - Vietnamese / Ca Trù</option><option value="675">Asian - Vietnamese / Cải Lương</option><option value="678">Asian - Vietnamese / Chèo</option><option value="685">Asian - Vietnamese / Đình Huế</option><option value="676">Asian - Vietnamese / Đờn Ca Tài Tử</option><option value="683">Asian - Vietnamese / Hò Huế</option><option value="687">Asian - Vietnamese / Lý</option><option value="684">Asian - Vietnamese / Nhạc Cung</option><option value="677">Asian - Vietnamese / Quan Họ</option><option value="682">Asian - Vietnamese / Trầu Văn</option><option value="679">Asian - Vietnamese / Tuồng</option><option value="680">Asian - Vietnamese / Xẩm</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="labelName">Label name *</label>
                    <select
                        className="form-control"
                        id="labelName"
                        onChange={(e) => setLabelName(e.target.value)}
                    >
                        <option value="">Select a label</option>
                        <option value="label">label1</option>
                        {/* Add label name options here */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="format">Format *</label>
                    <select
                        className="form-control"
                        id="format"
                        onChange={(e) => setFormat(e.target.value)} >
                        <option value="">Select a format</option>
                        <option value="SINGLE">SINGLE</option>
                        <option value="EP">EP</option>
                        <option value="ALBUM">ALBUM</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate">Physical/Original release date</label>
                    <input
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
                    <label htmlFor="pLine">℗ line *</label>
                    <input
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
                        className="form-control"
                        id="productionYear"
                        onChange={(e) => setProductionYear(e.target.value)}
                    >
                        <option value="">Select a year</option>
                        {/* Add year options here */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="upcEan">UPC/EAN</label>
                    <input
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
                        type="text"
                        className="form-control"
                        id="producerCatalogueNumber"
                        placeholder="Enter catalogue number"
                        onChange={(e) => setProducerCatalogueNumber(e.target.value)}
                    />
                </div>
                <button onClick={() => [handleSubmit(), setStep('step2')]} className="btn btn-primary btn-block btn-flat" type="submit">
                    Save
                </button>
            </div>

        </div>
        {/* </div> */}
    </div>
    )
}

