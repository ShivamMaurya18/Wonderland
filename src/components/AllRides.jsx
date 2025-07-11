import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Style/AllRides.css"; // Custom CSS for hover & image styling

const allRides = [
  { title: "Thrilling Engine", image: "/rides/ride1.png" },
  { title: "Sky Drop", image: "/rides/ride2.png" },
  { title: "Flying Carousel", image: "/rides/ride3.png" },
  { title: "Water Park & Rain Dance", image: "/rides/ride4.png" },
  { title: "Water Laser Show", image: "/rides/ride5.png" },
  { title: "Trampoline Park", image: "/rides/ride6.png" },
  { title: "Disco Tagada", image: "/rides/ride7.png" },
  { title: "Racer's Edge", image: "/rides/ride8.png" },
  { title: "Water Splash Mountain", image: "/rides/ride9.png" },
  { title: "Selfie Zone", image: "/images/selfie-zone.jpg" },
  { title: "Aapnu Gom", image: "/images/aapnu-gom.jpg" },
  { title: "Vrundavan Garden", image: "/images/garden.jpg" },
  { title: "Resort & Party Plot", image: "/images/resort.jpg" },
  { title: "Happy Moments", image: "/images/happy-moments.jpg" },
  { title: "Roller Coaster", image: "/images/roller.jpg" },
  { title: "Ocean Park", image: "/images/Ocean.jpg" },
];

const upcomingRides = [
  "/images/upcoming1.jpg",
  "/images/upcoming2.jpg",
  "/images/upcoming3.jpg",
  "/images/upcoming4.jpg",
  "/images/upcoming5.jpg",
  "/images/upcoming6.jpg",
];

const AllRides = () => {
  return (
    <div style={{ paddingTop: "100px", backgroundColor: "#f9fcff" }}>
      <Container className="mb-5">
        <h1 className="text-center fw-bold mb-4">🎡 All Rides & Attractions</h1>
        <p className="text-center text-muted mb-5">
          Explore our thrilling, family-friendly, and water-based rides!
        </p>

        <Row className="g-4">
          {allRides.map((ride, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card className="ride-card h-100 border-0">
                <div className="ride-img-wrapper">
                  <Card.Img
                    src={ride.image}
                    alt={ride.title}
                    className="ride-img"
                  />
                </div>
                <Card.Body className="text-center p-2">
                  <Card.Title
                    style={{
                      backgroundColor: "#003366",
                      color: "#fff",
                      fontSize: "1rem",
                      padding: "0.5rem",
                      borderRadius: "6px",
                    }}
                  >
                    {ride.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Upcoming Rides */}
      <Container className="mb-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#e60073" }}>
          🚀 Upcoming Thrilling
        </h2>
        <Row className="g-4">
          {upcomingRides.map((src, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card className="ride-card h-100 border-0">
                <div className="ride-img-wrapper">
                  <Card.Img
                    src={src}
                    alt={`Upcoming ${index + 1}`}
                    className="ride-img"
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllRides;
