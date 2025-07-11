import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

const GroupEventBooking = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ paddingTop: "100px", background: "#f4f9ff" }}>
      {/* Hero */}
      <div className="text-center py-5">
        <h1
          className="fw-bold display-4"
          style={{
            background: "linear-gradient(to right, #00b4db, #0083b0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ✨ Group & Event Bookings
        </h1>
        <p className="lead text-muted">
          Make your celebrations magical at Sky Wonderland!
        </p>
      </div>

      {/* Booking Options */}
      <Container className="my-5" data-aos="fade-up">
        <h3
          className="text-center mb-4 fw-bold"
          style={{
            fontSize: "2rem",
            background: "linear-gradient(to right, #ff512f, #dd2476)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Booking Options
        </h3>
        <Row className="g-4">
          {[
            {
              title: "School Trips",
              desc: "Fun & safe experiences for students with meal & ride combos.",
            },
            {
              title: "Corporate Events",
              desc: "Team outings, meetings & more with custom packages.",
            },
            {
              title: "Birthday Parties",
              desc: "Celebrate with decorations, cake, and entertainment!",
            },
            {
              title: "Custom Packages",
              desc: "Tell us what you need, and we’ll create it!",
            },
          ].map((item, idx) => (
            <Col md={6} key={idx}>
              <Card className="h-100 shadow-lg border-0 card-hover">
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Choose Us */}
      <Container className="mb-5" data-aos="fade-up">
        <h3
          className="text-center mb-4 fw-bold"
          style={{
            fontSize: "2rem",
            background: "linear-gradient(to right, #56ab2f, #a8e063)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Choose Us?
        </h3>
        <Row className="g-4">
          {[
            {
              title: "Special Group Discounts",
              desc: "Save more with our exclusive pricing.",
              icon: "💰",
            },
            {
              title: "Event Coordinator",
              desc: "We handle planning so you enjoy the fun.",
              icon: "🎯",
            },
            {
              title: "Priority Entry",
              desc: "Skip lines and enter with ease.",
              icon: "🚗",
            },
            {
              title: "Custom Meals",
              desc: "Menus to suit every group taste.",
              icon: "🍽️",
            },
          ].map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="h-100 text-center shadow border-0 glass">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <Card.Title className="fw-bold mt-2">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Services Section - Unique Layout */}
      <Container fluid className="my-5 px-0" style={{ background: "#ffffff" }}>
        <Row className="g-0 align-items-center flex-md-row flex-column-reverse">
          {/* Left Side: Text Content (Centered) */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center text-center p-4"
          >
            <div>
              <h3
                className="fw-bold mb-3"
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(to right, #ff6a00, #ee0979)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Services Include
              </h3>
              <ul
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.9rem",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li>🎈 Thematic Decorations</li>
                <li>🤖 Mascot Meet & Greet</li>
                <li>🍱 Quality Customized Food</li>
                <li>🌳 Garden Celebration Spaces</li>
                <li>🎯 Fun Tailored Activities</li>
                <li>🎢 Full-day Ride Access</li>
              </ul>
            </div>
          </Col>

          {/* Right Side: Image */}
          <Col md={6}>
            <div
              style={{
                height: "100%",
                maxHeight: "400px",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/group-services.jpg" // Replace with your actual path
                alt="Group Events"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Inquiry Form */}
      <Container className="mb-5" data-aos="fade-up">
        <h3
          className="text-center mb-4 fw-bold"
          style={{
            fontSize: "2rem",
            background: "linear-gradient(to right, #fc466b, #3f5efb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Send Booking Inquiry
        </h3>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your full name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Mobile number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Event Type</Form.Label>
                <Form.Select>
                  <option>School Trip</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Group Size</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Approx. number of people"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Date of Visit</Form.Label>
                <Form.Control type="date" min={today} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Message / Special Requests</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <div className="text-center">
            <Button
              style={{ backgroundColor: "#5c1130", border: "none" }}
              size="lg"
            >
              Submit Inquiry
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default GroupEventBooking;
