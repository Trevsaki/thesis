import axios from 'axios';

import {
  PROFILE_DATA_RECIEVED,
  PROFILE_DATA_UPDATE,
  UPDATING_PROFILE_WIDGETS,
  PROFILE_WIDGETS_UPDATED,
  ERROR_UPDATING_PROFILE_WIDGETS,
} from './types';

const fetchProfilesFromDB = () => {
  return (dispatch) => {
    axios.get('/profile/loadAll')
      .then((result) => {
        let { data } = result;
        let profileData = data.map((prof) => {
          prof.editing = false;
          prof.deleting = false;
          return prof;
        });
        console.log('act ', profileData);
        dispatch({ type: PROFILE_DATA_RECIEVED, payload: profileData });
      })
      .catch((err) => {
        console.log(`Error loading profiles: ${err}`);
      });
  };
};

const deployProfileToDevice = (profile) => {
  return (dispatch) => {
    axios.post('/profile/apply', {
      deviceName: 'savvy-fox',
      profileData:
      {
        profile: profile.widgets,
        switchMode: 'Manual',
      },
    })
      .then((result) => {
        console.log(result.data);
        dispatch({ type: null, payload: null });
      })
      .catch((err) => {
        console.log(`Error loading profiles: ${err}`);
      });
  };
};

const updateProfiles = (profileData) => {
  return (dispatch) => {
    dispatch({ type: PROFILE_DATA_UPDATE, payload: profileData });
  };
};

const updateProfileWidgets = (profileName, widgetName) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_PROFILE_WIDGETS });
    axios.post('/profile/updateWidgets', { profileName, widgetName })
      .then((result) => {
        console.log('SUCCESS IN UPDATING PROFILE', result);
        dispatch({ type: PROFILE_WIDGETS_UPDATED, payload: result });
      })
      .catch((err) => {
        console.log('ERROR UPDATING PROFILE', err);
        dispatch({ type: ERROR_UPDATING_PROFILE_WIDGETS, payload: err });
      });
  };
};

const saveProfileToDB = () => {
  
};

const deleteProfileFromDB = () => {

};

export {
  fetchProfilesFromDB,
  updateProfiles,
  deployProfileToDevice,
  updateProfileWidgets,
  saveProfileToDB,
  deleteProfileFromDB,
};
