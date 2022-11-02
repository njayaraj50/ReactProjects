import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, } from "../redux/actions/productActions";
import Header from "./Header";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import styled from "styled-components";

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  //const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  

  const fetchProductDetail = async (id) => {
    const response = await axios
      //.get(`https://fakestoreapi.com/products/${id}`)
      .get(`http://localhost:8080/api/product/productdetails/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
    navigate("/addcart");
    
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);


  return (
    <>
      <Header />
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (

          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={product.image} alt="image1" />
                </div>
                <div className="column rp">
                  <h1>{product.title}</h1>
                  <h2>
                    <p className="ui teal tag label">${product.price}</p>
                  </h2>
                  <h3 className="ui brown block header">{product.category}</h3>
                  <p>{product.description}</p>
                  <Center><div className="ui vertical animated button" tabIndex="0" onClick={() => handleAddToCart(product)}>
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart
                    </div>
                  </div></Center>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;