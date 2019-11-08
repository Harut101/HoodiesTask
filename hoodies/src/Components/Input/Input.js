import React from 'react';
import '../Input/Input.css';

function Input(props) {
  const state = props.touched && !props.state ? 'error' : ''
  return (
    <div className="Input">
      <input 
        onChange={props.onChange} 
        onKeyUp={props.send}
        value={props.value} 
        className={`inputText ${state} ${props.class}`} 
        placeholder={props.placeholder} 
        type="text" 
        name={props.name} />
    </div>
  );
}

export default Input;