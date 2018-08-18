import React from 'react';

function ListItem(props){

   return (
      <li >
         {console.log("make item ListItem")}
         {props.item.name}
         <button onClick={(e) => { props.handleDelete(props.item.fbId) }}>Delete</button>
      </li>
   )
}

export default ListItem;