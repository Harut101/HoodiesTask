import React from 'react';
import '../DropDown/DropDown.css';

function DropDown(props) {
  return (
    <div className="DropDown">
     
     <select onChange={()=>'1'} className='selectDropDown' value={props.country ? props.country : ''}>
        <option value="+7">+7</option>
        <option value="+374">+374</option>
      </select>
    </div>
  );
}

export default DropDown;