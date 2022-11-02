import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
//import Navbar from "./Navbar/Navbar";
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      //.get("https://fakestoreapi.com/products")
      .get("http://localhost:8080/api/product/all")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Products :", products);
  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>

  );
};

export default ProductPage;