import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { getData, postData, postDataContent } from '../../Services/Ops';
import { base } from '../../Constants/Data.constant';
import { AllDraft } from '../../Components/AllDraft/AllDraft';
import { useUserProfile } from '../../Context/UserProfileContext';
import * as XLSX from 'xlsx';


const OneReleaseController = (props) => {

  const navigate = useNavigate();
  const { userProfile } = useUserProfile()
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Audio");
  const [myRelease, setMyRelease] = useState([]);
  const [myReleaseDraft, setMyReleaseDraft] = useState([]);

  const [myTracks, setMyTracks] = useState([]);



  useEffect(() => {
    fetchReleaseList()
    fetchTracksList()
  }, [props, userProfile])

  const fetchReleaseList = async () => {
    let arrRelease = [];
    let arrDraft = [];
    if (userProfile?.role == "admin") {
      setIsLoading(true)
      let result = await getData(base.allReleaseList);
      if (result.status === true) {
        arrRelease = Array.isArray(result.data)
          ? result.data
          .filter((item) => item.status == 'submit' ||  item.status == 'approve' ||  item.status == 'reject') 
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
      }
    } else if (userProfile?.role == "company") {
      setIsLoading(true)
      let result = await getData(base.releaseList);
      if (result.status === true) {
        arrRelease = Array.isArray(result.data)
          ? result.data
            .filter((item) => item.status != 'Pending' ||  item.status == 'reject') // Filter items with status 'pending'
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
        arrDraft = Array.isArray(result.data)
          ? result.data
            .filter((item) => item.status == 'Pending') // Filter items with status 'pending'
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
      }
      else if (userProfile?.role == "employee") {
        setIsLoading(true)
        let result = await getData(base.releaseList);
        if (result.status === true) {
          arrRelease = Array.isArray(result.data)
            ? result.data
              .filter((item) => item.status != 'pending') // Filter items with status 'pending'
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
          arrDraft = Array.isArray(result.data)
            ? result.data
              .filter((item) => item.status == 'Pending') // Filter items with status 'pending'
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
      }
    }
    }

    setMyReleaseDraft(arrDraft)
    setMyRelease(arrRelease);
    setIsLoading(false)

  }

  function exportTableToExcel(tableId, fileName = 'TableData.xlsx') {
    // Get the table element by ID
    const table = document.getElementById(tableId);
    if (!table) {
      console.error(`Table with ID ${tableId} not found.`);
      return;
    }

    // Convert table to a worksheet
    const worksheet = XLSX.utils.table_to_sheet(table);

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, fileName);
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
    myTracks, setMyTracks, myReleaseDraft,
    exportTableToExcel
  }

}
export default OneReleaseController;