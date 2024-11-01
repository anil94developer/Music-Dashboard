import React, { useState } from 'react';

export default function DynamicInputList(props) {
  const {inputs, setInputs}= props
  // const [inputs, setInputs] = useState([{ value: '' }]);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
     
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <div className="dynamic-input-container d-flex row">
      {inputs.map((input, index) => (
        <div class="input-group input-group-sm">
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            placeholder={`Input ${index + 1}`}
            className="form-control"
          />
          <span class="input-group-btn">
            {index == 0  ?
              <button class="btn btn-info btn-flat" type="button" onClick={handleAddInput} >+</button>
              :
              <button type="button" onClick={() => handleRemoveInput(index)} class="btn btn-danger btn-flat" >
                X
              </button>
              
            }
          </span>
        </div>
      ))} 
    </div>
  );
}
