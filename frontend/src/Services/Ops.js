import AsyncStorage from "@react-native-async-storage/async-storage";
import  axios from "axios"; 
const postData = async (url = "", data) => {
    try {
        console.log("url", url)
         
        var header = { headers: {  Accept: 'application/json','Cache-Control': 'no-cache', } };
        let response = await axios.post(url, data, header)
        return response;
       
    } catch (e) { 
        console.log("---post---", JSON.stringify(e.response))
        return e.response.data
    }
};
const postDataContent = async (url = "", data) => {
    try {
        
        console.log("url", url)

        let response = await axios.post(url, data, {
            headers: {  "content-type": 'multipart/form-data;','Cache-Control': 'no-cache', },
        });
        return response.data;
    } catch (e) { 
        console.log("---post mut   e---", JSON.stringify(e))
        return e.response.data
    }
};
const putData = async (url = "", data,token) => {
    try { 
        if (token) {
            token = "Bearer " + token;
        }
        let response = await axios.put(url, data, {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (e) { 
        return e.response.data
    }
};
const getData = async (url = "", token = false) => {
    try {
        if (token) {
            token = "Bearer " + token;
        }
        var header = { headers: { Authorization: token,'Cache-Control': 'no-cache' } };
        let response = await axios.get(url, header);
        return response.data;
    } catch (e) { 
        return e.response.data
    }
};

const deleteData = async (url = "", token = false) => {
    try {
        if (token) {
            token = "Bearer " + token;
        }
        let response = await axios.delete(url, {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (e) {
        if(e.response.data.status == 403 || e.response.data.status == 401 ){
            AsyncStorage.clear()
            NativeModules.DevSettings.reload();
        }
        console.log("------", JSON.stringify(e.response.data))
        return e.response.data
    }
};
 
export { postData, getData, deleteData, putData, postDataContent };