import {
  SIGN_IN_TO_PARTICLE,
  PARTICLE_SIGN_IN_SUCCESSFUL,
  PARTICLE_SIGN_IN_ERROR,

  GETTING_DEVICE_INFO,
  DEVICE_INFO_RECEIVED,
  ERROR_RETRIEVING_DEVICE_INFO,
  DEVICE_STATUS_UPDATE,
  DEVICE_DIAGNOSTICS_UPDATE,
} from '../actions/types';

const initialState = {
  devices: [],
  deviceStats: [],
  signingInToParticle: false,
  signedInToParticle: false,
  gettingDeviceInfo: false,
  deviceInfoReceived: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_TO_PARTICLE:
      return {
        ...state,
        signingInToParticle: true,
      };
    case PARTICLE_SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        signingInToParticle: false,
        signedInToParticle: true,
        devices: action.payload,
      };
    case PARTICLE_SIGN_IN_ERROR:
      return {
        ...state,
        signingInToParticle: false,
        error: action.payload,
      };
    case GETTING_DEVICE_INFO:
      return {
        ...state,
        gettingDeviceInfo: true,
      };
    case DEVICE_INFO_RECEIVED:
      return {
        ...state,
        gettingDeviceInfo: false,
        deviceInfoReceived: true,
        deviceStats: action.payload,
      };
    case ERROR_RETRIEVING_DEVICE_INFO:
      return {
        ...state,
        gettingDeviceInfo: false,
        error: action.payload,
      };
    case DEVICE_STATUS_UPDATE:
      return {
        ...state,
        gettingDeviceInfo: false,
        deviceStats: action.payload,
      };
    case DEVICE_DIAGNOSTICS_UPDATE:
      return {
        ...state,
        gettingDeviceInfo: false,
        deviceStats: action.payload,
      };
    default:
      return state;
  }
};
