import axios from 'axios';
import {
    CALENDERLOADED,
    CALENDERLOADING
} from './types';



export const loadCalenderData = () => (dispatch, getState) => {
  dispatch({ type: CALENDERLOADING });
  axios
    .get('https://punithargal123.herokuapp.com/calender/api')
    .then((res) => {
      dispatch({
        type: CALENDERLOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err)
    }); 
};


