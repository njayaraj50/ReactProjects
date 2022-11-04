import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
//import { useNavigate } from "react-router";
import { addToCart, getTotals, } from "../slices/cartSlice";
//import Footer from "./Footer";

const ProductComponent = () => {
  //const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
console.log(cart);
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
    localStorage.setItem(product, JSON.stringify({ 
      id: product.id, 
   }));
   console.log(JSON.parse(localStorage.getItem(product)));
    //navigate("/addcart");
  };
  
    
  const renderList = products.map((product) => {
    //product.quantity=1;
    //const { id, title, image, price, category } = product;
    
    return (

      <div className="four wide column" key={product.id}>

        <Link to={`/productdetails/${product.id}`}>
          <div className="ui link cards">

            <div className="card">

              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">$ {product.price}</div>
                <div className="meta">{product.category}</div>
                
              </div>
            </div>

          </div>
        </Link>

        <div className="ui vertical animated button" tabIndex="0" onClick={() => handleAddToCart(product)}>
          <div className="hidden content">
            <i className="shop icon"></i>
          </div>
          <div className="visible content">Add to Cart
          </div>
        </div>

      </div>

    );
  });
  return <>
    <Header />
    {renderList}
    
    </>;
};

export default ProductComponent;