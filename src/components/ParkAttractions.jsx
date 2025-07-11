import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsLink45Deg } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";

const ParkAttractions = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const attractions = [
    {
      title: "Selfie Zone",
      image: "/images/selfie-zone.jpg",
    },
    {
      title: "Aapnu Gom",
      image: "/images/aapnu-gom.jpg",
    },
    {
      title: "Water Laser Show",
      image: "/images/water-laser.jpg",
    },
    {
      title: "Vrundavan Garden",
      image: "/images/garden.jpg",
    },
    {
      title: "Resort & Party Plot",
      image: "/images/resort.jpg",
    },
    {
      title: "Happy Moments",
      image: "/images/happy-moments.jpg",
    },
  ];

  return (
    <div
      style={{ paddingTop: "100px", background: "#f4f8ff", minHeight: "100vh" }}
    >
      <Container>
        <div className="text-center mb-5">
          <h1
            className="fw-bold display-4"
            style={{
              background: "linear-gradient(to right, #00c9ff, #92fe9d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🎠 Park Attractions
          </h1>
          <p className="text-muted fs-5">
            Explore our magical attractions designed for all age groups!
          </p>
        </div>

        <Row className="g-4">
          {attractions.map((item, idx) => (
            <Col xs={12} sm={6} md={4} key={idx} data-aos="fade-up">
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="rounded-0"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="bg-dark text-white text-center p-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-pill mb-2"
                    style={{ backgroundColor: "#ffffff22" }}
                  >
                    <BsLink45Deg />
                    <span className="fw-semibold">{item.title}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ParkAttractions;
