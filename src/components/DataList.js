import React from 'react';
import ListItem from './ListItem'

function DataList(props) {

   return (
      <ul>
         {Object.keys(props.attractions).map((item) => {
            return (
               <ListItem item={props.attractions[item]} key={item} handleDelete={props.handleDelete} />
            )
         })
         }
      </ul>
   )
}

export default DataList;