import axios from 'axios';
import {
  BLOGLOADED,
  BLOGLOADING,
  BLOGSEARCH,
} from './types';



export const loadBlog = () => (dispatch, getState) => {
  dispatch({ type: BLOGLOADING });
  axios
    .get('https://punithargal123.herokuapp.com/blog/api')
    .then((res) => {
      dispatch({
        type: BLOGLOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err)
    }); 
};

// export const searchData = (query) => (dispatch, getState) => {
//   dispatch({ type: YDATASEARCH });
//   axios
//     .get(`https://punithargal123.herokuapp.com/youtube/api/find?search=${query}`)
//     .then((res) => {
//       dispatch({
//         type: YDATASEARCH,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err)
//     }); 
// };

