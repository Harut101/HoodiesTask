import React from 'react';
import ActionButton from '../actionButton/actionButton';
import '../Modal/Modal.css'

function Modal(props) {
  let {title, close, action, onChange, value, validation} = props;

  return (
    <div className="Modal-Layer" onClick={close}>
        <div className="modal">
            <span className='close' onClick={close}></span>
            <div className='header'>
                <span className='title'>{title}</span>
            </div>

            <div className='body'>
                <input className={`${validation}`} 
                       type="text" 
                       name="user" 
                       placeholder='Enter contact’s full name' 
                       onChange={onChange} 
                       value={value}/>
            </div>

            <div className='footer'>
                <ActionButton text='Add to my List' action={action}/>
            </div>
        </div>
    </div>
  );
}

export default Modal;