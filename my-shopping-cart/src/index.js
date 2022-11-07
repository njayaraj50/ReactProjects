import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, selectedProductsReducer} from "./redux/reducers/productsReducer";
import cartReducer, { getTotals } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    allProducts: productsReducer,
  product: selectedProductsReducer,
    cart: cartReducer,
    
  },
  
});

store.dispatch(getTotals());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);