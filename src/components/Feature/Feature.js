import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import axios from "axios";
import "./Feature.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Fade from "react-reveal/Fade";

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

  const images = products.map((product) =>
    btoa(String.fromCharCode(...new Uint8Array(product.photo.data.data)))
  );

  return (
    <Router>
      <div className="feature__product">
        <br />
        <h2>Featured Product</h2>
        <Row gutter={24}>
          {products.map((product, index) => (
            <Col xs={20} sm={12} lg={6} xl={6} key={product._id}>
              <Link to={product._id}>
                <Fade bottom>
                  <Card
                    id="card"
                    hoverable
                    style={{
                      width: 240,
                      marginBottom: "1rem",
                    }}
                    cover={
                      <img
                        alt="example"
                        src={`data:image/jpeg;base64,${images[index]}`}
                      />
                    }
                  >
                    <Meta
                      title={product.name}
                      // description={product.description}
                      description={`Rs: ${product.price}`}
                    />
                  </Card>
                </Fade>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Router>
  );
};

export default Feature;
