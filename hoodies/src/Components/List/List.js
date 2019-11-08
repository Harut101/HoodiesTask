import React from 'react';
import Item from '../Item/Item';
import ActionButton from '../actionButton/actionButton';
import '../List/List.css'

function List(props) {
  let {openModal} = props;

  return (
    <div className="List">
      <ul>
          {props.data.map((item) => {
              return <Item key={item.id} item={item} delete={props.delete}/>
          })}
          <ActionButton classname='add' text='Add New Contact' action={openModal}/>
      </ul>
    </div>
  );
}

export default List;