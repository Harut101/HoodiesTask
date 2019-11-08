import React from 'react';
import '../Button/Button.css';

function Button(props) {
  const disabled = !props.disabled ? 'disabled' : '';
  return (
    <div className="Button" onClick={props.sendCode}>
        <svg width="58" height="26" viewBox="0 0 58 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={disabled} opacity="0.3" d="M1 13H56.5M56.5 13L44.5 1M56.5 13L44.5 25" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  );
}

export default Button;