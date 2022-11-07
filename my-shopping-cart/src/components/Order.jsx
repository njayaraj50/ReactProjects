import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "../storage/Authentication";
import { getTotals } from "../slices/cartSlice";

import Footer from "./Footer";
const Order = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  console.log(cart);
  const id = Authentication.isLoggedInUserId();
  console.log(id);
 
  useEffect(() => {
    fetch("http://localhost:8080/api/order/vieworder?userid=" + id,
      { "method": "GET", })
      .then(res => res.json())
      .then(json => setOrder(json))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const viewOrderItem = (orderItem) => {
    console.log(orderItem.id);
    Authentication.setOrderId(orderItem.id);
    navigate("/orderdetails")
  }
  return (
    <>
      <Header />
      <div><ToastContainer /></div>
      <div className="cart-container">

        <h2>My Order</h2>
        {order.length === 0 ? (
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
            <div className="order">
              <h3 className="order-title">OrderId</h3>
              <h3 className="price">Quantity</h3>
              <h3 className="quantity">Total Amount</h3>
              <h3 className="quantity">View Details</h3>
            </div>
            <div className="cart-items">
              {order &&
                order.map((orderItem) => (
                  <div className="order-item" key={orderItem.id}>

                    <div className="cart">



                      <h3>{orderItem.id}</h3>
                    </div>
                    <div className="cart-product-price"><h5>{orderItem.quantity}</h5></div>
                    <div className="cart-product-quantity">

                      <div className="cart-product-quantity"><h4>${orderItem.totalAmount}</h4></div>

                    </div>
                    <div className="cart-product-price">
                      <div className="ui vertical  button" tabIndex="0" onClick={() => viewOrderItem(orderItem)}>
                       
                        <div className="visible content">Order Details
                        </div>
                      </div>
                     
                    </div>

                  </div>

                ))}
            </div>
            <div className="cart-summary">
              <div></div>

              <div className="cart-checkout">
                <div className="subtotal">


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
      <Footer />
    </>
  );
};

export default Order;