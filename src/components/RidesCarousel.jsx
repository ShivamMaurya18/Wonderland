// RidesCarousel.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
  FaYoutube,
} from "react-icons/fa";
import "./Style/RidesCarousel.css";

const rides = [
  { title: "Thrilling Engine", image: "/rides/ride1.png" },
  { title: "Sky Drop", image: "/rides/ride2.png" },
  { title: "Flying Carousel", image: "/rides/ride3.png" },
  { title: "Water Park & Rain Dance", image: "/rides/ride4.png" },
  { title: "Water Laser Show", image: "/rides/ride5.png" },
  { title: "Trampoline Park", image: "/rides/ride6.png" },
  { title: "Disco Tagada", image: "/rides/ride7.png" },
  { title: "Racer's Edge", image: "/rides/ride8.png" },
  { title: "Water Splash Mountain", image: "/rides/ride9.png" },
];

const ITEMS_PER_SLIDE = 3;

const RidesCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev + 1 < Math.ceil(rides.length / ITEMS_PER_SLIDE) ? prev + 1 : prev
    );
  };

  const currentSlides = rides.slice(
    index * ITEMS_PER_SLIDE,
    index * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <div className="rides-carousel-section py-5 mt-4">
      <Container>
        <div className="text-center mb-4">
          <p className="text-uppercase small text-muted">
            Our Exciting Rides & Attractions
          </p>
          <h2
            className="fw-bold"
            style={{ color: "#6b0f1a", fontSize: "38px" }}
          >
            RIDES
          </h2>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button
            variant="outline-dark"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="outline-dark"
            onClick={handleNext}
            disabled={(index + 1) * ITEMS_PER_SLIDE >= rides.length}
          >
            <FaChevronRight />
          </Button>
        </div>

        <Row className="g-4 justify-content-center">
          {currentSlides.map((ride, idx) => (
            <Col md={4} sm={6} xs={12} key={idx}>
              <Card className="ride-card text-center">
                <Card.Img
                  variant="top"
                  src={ride.image}
                  className="ride-image"
                />
                <Card.Body className="bg-dark text-white rounded-bottom">
                  <Card.Title className="mb-0">{ride.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RidesCarousel;
