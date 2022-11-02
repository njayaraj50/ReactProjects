import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 
  getTotals,
 
} from "../slices/cartSlice";

import { Link } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
 const userData = JSON.parse(localStorage.getItem(cart));
 console.log(userData);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

 
  return (
    <>
    <OrderHeader/>
    <div><ToastContainer/></div>
    <div className="cart-container">
  
      <h2>My Order</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your order is currently empty</p>
          <div className="start-shopping">
            <Link to="/productlisting">
              
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
            <h1>Your Order is placed!</h1>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div>
                      
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.description}</p>
                    
                    </div>
                  </div>
                  <div className="cart-product-price"><h5>${cartItem.price}</h5></div>
                  <div className="cart-product-quantity">
                    
                    <div className="count"><h4>{cartItem.cartQuantity}</h4></div>
                    
                  </div>
                  <div className="cart-product-total-price">
                   <h3>${cartItem.price * cartItem.cartQuantity}</h3> 
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
           <div></div>
           
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              
             
              <div className="continue-shopping">
                <Link to="/productlisting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;