import { createStore } from "redux";
import Reducer from "../reducers/Reducer";

export const storeCart = createStore(
    Reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default storeCart;