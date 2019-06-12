import * as actions from '../actionTypes';

const initialState = {
    apiRestaurants: [],
    restaurants: [],
}

export default function api(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESTAURANTS: {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }
    case actions.GET_RESTAURANTS_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        apiRestaurants: action.payload.data,
        restaurants: action.payload.data,
      });
    }
    case actions.GET_RESTAURANTS_FAIL: {
      return state;
    }
    case actions.FILTER_RESTAURANTS: {
      return Object.assign({}, state, {
        restaurants: action.payload.data,
      });
    }
    default:
      return state;
  }
}
