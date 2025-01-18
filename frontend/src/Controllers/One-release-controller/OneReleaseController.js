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

  const getClientNo = async (userId) => {
    try {
      const body = { userId };
      const result = await postData(base.getUser, body);
      console.log("get user", result);
      return result?.data?.data?.clientNumber || null;
    } catch (error) {
      console.error("Error fetching client number:", error);
      return null;
    }
  };


  const fetchReleaseList = async () => {
    let arrRelease = [];
    let arrDraft = [];

    if (userProfile?.role == "Admin") {
      setIsLoading(true)
      let result = await getData(base.allReleaseList);
      if (result.status === true) {
        if (Array.isArray(result.data)) {
          const arrRelease = result.data.filter(item =>
            ['Submit', 'Approve', 'Reject'].includes(item.status),

          );

          // Fetch client numbers for each release
          const releasesWithClientNumbers = await Promise.all(
            arrRelease.map(async (item) => {
              const clientNumber = await getClientNo(item.userId);
               
              return { ...item, clientNumber };
            })
          );



          setMyRelease(releasesWithClientNumbers);
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
      console.log("arrDraft----------", arrDraft)

      if (allReject.status == true) {
        arrDraft = [allReject.data, ...arrDraft];
      }
      // Fetch client numbers for each release
      const releasesWithClientNumbers = await Promise.all(
        arrRelease.map(async (item) => {
          const clientNumber = await getClientNo(item.userId);
          return { ...item, clientNumber};
        })
      );




      console.log("releasesWithClientNumbers",releasesWithClientNumbers);


      
      setMyRelease(releasesWithClientNumbers);


      setMyReleaseDraft(arrDraft)
      // setMyRelease(arrRelease)

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

  const deleteAction = async (e) => {
    let body={
      id:e._id
    }
    console.log(body)
    let result = await postData(base.deleteOneRelease, body);
    if (result.data.status === true) {
      Swal.fire("Succees", result.message , result.message) 

      let updateArr= myReleaseDraft.filter(item=> item._id !== e.id)
      setMyReleaseDraft(updateArr)

    } else {
      Swal.fire("Error", result.message, result.message);
    }
    
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
    deleteAction,
    myTracks, setMyTracks, myReleaseDraft,
    exportTableToExcel
  }

}
export default OneReleaseController;