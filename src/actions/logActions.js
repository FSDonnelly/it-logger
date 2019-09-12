import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs =  () => {
//     return async (dispatch) => {
//   setLoadingg()

//     const res = await fetch('/logs')
//     const data = await res.json()

//     dispatch({
//         type: GET_LOGS,
//         payload: data
//     })
//     }

// };
// Get all logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoadingg();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set loading to true
export const setLoadingg = () => {
  return {
    type: SET_LOADING
  };
};
