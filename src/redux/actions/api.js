import * as actions from '../actionTypes';


export function getRestaurants() {
  return {
    type: actions.GET_RESTAURANTS,
    payload: {
      request: {
        url: '/restaurant',
      },
    },
  };
}


export function filterRestaurants(data) {
  return {
    type: actions.FILTER_RESTAURANTS,
    payload: {
      data
    }
  }
}
