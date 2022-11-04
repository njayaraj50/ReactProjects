import React from 'react'
import Home from './components/Home';
//import Index from './components/Index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./components/Register";
import LoginJson from "./components/LoginJson";
import ProductListing from "./components/ProductListing";
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import "./App.css";
import Order from './components/Order';
import OrderDetails from './components/OrderDetails';
import Profile from './components/Profile';

function App() {
  return (
    <> 
   
    <Router> 
      
    <Routes> 
    <Route  path="/" element={<Home />}></Route>
    <Route  path="/register" element={<Register />}></Route> 
    <Route  path="/login" element={<LoginJson />}></Route>
    <Route  path="/profile" element={<Profile />}></Route> 
    <Route path="/productlisting" element={< ProductListing/>}></Route>
    <Route path="/productdetails/:productId" element={< ProductDetails/>}></Route>
    <Route path="/addcart" element={< Cart/>}></Route>
    <Route path="/order" element={< Order/>}></Route>
    <Route path="/orderdetails" element={< OrderDetails/>}></Route>
    <Route path="/logout" element={< Home/>}></Route>
 </Routes>
 </Router>
  </>
    
    
    

  )
}

export default App