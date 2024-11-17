import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { base } from '../../Constants/Data.constant';
import initialCountryList from '../../Enums/store.list.json';
import { postData } from '../../Services/Ops';

export default function STEP4(props) {
  const {releaseData}= props
  const [countryList, setCountryList] = useState(releaseData.step4.length > 0 ? releaseData.step4 : initialCountryList);

  const handleCheckboxChange = (item) => {
    setCountryList((prevList) =>
      prevList.map((country) =>
        country.id === item.id
          ? { ...country, status: country.status === 'active' ? 'inactive' : 'active' }
          : country
      )
    );
  };
  const handleSubmit = async () => {
    let body = {
      _id:releaseData._id,
      step4:countryList
    }
    console.log(body)
    let result = await postData(base.addStore, body);
    if (result.data.status === true) {
      Swal.fire("Success", result.message, result.message);
    } else {
      Swal.fire("Error", result.message, result.message);
    }

  }
  return (
    <div className="listColumns">
      <div className="listColumn">
        <div className="colHeader">
          <div className="checkUncheckAll-header">
            <a href="#" className="checkAll" rel="AS">Check all</a> /
            <a href="#" className="uncheckAll" rel="AS">Uncheck all</a>
          </div>
        </div>

        <div className="countryList">
          {countryList.map((item, index) => (
            <div key={index} className="colElement">
              <div className="countryItem">
                <input
                  type="checkbox"
                  checked={item.status === 'active'}
                  onChange={() => handleCheckboxChange(item)}
                />&nbsp;&nbsp;
                <img src={`https://www.believebackstage.com/img/flags/${item.code}.gif`} alt={item.name} />&nbsp;&nbsp;
                <label>{item.name}</label>
              </div>
            </div>
          ))}
          <div className="mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => { handleSubmit() }}>Save</button>
          </div>
        </div>

      </div>
    </div>
  );
}
