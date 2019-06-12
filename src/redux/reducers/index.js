import { combineReducers } from 'redux';
import map from './map';
import api from './api';

export default combineReducers({
  map,
  api,
});
