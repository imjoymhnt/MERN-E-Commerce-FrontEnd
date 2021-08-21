import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  console.log(id);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/product/${id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  console.log(product);
  return <div>product Details</div>;
};

export default Product;
