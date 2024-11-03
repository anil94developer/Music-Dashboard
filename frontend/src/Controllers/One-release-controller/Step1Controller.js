import React, { useContext, useState,useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import useLocalStorage from 'use-local-storage';
import { base } from '../../Constants/Data.constant';
import { getData, postData, postDataContent } from '../../Services/Ops';
const Step1Controller = (props) => {

  const [releaseData, setReleaseData] = useState({})
  const [releaseTitle, setReleaseTitle] = useState('');
  const [versionSubtitle, setVersionSubtitle] = useState('');
  const [primaryArtist, setPrimaryArtist] = useState('');
  const [featuring, setFeaturing] = useState('');
  const [isVariousArtists, setIsVariousArtists] = useState(false);
  const [genre, setGenre] = useState('');
  const [subGenre, setSubGenre] = useState('');
  const [labelName, setLabelName] = useState('');
  const [format, setFormat] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [pLine, setPLine] = useState('');
  const [cLine, setCLine] = useState('');
  const [productionYear, setProductionYear] = useState('');
  const [upcEan, setUpcEan] = useState('');
  const [producerCatalogueNumber, setProducerCatalogueNumber] = useState('');
  const [newLabelName, setNewLabelName] = useState('');
  const [labelNameStatus, setLabelNameStatus] = useState('');
  const [labelNameList, setLabelNameList] = useState([]);


  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState("/img/noCover.png");

useEffect(()=>{
  fetchLabel()
},[props,labelName])

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Set the image preview to the selected image
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  };

  const handleSubmit = async (e) => {
    let body = {
      "title": releaseData.title,
      "type": releaseData.type,
      "_id": releaseData._id,
      "step1": {
        subTitle: versionSubtitle,
        primaryArtist: primaryArtist,
        featuring: featuring,
        isVariousArtists: isVariousArtists,
        genre: genre,
        subGenre: subGenre,
        labelName: labelName,
        format: format,
        originalReleaseDate: releaseDate,
        line: pLine,
        cline: cLine,
        productionYear: productionYear,
        UPCEAN: upcEan,
        producerCatalogueNumber: producerCatalogueNumber
      }

    }
    console.log("body===========>", body)

    let result = await postData(base.releaseStep1, body);
    console.log(result)
    if (result.data.status === true) {
      Swal.fire("Success", result.message, result.message);

    } else {
      Swal.fire("Error", result.message, result.message);
    }
  };

  const addNewLabel = async () => {
    let body = {
      "title": newLabelName
    }
    let result = await postData(base.addLabel, body);
    console.log(result)
    if (result.data.status === true) {
      Swal.fire("Success", result.message, result.message); 
      fetchLabel()
      setNewLabelName("")
    } else {
      Swal.fire("Error", result.message, result.message);
    }
   
  }
  const fetchLabel = async () => { 
    let result = await getData(base.labelList);
    setLabelNameList(result.data)
    console.log(base.labelList,"==============>",result)
  }

  return {
    releaseTitle, setReleaseTitle,
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
    producerCatalogueNumber, setProducerCatalogueNumber,
    newLabelName, setNewLabelName,
    labelNameStatus, setLabelNameStatus,
    handleSubmit,
    setReleaseData,
    addNewLabel,
    labelNameList,
    imagePreview, setImagePreview, handleImageChange,

  }

}
export default Step1Controller;
