



import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { postData, postDataContent } from '../../Services/Ops';
const Step3Controller = (props) => {
     
   
    const [releaseData,setReleaseData]= useState({})
    const [contentType, setContentType] = useState("audio");
    const [primaryTrackType, setPrimaryTrackType] = useState("music");
    const [secondaryTrackType, setSecondaryTrackType] = useState("original");
    const [instrumental, setInstrumental] = useState(false);
    const [title, setTitle] = useState("");
    const [versionSubtitle, setVersionSubtitle] = useState("");
    const [primaryArtist, setPrimaryArtist] = useState("");
    const [featuring, setFeaturing] = useState("");
    const [remixer, setRemixer] = useState("");
    const [author, setAuthor] = useState("");
    const [composer, setComposer] = useState("");
    const [arranger, setArranger] = useState("");
    const [producer, setProducer] = useState("");
    const [pLine, setPLine] = useState("");
    const [productionYear, setProductionYear] = useState("");
    const [publisher, setPublisher] = useState("");
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
    const handleSubmit =async (e) => { 
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
    };

}
export default Step3Controller;
