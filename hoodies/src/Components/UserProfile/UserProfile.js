import React from 'react';
import '../UserProfile/UserProfile.css'

function UserProfile(props) {
  let { changedName, userName} = props;
  
  return (
    <div className="UserProfile">
        <div className='user-avatar'>{userName[0]}</div>
        <p className='user-name' suppressContentEditableWarning="true" contentEditable="true" onBlur={changedName}>{userName}</p>
    </div>
  );
}

export default UserProfile;