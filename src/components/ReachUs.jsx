import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ReachUs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        paddingTop: "100px",
        paddingBottom: "60px",
        minHeight: "100vh",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#006064",
            marginBottom: "40px",
          }}
          data-aos="fade-down"
        >
          📍 Reach Us
        </h2>

        <Row className="mb-5">
          <Col md={4} data-aos="fade-up">
            <Card className="mb-4 shadow-sm border-0 h-100">
              <Card.Body>
                <FaMapMarkerAlt size={28} className="text-danger mb-2" />
                <h5 className="fw-bold">Address</h5>
                <p>123 Sky Wonderland Ave, Fantasy City, India</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="mb-4 shadow-sm border-0 h-100">
              <Card.Body>
                <FaPhoneAlt size={28} className="text-success mb-2" />
                <h5 className="fw-bold">Phone</h5>
                <p>+91 98765 43210</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="mb-4 shadow-sm border-0 h-100">
              <Card.Body>
                <FaEnvelope size={28} className="text-primary mb-2" />
                <h5 className="fw-bold">Email</h5>
                <p>contact@skywonderland.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row>
          <Col md={6} data-aos="fade-right">
            <h4 className="mb-3 fw-bold">Send Us a Message</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="info" type="submit" className="fw-bold">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Google Map Embed */}
          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <iframe
              title="Sky Wonderland Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21000276.765654657!2d82.38859619845151!3d28.633960872968633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750136386140!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Hover styles */}
      <style>{`
        .form-control:focus {
          border-color: #00bcd4;
          box-shadow: 0 0 0 0.2rem rgba(0,188,212,.25);
        }
      `}</style>
    </div>
  );
};

export default ReachUs;
