



import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { postData, postDataContent } from '../../Services/Ops';
const Step3Controller = (props) => {


    const [releaseData, setReleaseData] = useState({})
    const [contentType, setContentType] = useState("Audio");
    const [primaryTrackType, setPrimaryTrackType] = useState("music");
    const [secondaryTrackType, setSecondaryTrackType] = useState("original");
    const [instrumental, setInstrumental] = useState(false);
    const [title, setTitle] = useState("");
    const [versionSubtitle, setVersionSubtitle] = useState("");
    const [primaryArtist, setPrimaryArtist] = useState("");
    const [featuring, setFeaturing] = useState("");
    const [remixer, setRemixer] = useState([{ id: '', name: '' }]);
    const [author, setAuthor] = useState([{ id: '', name: '', iprs: '' }]);
    const [composer, setComposer] = useState([{ id: '', name: '', iprs: '' }]);
    const [arranger, setArranger] = useState([{ id: '', name: '' }]);
    const [producer, setProducer] = useState([{ id: '', name: '' }]);
    const [pLine, setPLine] = useState("");
    const [productionYear, setProductionYear] = useState("");
    const [publisher, setPublisher] = useState([{ id: '', name: '', iprs: '' }]);
    const [isrc, setIsrc] = useState("");
    const [generateISRC, setGenerateISRC] = useState(false);
    const [genre, setGenre] = useState("");
    const [subgenre, setSubgenre] = useState("");
    const [secondaryGenre, setSecondaryGenre] = useState("");
    const [subSecondaryGenre, setSubSecondaryGenre] = useState("");
    const [price, setPrice] = useState("");
    const [producerCatalogueNumber, setProducerCatalogueNumber] = useState("");
    const [parentalAdvisory, setParentalAdvisory] = useState("");
    const [previewStart, setPreviewStart] = useState("");
    const [trackTitleLanguage, setTrackTitleLanguage] = useState("");
    const [lyricsLanguage, setLyricsLanguage] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [step3, setStep3] = useState([]);
    const [btnName, setBtnName] = useState("Add");
    const [rowId, setRowId] = useState("")
    const [volume, setVolume] = useState("")
    const [inprsNo, setIprsNo] = useState("")
    const [selectContributory, setSelectContributory] = useState([]);
    const [otherContributory,setOtherContributory]= useState([]);


    const handleSubmit = async (e) => {
        let body = {}
        if (btnName == "Add") {
            body = {
                "_id": releaseData._id,
                "step3": [
                    ...step3 || [],
                    {
                        "ContentType": contentType,
                        "PrimaryTrackType": primaryTrackType,
                        "SecondaryTrackType": secondaryTrackType,
                        "Instrumental": instrumental,
                        "Title": title,
                        "VersionSubtitle": versionSubtitle,
                        "PrimaryArtist": primaryArtist,
                        "Featuring": featuring,
                        "Remixer": remixer,
                        "Author": author,
                        "Composer": composer,
                        "Arranger": arranger,
                        "Producer": producer,
                        "Pline": pLine,
                        "ProductionYear": productionYear,
                        "Publisher": publisher,
                        "ISRC": isrc,
                        "GenerateISRC": generateISRC,
                        "Genre": genre,
                        "Subgenre": subgenre,
                        "SecondaryGenre": secondaryGenre,
                        "SubSecondaryGenre": subSecondaryGenre,
                        "Price": price,
                        "ProducerCatalogueNumber": producerCatalogueNumber,
                        "ParentalAdvisory": parentalAdvisory,
                        "PreviewStart": previewStart,
                        "TrackTitleLanguage": trackTitleLanguage,
                        "LyricsLanguage": lyricsLanguage,
                        "Lyrics": lyrics,
                        "MoreInfo": "",
                        "Volume": volume,
                        "selectContributory": selectContributory,
                        "otherContributory": otherContributory

                    }
                ]
            }
        } else {
            body = {
                "_id": releaseData._id,
                "step3": [
                    {
                        "ContentType": contentType,
                        "PrimaryTrackType": primaryTrackType,
                        "SecondaryTrackType": secondaryTrackType,
                        "Instrumental": instrumental,
                        "Title": title,
                        "VersionSubtitle": versionSubtitle,
                        "PrimaryArtist": primaryArtist,
                        "Featuring": featuring,
                        "Remixer": remixer,
                        "Author": author,
                        "Composer": composer,
                        "Arranger": arranger,
                        "Producer": producer,
                        "Pline": pLine,
                        "ProductionYear": productionYear,
                        "Publisher": publisher,
                        "ISRC": isrc,
                        "GenerateISRC": generateISRC,
                        "Genre": genre,
                        "Subgenre": subgenre,
                        "SecondaryGenre": secondaryGenre,
                        "SubSecondaryGenre": subSecondaryGenre,
                        "Price": price,
                        "ProducerCatalogueNumber": producerCatalogueNumber,
                        "ParentalAdvisory": parentalAdvisory,
                        "PreviewStart": previewStart,
                        "TrackTitleLanguage": trackTitleLanguage,
                        "LyricsLanguage": lyricsLanguage,
                        "Lyrics": lyrics,
                        "MoreInfo": "",
                        "Volume": volume,
                        "_id": rowId,
                        "selectContributory": selectContributory,
                        "otherContributory": otherContributory

                    }
                ]
            }
        }

        console.log("step3=======body====", body)
        let result = await postData(btnName == "Add" ? base.releaseStep3 : base.trackUpdate, body)

        if (result.data.status === true) {
            Swal.fire("Success", result.message, result.message);
        } else {
            Swal.fire("Error", result.message, result.message);
        }

    }

    return {
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
        setReleaseData,
        handleSubmit,
        btnName, setBtnName, setRowId,
        volume, setVolume,
        selectContributory, setSelectContributory,
        otherContributory,setOtherContributory
    };

}
export default Step3Controller;
