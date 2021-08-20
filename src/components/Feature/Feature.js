import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import axios from "axios";
import "./Feature.css";
import { encode, decode } from "js-base64";

const { Meta } = Card;

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products`
      );
      setProducts(data);
    };
    fetchProduct();
  }, []);

  console.log(products);

  return (
    <div className="feature__product">
      <br />
      <h2>Featured Product</h2>
      <Row gutter={24}>
        {products.map((product, index) => (
          <Col xs={20} sm={12} lg={6} xl={6} key={product._id}>
            <Card
              hoverable
              style={{ width: 240, marginBottom: "1rem" }}
              cover={
                <img
                  alt="example"
                  src={`data:image/png;base64,${encode(
                    product.photo.data.data
                  )}`}
                />
              }
            >
              {console.log(encode(product.photo.data.data))}
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Feature;
