import { Carousel } from "react-bootstrap";
import React from "react";
function Visualizer() {
  return (
    <Carousel className="purple-border">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/photos/elsaltito-5.jpg "
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/photos/elsaltito-9.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/photos/IMG_7819.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/photos/IMG_7830.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Visualizer;
