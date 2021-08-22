import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Skeleton } from "antd";
import "./ProductDetails.css";
import { Fade } from "react-awesome-reveal";
import Button from "antd/lib/button/button";

const Details = ({ match }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/product/${match.params.id}`
      );
      setDetails(data);
    };
    fetchData();
  }, []);

  const { name, description, price, photo, sold, stock, category } = details;

  const photoUrl = photo
    ? btoa(String.fromCharCode(...new Uint8Array(details.photo.data.data)))
    : "";

  console.log(details);
  return (
    <div>
      <br />
      <br />
      {details ? (
        <Fade>
          <Row>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div className="product__image">
                <Image width={500} src={`data:image/jpeg;base64,${photoUrl}`} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <div className="details">
                <h1>{name}</h1>
                <h3>
                  Old price: Rs. <span id="old__price">{price}</span>
                </h3>
                <h3>
                  New price: Rs. <span id="new__price">{price}</span>
                </h3>
                <div className="product__description">
                  <h2>About This Product:</h2>
                  <p>{description}</p>
                </div>
                <br />
                <br />
                <div className="button">
                  <Button type="primary" size="large" className="buy__now">
                    Buy Now
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    className="add___to__cart"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      ) : (
        <Skeleton avatar paragraph={{ rows: 4 }} />
      )}
    </div>
  );
};

export default Details;
