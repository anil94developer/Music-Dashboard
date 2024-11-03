import React, { useContext, useState,useEffect } from 'react';
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

 
    useEffect(() => {
        fetchReleaseList()
      }, [])
      const fetchReleaseList = async () => { 
        setIsLoading(true)
        let result = await getData(base.releaseList);
        console.log(base.releaseList+"===========>",result)
        if (result.status === true) { 
            setMyRelease(result.data)
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
            navigate("/main-step",{ state: { releaseId: result.data.data._id } });
          } else {
            Swal.fire("Error", result.message, result.message); 
          } 
    }

    const moreAction=(e)=>{ 
        navigate("/main-step",{ state:  { releaseId: e._id } } );
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
        moreAction
    }

}
export default OneReleaseController;