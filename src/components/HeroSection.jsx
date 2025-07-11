import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Carousel fade controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Fifth.jpg"
          alt="Slide 1"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Second.jpg"
          alt="Slide 2"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Third.jpg"
          alt="Slide 3"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Fourth.jpg"
          alt="Slide 1"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/First.jpg"
          alt="Slide 1"
          style={{ height: "100vh", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
