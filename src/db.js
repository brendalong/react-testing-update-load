import {fb} from './fb';

export function fetchData() {
   return fetch(`${fb}.json`)
      .then(res => res.json())
      .catch(err => console.log(err));
}

export function deleteItem(item) {
   return fetch(`${fb}/${item}.json`, {
      method: "DELETE",
   })
   .then(res => res.json())
   .catch(err => console.log(err));
}

export function editItem(item) {
   return fetch(`${fb}/${item}.json`, {
      method: "POST",
   })
      .then(res => res.json())
      .catch(err => console.log(err));
}