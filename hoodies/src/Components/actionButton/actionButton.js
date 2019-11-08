import React from 'react';
import '../actionButton/actionButton.css'

function ActionButton(props) {
  let {action, text, classname, id} = props;

  return (
    <div className={`ActionButton ${classname}`} onClick={() =>action(id)}>
      <span className='buttonText'>{text}</span>
    </div>
  );
}

export default ActionButton;