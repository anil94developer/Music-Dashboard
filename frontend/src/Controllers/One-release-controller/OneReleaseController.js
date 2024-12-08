import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { getData, postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';

const OneReleaseController = (props) => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Audio");
  const [myRelease, setMyRelease] = useState([]);
  const [myReleaseDraft, setMyReleaseDraft] = useState([]);

  const [myTracks, setMyTracks] = useState([]);



  useEffect(() => {
    fetchReleaseList()
    fetchTracksList()
  }, [])
  const fetchReleaseList = async () => {
    setIsLoading(true)
    let result = await getData(base.releaseList);
    console.log(base.releaseList + "===========>", result)
    if (result.status === true) {
      const arrDraft = Array.isArray(result.data)
        ? result.data
          .filter((item) => item.status === 'Pending') // Filter items with status 'pending'
          .map((item, index) => ({
            _id: item._id,
            id: index + 1,
            type: item.type,
            status: item.status,
            title: item?.title || "Untitled",
            label: item?.step1?.labelName || "Unknown Label",
            releaseDate: item.step1?.originalReleaseDate || "N/A",
            noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
            upcCatalogNumber: item.step1?.UPCEAN || "N/A",
            deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
            action: "",
          }))
        : [];

        const arrRelease = Array.isArray(result.data)
        ? result.data
          .filter((item) => item.status != 'Pending') // Filter items with status 'pending'
          .map((item, index) => ({
            _id: item._id,
            id: index + 1,
            type: item.type,
            status: item.status,
            title: item?.title || "Untitled",
            label: item?.step1?.labelName || "Unknown Label",
            releaseDate: item.step1?.originalReleaseDate || "N/A",
            noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
            upcCatalogNumber: item.step1?.UPCEAN || "N/A",
            deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
            action: "",
          }))
        : [];

 
      setMyReleaseDraft(arrDraft)

      setMyRelease(arrRelease);


      setIsLoading(false)
    } else {
      setIsLoading(false)

      // Swal.fire("Error", result.message, result.message);
    }
  }
  const fetchTracksList = async () => {
    setIsLoading(true)
    let result = await getData(base.tracksList);
    console.log(base.tracksList + "===========>", result)
    if (result.status === true) {
      setMyTracks(result.data)
      setIsLoading(false)
    } else {
      setIsLoading(false)

      // Swal.fire("Error", result.message, result.message);
    }
  }

  const handleSubmit = async (e) => {
    let body = {
      title: title,
      type: type,
    };

    let result = await postData(base.addOneRelease, body);
    console.log(result);
    if (result.data.status === true) {
      navigate("/main-step", { state: { releaseId: result.data.data._id } });
    } else {
      Swal.fire("Error", result.message, result.message);
    }
  }

  const moreAction = (e) => {
    navigate("/main-step", { state: { releaseId: e._id } });
  }
  return {
    isLoading,
    setIsLoading,
    title,
    setTitle,
    type,
    setType,
    myRelease,
    handleSubmit,
    moreAction,
    myTracks, setMyTracks,myReleaseDraft
  }

}
export default OneReleaseController;