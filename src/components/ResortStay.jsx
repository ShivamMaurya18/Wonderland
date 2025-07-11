import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const ResortStay = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div style={{ paddingTop: "100px", background: "#f0f8ff" }}>
      {/* 1. Hero Section */}
      <div className="resort-hero text-center text-white py-5">
        <h1 className="display-4 fw-bold" data-aos="zoom-in">
          🏨 Resort & Stay
        </h1>
        <p className="lead" data-aos="fade-up">
          Experience magical comfort with world-class amenities right beside the
          thrill.
        </p>
      </div>

      <Container className="py-5">
        {/* 2. Highlights */}
        <Row className="mb-5">
          <Col md={4} data-aos="fade-up">
            <Card className="highlight-card">
              <Card.Body>
                <h5 className="fw-bold">Luxurious Rooms</h5>
                <p>
                  Elegant rooms with all modern facilities and a relaxing
                  ambience.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="highlight-card">
              <Card.Body>
                <h5 className="fw-bold">Resort Facilities</h5>
                <p>
                  Swimming pool, indoor games, kids play area & more for all
                  ages.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="highlight-card">
              <Card.Body>
                <h5 className="fw-bold">Stay & Play Packages</h5>
                <p>
                  Special combo offers for rides + stay, perfect for families &
                  groups.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 3. Room Types */}
        <h3 className="fw-bold text-center mb-4" data-aos="fade-right">
          🏡 Accommodation Options
        </h3>
        <Row className="mb-5">
          <Col md={6} data-aos="fade-right">
            <Card className="mb-4">
              <Card.Img
                src="/images/deluxe-room.png"
                alt="Deluxe Room"
                className="img-fixed"
              />
              <Card.Body>
                <Card.Title>Deluxe Room</Card.Title>
                <Card.Text>
                  Spacious AC room with King-sized bed, LED TV, Free Wi-Fi,
                  Mini-fridge.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} data-aos="fade-left">
            <Card className="mb-4">
              <Card.Img
                src="/images/family-cottage.png"
                alt="Family Cottage"
                className="img-fixed"
              />
              <Card.Body>
                <Card.Title>Family Cottage</Card.Title>
                <Card.Text>
                  Perfect for families, with two bedrooms, living area, private
                  garden.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 4. Booking Info */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h4 className="fw-bold mb-3">Ready to Relax?</h4>
          <p className="mb-3">
            To book your stay, call us at <strong>+91 98765 43210</strong> or
            email <strong>stay@skywonderland.com</strong>
          </p>
          <Button variant="primary" size="lg" href="/tickets/packages">
            Book a Package
          </Button>
        </div>
      </Container>

      {/* Embedded Styles */}
      <style>{`
        .resort-hero {
          background: linear-gradient(135deg,rgb(103, 143, 127),rgb(73, 84, 99));
        }

        .highlight-card {
          background: #ffffff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          padding: 20px;
        }

        .highlight-card h5 {
          color: #0072ff;
        }

        .img-fixed {
          height: 550px;
          width: 100%;
          object-fit: cover;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ResortStay;
