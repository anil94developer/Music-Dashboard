import React, { useState } from 'react';
import initialCountryList from '../../Enums/country.list.json';

export default function STEP4() {
  const [countryList, setCountryList] = useState(initialCountryList);

  const handleCheckboxChange = (item) => {
    setCountryList((prevList) =>
      prevList.map((country) =>
        country.id === item.id
          ? { ...country, status: country.status === 'active' ? 'inactive' : 'active' }
          : country
      )
    );
  };
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}
