import React from "react";
import { Carousel } from "antd";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";

const contentStyle = {
  height: "20rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const Carousal = () => {
  return (
    <Carousel autoplay>
      <div>
        <img style={contentStyle} src={one} />
      </div>
      <div>
        <img style={contentStyle} src={two} />{" "}
      </div>
      <div>
        <img style={contentStyle} src={three} />{" "}
      </div>
    </Carousel>
  );
};

export default Carousal;
