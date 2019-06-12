import { createStore, applyMiddleware, compose } from 'redux';
import axios from "axios";
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from "./reducers";


const client = axios.create({
  baseURL: 'http://localhost:8000/api',
  responseType: 'json',
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'Cache-Control': 'no-cache',
  // },
});


const middleware = [
  thunk,
  axiosMiddleware(client),
];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware)(createStore));

export function configure(initialState) {
  const configStore = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return configStore;
}

// const store = createStore(
//    rootReducer, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// export default store;
