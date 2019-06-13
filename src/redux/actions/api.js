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

export function getBorough() {
  return {
    type: actions.GET_BOROUGH,
    payload: {
      request: {
        url: '/restaurant/borough',
      },
    },
  };
}

export function filterBorough(data) {
  return {
    type: actions.FILTER_BOROUGH,
    payload: {
      data
    }
  }
}


export function filterRestaurants(data) {
  return {
    type: actions.FILTER_RESTAURANTS,
    payload: {
      data
    }
  }
}
