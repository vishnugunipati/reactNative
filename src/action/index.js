import axios from 'axios';

export function getPhotos() {
  return (dispatch) => {
    axios.get('http://127.0.0.1:3000/photos')
      .then(response => {
        dispatch({
          type:'GET-PHOTOS',
          payload: response.data
        });
      });
  };
}