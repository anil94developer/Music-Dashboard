

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { postData, postDataContent } from '../../Services/Ops';
const Step1Controller = (props) => {
    
    const [releaseData,setReleaseData]= useState({})
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
             "_id": releaseData._id,
            "step1": {  
                subTitle: versionSubtitle,
                primaryArtist: primaryArtist,
                featuring: featuring,
                isVariousArtists: isVariousArtists,
                genre: genre,
                subgenre: subgenre,
                labelName: labelName,
                format: format,
                originalReleaseDate: releaseDate,
                line: pLine,
                cLine: cLine,
                productionYear: productionYear,
                UPCEAN: upcEan,
                producerCatalogueNumber: producerCatalogueNumber
            }
           
        }
        console.log("body===========>",body)
         
        let result =await postData(base.releaseStep1,body);
        console.log(result)
        if (result.data.status === true) {  
            Swal.fire("Success", result.message, result.message); 
          } else {
            Swal.fire("Error", result.message, result.message); 
          }  
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
        handleSubmit,
        setReleaseData
    }

}
export default Step1Controller;
