import { FETCH_ITEMS } from './types';

export const fetchItems = () => dispatch => {
  //   console.log('fetching....');
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      })
    );
};
