import { combineReducers } from 'redux';

import WeatherReducer from './weather';
import StocksReducer from './stocks';
import DevicesReducer from './devices';
import ProfilesReducer from './profiles';
import UserReducer from './users';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  stocks: StocksReducer,
  userDevices: DevicesReducer,
  profiles: ProfilesReducer,
  user: UserReducer,
});

export default rootReducer;

