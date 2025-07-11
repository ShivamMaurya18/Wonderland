import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSky = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const styles = {
    page: {
      background: "#f8f9fa",
      paddingTop: "100px",
      fontFamily: "Arial, sans-serif",
    },
    hero: {
      padding: "60px 20px 40px",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "50px",
      fontWeight: "bold",
      background: "linear-gradient(-45deg, #ff6b6b, #f9d423, #1e90ff, #8e44ad)",
      backgroundSize: "400% 400%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "gradientShift 8s ease infinite",
    },
    heroSub: {
      fontSize: "1.2rem",
      fontStyle: "italic",
      color: "#555",
      marginTop: "10px",
    },
    heading: {
      fontFamily: "Georgia, serif",
      fontWeight: "bold",
      color: "#333",
    },
    paragraph: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: "1.6",
    },
    section: {
      marginTop: "60px",
      marginBottom: "60px",
    },
    aboutText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "30px",
    },
    card: {
      background: "#ffffff",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
      borderRadius: "16px",
      textAlign: "center",
      padding: "30px 20px",
      transition: "transform 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
    },
    cardIcon: {
      fontSize: "2rem",
      marginBottom: "10px",
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginBottom: "10px",
    },
    cardText: {
      color: "#555",
    },
  };

  return (
    <>
      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .gradient-animate {
            background: linear-gradient(-45deg, #ff6b6b, #f9d423, #1e90ff, #8e44ad);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 8s ease infinite;
          }

          .card-hover:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <Navbar />

      <div style={styles.page}>
        {/* Hero Section */}
        <div style={styles.hero} data-aos="fade-down">
          <h1 className="gradient-animate" style={styles.heroTitle}>
            WELCOME TO ASIA'S LARGEST THEME PARK
          </h1>
          <p style={styles.heroSub}>Where imagination meets thrill!</p>
        </div>

        {/* About Section */}
        <Container style={styles.section} data-aos="fade-up">
          <Row>
            <Col md={6}>
              <img
                src="/images/sky_about.jpg"
                alt="Sky Wonderland"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} style={styles.aboutText}>
              <h2 style={styles.heading}>
                “At Sky Wonderland, our dream is to create the most magical and
                unforgettable moments of your life!”
              </h2>
              <p style={styles.paragraph}>
                From jaw-dropping rides sourced globally to enchanting
                experiences for every age group, Sky Wonderland is your one-stop
                destination for day-long excitement, discovery, and joy. Step
                into a world where every corner is designed to entertain,
                inspire, and create lifelong memories—all at family-friendly
                prices.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Mission & Vision */}
        <Container style={styles.section} data-aos="fade-up">
          <h2 className="text-center mb-5" style={styles.heading}>
            Our Vision & Mission
          </h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="card-hover" style={styles.card}>
                <div style={styles.cardIcon}>🎯</div>
                <div style={styles.cardTitle}>Our Mission</div>
                <p style={styles.cardText}>
                  Deliver safe, fun-filled, and awe-inspiring experiences for
                  every visitor—every day.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="card-hover" style={styles.card}>
                <div style={styles.cardIcon}>🌟</div>
                <div style={styles.cardTitle}>Our Vision</div>
                <p style={styles.cardText}>
                  To be India’s most beloved destination for entertainment,
                  discovery, and joy.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Why Choose Us */}
        <Container style={styles.section} data-aos="zoom-in">
          <h2 className="text-center" style={styles.heading}>
            Why Choose Sky Wonderland?
          </h2>
          <Row className="mt-4">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 card-hover">
                <Card.Body className="text-center">
                  <h4 style={styles.cardIcon}>🎢</h4>
                  <Card.Title>Thrilling Rides</Card.Title>
                  <Card.Text>
                    Adrenaline-packed attractions for all ages.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 card-hover">
                <Card.Body className="text-center">
                  <h4 style={styles.cardIcon}>🍭</h4>
                  <Card.Title>Magical Atmosphere</Card.Title>
                  <Card.Text>
                    Whimsical worlds and dazzling events every day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 card-hover">
                <Card.Body className="text-center">
                  <h4 style={styles.cardIcon}>👨‍👩‍👧‍👦</h4>
                  <Card.Title>Family First</Card.Title>
                  <Card.Text>
                    Safe zones, family rides, and unforgettable bonding.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutSky;
