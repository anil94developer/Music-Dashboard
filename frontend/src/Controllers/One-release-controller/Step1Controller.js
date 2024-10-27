

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { postDataContent } from '../../Services/Ops';
const Step1Controller = (props) => {
    const [releaseTitle, setReleaseTitle] = useState('');
    const [versionSubtitle, setVersionSubtitle] = useState('');
    const [primaryArtist, setPrimaryArtist] = useState('');
    const [featuring, setFeaturing] = useState('');
    const [isVariousArtists, setIsVariousArtists] = useState(false);
    const [genre, setGenre] = useState('');
    const [subgenre, setSubgenre] = useState('');
    const [labelName, setLabelName] = useState('');
    const [format, setFormat] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [pLine, setPLine] = useState('');
    const [cLine, setCLine] = useState('');
    const [productionYear, setProductionYear] = useState('');
    const [upcEan, setUpcEan] = useState('');
    const [producerCatalogueNumber, setProducerCatalogueNumber] = useState('');
    const navigate = useNavigate();


    const handleSubmit =async (e) => { 
        let body= {
            "title": "step test",
            "type": "Audio",
             "_id": "671cba8496f4bab04f252628",
            "step1": {
                releaseTitle: releaseTitle,
                versionSubtitle: versionSubtitle,
                primaryArtist: primaryArtist,
                featuring: featuring,
                isVariousArtists: isVariousArtists,
                genre: genre,
                subgenre: subgenre,
                labelName: labelName,
                format: format,
                releaseDate: releaseDate,
                pLine: pLine,
                cLine: cLine,
                productionYear: productionYear,
                upcEan: upcEan,
                producerCatalogueNumber: producerCatalogueNumber
            }
           
        }
          await useLocalStorage<String>("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFlMDZmYTFhMjA3MWFmZTQyNjlmNzQiLCJlbWFpbCI6ImFuaWxkQGdtYWlsLmNvbSIsImlhdCI6MTczMDAyMTQzMX0.vIwB7F7Rdchg5XAEKJuyjdRQRauopMn19Y5mdrsl4xo")
        let result =await postDataContent(base.releaseStep1,body);
        console.log(result)
        navigate("/Dashboard")
      };

    return {
        releaseTitle, setReleaseTitle,
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
        producerCatalogueNumber, setProducerCatalogueNumber,
        handleSubmit
    }

}
export default Step1Controller;
