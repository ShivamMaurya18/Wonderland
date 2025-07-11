import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Style/AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <img
              src="/images/About.jpg"
              alt="SKY Wonderland Statue"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <p className="text-uppercase small text-muted mb-2">
              Gujarat's Largest Theme Park
            </p>
            <h2 className="fw-bold mb-3" style={{ color: "#6b0f1a" }}>
              SKY WONDERLAND
            </h2>
            <p className="text-secondary lead">
              SKY WONDERLAND is an award-winning theme park on the outskirts of
              Ahmedabad. A government project spread over 70 acres of land. We
              have some of the best Rides & Attractions from all around the
              world. A place where you can spend the whole day and explore with
              your family.
            </p>
            <Button className="custom-readmore-btn mt-3 px-4 py-2">
              READ MORE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
