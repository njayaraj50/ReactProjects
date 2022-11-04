import { useDispatch, useSelector } from "react-redux";
import {getTotals} from "../slices/cartSlice";
import { useEffect,useState } from "react";
//import axios from "axios";
import { Link} from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "../storage/Authentication";
import Footer from "./Footer";
const OrderDetails = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
console.log(cart);
  
  const id = Authentication.getOrderId();
  console.log(id);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/order/vieworderdetails?orderid="+id,
        { "method": "GET", })
        .then(res => res.json())
        .then(json => setOrderDetails(json))

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const[orderdetails,setOrderDetails]=useState([]);
  
 

  return (
    <>
      <Header />
      <div><ToastContainer /></div>
      <div className="cart-container">

        <h2>My Cart</h2>
        {orderdetails.length === 0 ? (
          <div className="cart-empty">
            <p>Your order is empty</p>
            <div className="start-shopping">
              <Link to="/productlisting">

                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div><h3>{orderdetails.order}</h3></div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {orderdetails &&
                orderdetails.map((orderItem) => (

                  <div className="cart-item" key={orderItem.id}>

                    <div className="cart-product">

                      <img src={orderItem.product.image} alt={orderItem.product.title}  />
                      <div>
                        <h3 >{orderItem.product.title}</h3>
                        <p>{orderItem.product.description}</p>
                        
                      </div>
                    </div>

                    <div className="cart-product-price"><h5>${orderItem.product.price}</h5></div>
                    <div className="cart-product-quantity">
                     
                      <div className="count"><h4>{orderItem.quantity}</h4></div>
                      
                    </div>
                    <div className="cart-product-total-price">
                      <h3>${orderItem.product.price * orderItem.quantity}</h3>
                    </div>
                   
                  </div>
                  
                )
                
                )}
            </div>
            <div className="cart-summary">
              
              <div className="cart-checkout">
                <div className="subtotal">
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div></div>
      <Footer/>
    </>
  );
};

export default OrderDetails;