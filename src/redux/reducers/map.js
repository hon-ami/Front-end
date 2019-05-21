import * as actions from '../actionTypes';
import { COUNTY } from '../../components/constants/Global';

const initialState = {
  county: 'all',
  countyLngLat: [-74.007766, 40.714625],
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MAP_COUNTY: {
      const lngLat = COUNTY.filter(borough => {return (borough.label === action.payload.county)})
      .map(lngLat => { return [lngLat.lng, lngLat.lat]; });
      console.log(lngLat);
      return Object.assign({}, state, {
        county: action.payload.county,
        countyLngLat: lngLat[0],
      });
    }
    default:
      return state;
  }
}
