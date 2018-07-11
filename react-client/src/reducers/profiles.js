import {
  LOGGING_IN_DEVICE,
  ERROR_LOGGING_IN,
  LOGGED_IN,
  PROFILE_DATA_RECIEVED,
} from '../actions/types';

const initialState = {
  userId: 2,
  devices: [],
  currentDevice: {},
  profileData: [],
  loading: true,
  isOnline: false,
  loggingIn: false,
  loggedIn: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN_DEVICE:
      return { ...state, loggingIn: true };
    case ERROR_LOGGING_IN:
      return { ...state, error: action.data };
    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        devices: action.data.devices,
        currentDevice: action.data.currentDevice,
        isOnline: true,
      };
    case PROFILE_DATA_RECIEVED:
      return {
        ...state,
        loading: false,
        profileData: action.payload,
      };
    default:
      return state;
  }
};
