import { createStore } from "redux";

import reducers from "../reducers/index";


export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
/*import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers/index'
const store =  createStore(ShopApp,applyMiddleware(thunkMiddleware));
export default store;*/