
import './slider.css'
import React, { useState } from 'react';

const RangeInputWithMarks = (props) => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
    // console.log(event.target.value);
    props.ch(event.target.value)
  };

  

  return (
    <div className=''>
        <label htmlFor="">Rating:-</label>
        <input style={props.mode === 'light'?{background:'#1B254A'}:null} type="number" min={1} max={7} className='border-2' value={selectedValue} onChange={handleInputChange} />
      
      
    </div>
  );
};

export default RangeInputWithMarks;
