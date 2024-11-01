
import React, { useState } from 'react'
import Step5Controller from '../../Controllers/One-release-controller/Step5Controller';

export default function STEP5() {
  const { handleSubmit } = Step5Controller();
  const [releaseDate, setReleaseDate] = useState('');

  const [preOrderDate, setPreOrderDate] = useState([
    { platform: 'iTunes', date: '', id: 1 },
    { platform: 'Beatport', date: '', id: 2 },
    { platform: 'VKontakte', date: '', id: 3 },
  ]);
  const [selectPreOrderDate, setSelectPreOrderDate] = useState([]);

  const [exclusiveDates, setExclusiveDates] = useState([
    { platform: 'iTunes', date: '', id: 1 },
    { platform: 'Beatport', date: '', id: 2 },
    { platform: 'VKontakte', date: '', id: 3 },
  ]);
  const [allowPreview, setAllowPreview] = useState(false);

  const handleExclusiveDateChange = (id, newDate) => {
    setExclusiveDates(exclusiveDates.map(item =>
      item.id === id ? { ...item, date: newDate } : item
    ));
  };

  const removeExclusiveDate = (id) => {
    setExclusiveDates(exclusiveDates.filter(item => item.id !== id));
  };

  const preOrderSelect = (e) => {
    console.log(JSON.stringify(e))
    const mySelec = [...selectPreOrderDate];
    mySelec.push(e);
    setSelectPreOrderDate(mySelec);
  }

  const removePreOrder = (id) => {
    setSelectPreOrderDate(selectPreOrderDate.filter(item => item.id !== id));
  };
  return (
    <div>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="form-row  form-group">
            <label>Choose a main release date <span>*</span></label>
            <input
              className="form-control"
              type="date"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
          </div>
          <div className="form-row  form-group">
            <label>Add a pre-order date</label>
            <select className="form-control" onChange={(e) => { preOrderSelect(e.target.value) }}>
              <option value="itunes">Select Music</option>
              {preOrderDate.map((item) => (
                <option value={item}>{item.platform}</option>
              ))}
            </select>
          </div>
          {selectPreOrderDate.map((item) => (
            <div key={item.id} className="form-row form-control">
              <label>{item.platform}</label>
              <input
                className="form-control col-md-2 "
                type="date"
                value={item.date}
                onChange={(e) => handleExclusiveDateChange(item.id, e.target.value)}
              />
              <button type="button" onClick={() => removePreOrder(item.id)}>X</button>
            </div>
          ))}
          <div className="form-row form-group">
            <label>
              <input
                type="checkbox"
                checked={allowPreview}
                onChange={(e) => setAllowPreview(e.target.checked)}
              />
              Allow 90 sec of preview
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-row  form-group">
            <label>Add an exclusive release date</label>
            <select className="form-control">
              <option value="itunes">Please Select </option>
              <option value="itunes">Apple Music / iTunes / Shazam</option>
            </select>
          </div>
          {exclusiveDates.map((item) => (
            <div key={item.id} className="exclusive-date">
              <img src={``} alt={item.platform} />
              <input
                className="form-control"
                type="date"
                value={item.date}
                onChange={(e) => handleExclusiveDateChange(item.id, e.target.value)}
              />
              <button type="button" onClick={() => removeExclusiveDate(item.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3"> 
          <button type="submit" className="btn btn-primary" onClick={()=>{handleSubmit()}}>Submit</button>
        </div>
    </div>




  )
}

