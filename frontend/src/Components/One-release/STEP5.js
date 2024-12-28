import React, { useEffect } from 'react';
import Step5Controller from '../../Controllers/One-release-controller/Step5Controller';
export default function STEP5(props) {
const { releaseData, fetchReleaseDetails } = props
const { handleSubmit,
removeExclusiveDate,
removePreOrder,
exclusiveOrderSelect,
preOrderSelect,
handlePreOrderDateChange,
handleExclusiveDateChange,
preOrderDate, setPreOrderDate,
selectPreOrderDate, setSelectPreOrderDate,
exclusiveDates, setExclusiveDates,
selectexclusiveDate, setSelectexclusiveDate, allowPreview, setAllowPreview,
setReleaseData, mainReleaseDate, setMainReleaseDate
} = Step5Controller();
useEffect(() => {
const getData = async () => {
setReleaseData(releaseData)
setMainReleaseDate(releaseData?.step5?.MainReleaseDate)
setAllowPreview(releaseData?.step5?.Preview?.Allow90Sec)
setSelectPreOrderDate(releaseData?.step5?.PreOrder)
setSelectexclusiveDate(releaseData?.step5?.ExclusiveReleaseDates)
}
getData()
}, [releaseData])
return (
<div>
  <div className="row">
    <div className="col-md-4">
      <div className="form-group">
        <label>Choose a main release date <span>*</span></label>
        <input
          className="form-control"
          type="date"
          value={mainReleaseDate}
          onChange={(e) => setMainReleaseDate(e.target.value)}
        />
        {props.errors?.['step5.mainReleaseDate'] && (
        <span className="text-danger">{props.errors['step5.mainReleaseDate']}</span>
        )}
      </div>
      <div className="form-group">
        <label>Add a pre-order date</label>
        <select className="form-control" onChange={(e) =>
          preOrderSelect(e.target.value)}>
          <option value="">Select Music</option>
          {preOrderDate.map((item) => (
          <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      {selectPreOrderDate.map((item) => (
      <div
      className="form-control"
      style={{
      display: 'flex', // Ensure the container is a flex container
      flexDirection: 'row', // Align items in a row
      gap: '10px', // Add space between items
      alignItems: 'center', // Align items vertically centered,
      marginTop: 20
      }}
      > 
      <input
        className="form-control" 
        value={item.name}
        disbled 
        />
      <input
        className="form-control"
        type="date"
        value={item.date}
        onChange={(e) => handlePreOrderDateChange(item.id, e.target.value)}
      />
      <button type="button" onClick={() => removePreOrder(item.id)}>X</button>
    </div>
    ))}
    {/* <div className="form-group" style={{
    marginTop: 50
    }}>
    <label>
    <input
      type="checkbox"
      checked={allowPreview}
      onChange={(e) => setAllowPreview(e.target.checked)}
    />
    Allow 90 sec of preview
    </label>
  </div>
  */}
</div>
<div className="col-md-4">
  <div className="form-group">
    <label>Add an exclusive release date</label>
    <select className="form-select form-control" onChange={(e) =>
      exclusiveOrderSelect(e.target.value)}>
      <option value="">Please Select</option>
      {exclusiveDates?.map((item) => (
      <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </select>
  </div>
  {selectexclusiveDate?.map((item) => (
  <div
  className="form-control"
  style={{
  display: 'flex', // Ensure the container is a flex container
  flexDirection: 'row', // Align items in a row
  gap: '10px', // Add space between items
  alignItems: 'center', // Align items vertically centered,
  marginTop: 20
  }}
  >
  <input
    className="form-control" 
    value={item.name}
    disbled 
    />
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
<div className="submit-btn">
  <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Save</button>
</div>
</div>
);
}