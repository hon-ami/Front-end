import * as actions from '../actionTypes';

export function getMapCounty(county) {
  return {
    type: actions.GET_MAP_COUNTY,
    payload: {
      county,
    },
  };
}
