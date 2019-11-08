import React, {useState} from 'react';
import ActionButton from '../actionButton/actionButton';
import '../Item/Item.css';

function Item(props) {
  const [editState, setEditState] = useState('');
  const [swipe, setSwipe] = useState('');
  const [deleteState, setDeleteState] = useState('');

  const moveItem = (e) => {
      setSwipe('swipe')
  }

  const cancelDelete = () => {
    setSwipe('')
    setDeleteState('')
  }

  const deleteItem = () => {
    setDeleteState('startDelete')
  }

  return (
    <div className={`Item ${swipe} ${deleteState}`} onTouchStart={deleteItem} 
          onTouchMove={moveItem} 
          onMouseEnter={() => setEditState('startDelete')}  
          onMouseLeave={() => setEditState('')}>
      <li className={swipe} onClick={cancelDelete}>{`${props.item.first_name} ${props.item.last_name}`}</li>
        <ActionButton classname={`delete ${editState}  ${swipe}`}  action={props.delete} id={props.item.id}/> 
    </div>
  );
}

export default Item;