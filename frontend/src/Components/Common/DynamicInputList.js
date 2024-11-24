import React, { useState } from 'react';

export default function DynamicInputList(props) {
  const {inputs, setInputs}= props 

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].id = index;
    newInputs[index].name = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { id: '',name:'' }]); 
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <div className="dynamic-input-container d-flex row">
      
      {inputs.map((input, index) => (
        <div className="input-group input-group-sm">
          <input
            type="text"
            value={input.name}
            onChange={(event) => handleInputChange(index, event)}
            placeholder={`Input ${index + 1}`}
            className="form-control"
          />
          <span className="input-group-btn">
            {index == 0  ?
              <button className="btn btn-info btn-flat" type="button" onClick={handleAddInput} >+</button>
              :
              <button type="button" onClick={() => handleRemoveInput(index)} className="btn btn-danger btn-flat" >
                X
              </button>
              
            }
          </span>
        </div>
      ))} 
    </div>
  );
}
