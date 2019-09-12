import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => (log.id === payload.id ? payload : log)),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
