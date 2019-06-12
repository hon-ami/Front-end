import * as actions from '../actionTypes';

export function getMapCounty(county) {
  return {
    type: actions.GET_MAP_COUNTY,
    payload: {
      county,
    },
  };
}

export function isMapLoading(bool) {
  return {
    type: actions.GET_MAP_LOADER,
    payload: {
      bool,
    }
  }
}
