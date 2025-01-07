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
    if (userProfile?.role == "Admin") {
      setIsLoading(true)
      let result = await getData(base.allReleaseList);
      if (result.status === true) {
        if (Array.isArray(result.data)) {
          const arrRelease = result.data.filter(item =>
            ['Submit', 'Approve', 'Reject'].includes(item.status)
          );
          setMyRelease(arrRelease);
        }

      }
    } else if (userProfile?.role == "company") {
      setIsLoading(true)
      let resultSubmit = await getData(base.releaseList + `?status=Submit`);
      if (resultSubmit.status == true) {
        arrRelease = resultSubmit.data
      }

      let result = await getData(base.releaseList + `?status=Approve`);
      if (result.status == true) {
        console.log("result--------", result)
        if (result.data.length > 0) {
          arrRelease = [result.data, ...arrRelease];
        }
      }
      let allDraft = await getData(base.releaseList + `?status=Pending`);
      if (allDraft.status == true) {
        arrDraft = allDraft.data;
      }
      let allReject = await getData(base.releaseList + `?status=Reject`);
      if (allReject.status == true) {
        if(allReject.data.length>0){ 
        arrDraft = [allReject.data, ...arrDraft];
        }
      }
      console.log("arrDraft----------", arrDraft)
      setMyReleaseDraft(arrDraft)
      setMyRelease(arrRelease)

      // arrRelease = Array.isArray(result.data)
      //   ? result.data
      //     .filter((item) => item.status != 'Pending') // Filter items with status 'Pending'
      //     .map((item, index) => ({
      //       _id: item._id,
      //       id: index + 1,
      //       type: item.type,
      //       status: item.status,
      //       title: item?.title || "Untitled",
      //       label: item?.step1?.labelName || "Unknown Label",
      //       releaseDate: item.step1?.originalReleaseDate || "N/A",
      //       noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
      //       upcCatalogNumber: item.step1?.UPCEAN || "N/A",
      //       deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
      //       action: "",
      //     }))
      //   : [];

      // arrDraft = Array.isArray(result.data)
      //   ? result.data
      //     .filter((item) => item.status == 'Pending') // Filter items with status 'Pending'
      //     .map((item, index) => ({
      //       _id: item._id,
      //       id: index + 1,
      //       type: item.type,
      //       status: item.status,
      //       title: item?.title || "Untitled",
      //       label: item?.step1?.labelName || "Unknown Label",
      //       releaseDate: item.step1?.originalReleaseDate || "N/A",
      //       noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
      //       upcCatalogNumber: item.step1?.UPCEAN || "N/A",
      //       deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
      //       action: "",
      //     }))
      //   : [];

      // else if (userProfile?.role == "employee") {
      //   setIsLoading(true)
      //   let result = await getData(base.releaseList);
      //   if (result.status === true) {
      //     arrRelease = Array.isArray(result.data)
      //       ? result.data
      //         .filter((item) => item.status != 'Pending') // Filter items with status 'Pending'
      //         .map((item, index) => ({
      //           _id: item._id,
      //           id: index + 1,
      //           type: item.type,
      //           status: item.status,
      //           title: item?.title || "Untitled",
      //           label: item?.step1?.labelName || "Unknown Label",
      //           releaseDate: item.step1?.originalReleaseDate || "N/A",
      //           noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
      //           upcCatalogNumber: item.step1?.UPCEAN || "N/A",
      //           deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
      //           action: "",
      //         }))
      //       : [];
      //     arrDraft = Array.isArray(result.data)
      //       ? result.data
      //         .filter((item) => item.status == 'Pending') // Filter items with status 'Pending'
      //         .map((item, index) => ({
      //           _id: item._id,
      //           id: index + 1,
      //           type: item.type,
      //           status: item.status,
      //           title: item?.title || "Untitled",
      //           label: item?.step1?.labelName || "Unknown Label",
      //           releaseDate: item.step1?.originalReleaseDate || "N/A",
      //           noOfTrack: Array.isArray(item?.step3) ? item.step3.length : 0,
      //           upcCatalogNumber: item.step1?.UPCEAN || "N/A",
      //           deliveredTerritories: item?.step5?.MainReleaseDate || "N/A",
      //           action: "",
      //         }))
      //       : [];
      //   }
      // }

    }
    // setMyReleaseDraft(arrDraft)

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