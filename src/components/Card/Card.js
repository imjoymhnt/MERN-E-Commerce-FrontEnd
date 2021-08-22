import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const ProductCard = ({ name, price, img }) => {
  return (
    <Card
      id="card"
      hoverable
      style={{
        width: 240,
        marginBottom: "1rem",
      }}
      cover={<img alt="example" src={img} />}
    >
      <Meta title={name} description={`Rs: ${price}`} />
    </Card>
  );
};

export default ProductCard;
