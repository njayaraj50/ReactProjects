import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../slices/cartSlice";
//import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "../storage/Authentication";
import Footer from "./Footer";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  console.log(cart);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const navigate = useNavigate();
  const productDetail = (product) => {
    //const userData = JSON.parse(localStorage.getItem(product));
    navigate("/productdetails/" + product);
    //console.log(userData);
  }
  const id = Authentication.isLoggedInUserId();
  console.log(id);
  
  const order = async(cart) => {
    const cartitems = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
    await fetch('http://localhost:8080/api/order/myorder', {
      method: 'POST',
      body: JSON.stringify({
        userid: id,
       cartTotalQuantity: cart.cartTotalQuantity,
        totalAmount: cart.cartTotalAmount,
       
        cartItems:cartitems.cartItems,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
      handleClearCart();
  };

  return (
    <>
      <Header />
      <div><ToastContainer /></div>
      <div className="cart-container">

        <h2>My Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <div className="start-shopping">
              <Link to="/productlisting">

                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
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

                      <img src={cartItem.image} alt={cartItem.title} onClick={() => productDetail(cartItem.id)} />
                      <div>
                        <h3 >{cartItem.title}</h3>
                        <p>{cartItem.description}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-product-price"><h5>${cartItem.price}</h5></div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count"><h4>{cartItem.cartQuantity}</h4></div>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      <h3>${cartItem.price * cartItem.cartQuantity}</h3>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/order"><button onClick={() => order(cart)}>Check out</button></Link>
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
      <Footer/>
    </>
  );
};

export default Cart;