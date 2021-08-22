import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Row, Col } from "antd";
import ProductCard from "../Card/Card";
import "./Products.css";

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/products`);
      setProductList(data);
    };
    fetchData();
  }, []);

  const images = productList.map((product) =>
    btoa(String.fromCharCode(...new Uint8Array(product.photo.data.data)))
  );

  return (
    <div className="feature__product">
      <br />
      <h2>Featured Product</h2>
      <Row gutter={24}>
        {productList.map((product, index) => (
          <Col xs={20} sm={12} lg={6} xl={6} key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Fade>
                <ProductCard
                  name={product.name}
                  img={`data:image/jpeg;base64,${images[index]}`}
                  price={product.price}
                />
              </Fade>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
