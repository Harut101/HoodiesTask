import React from 'react';
import '../EditBlock/editBlock.css';

function EditBlock(props) {
  return (
    <div className="EditBlock" onClick={props.changePhone}>
        <p className='text'>{props.text}</p>
        <span className='info'>{props.info}</span>
    </div>
  );
}

export default EditBlock;