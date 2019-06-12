import * as actions from '../actionTypes';
import { COUNTY } from '../../components/constants/Global';

const initialState = {
  county: 'all',
  countyLngLat: [-73.9308331544632, 40.7264313800971],
  isMapLoading: true,
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MAP_COUNTY: {
      const lngLat = COUNTY.filter(borough => {return (borough.label === action.payload.county)})
      .map(lngLat => { return [lngLat.lng, lngLat.lat]; });
      return Object.assign({}, state, {
        county: action.payload.county,
        countyLngLat: lngLat[0],
      });
    }
    case actions.GET_MAP_LOADER: {
      return Object.assign({}, state, {
        isMapLoading: action.payload.bool,
      })
    }
    default:
      return state;
  }
}
