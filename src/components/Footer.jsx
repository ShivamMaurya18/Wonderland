import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Style/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "#d6336c" }}>
              SKY WONDERLAND
            </h5>
            <p>
              Gujarat’s largest theme park with thrilling rides, family fun, and
              unforgettable memories.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-white">
                <FaYoutube />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about-sky"
                  className="text-decoration-none text-light"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about/policy"
                  className="text-decoration-none text-light"
                >
                  Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p>
              <FaMapMarkerAlt className="me-2" /> 123 Sky Wonderland Ave,
              Fantasy City, India
            </p>
            <p>
              <FaPhoneAlt className="me-2" /> +91 12345 67890
            </p>
            <p>
              <FaEnvelope className="me-2" /> contact@skywonderland.in
            </p>
          </Col>
        </Row>

        <hr className="bg-white" />

        <Row className="text-center">
          <Col>
            <small>
              &copy; {new Date().getFullYear()} SKY Wonderland. All rights
              reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
