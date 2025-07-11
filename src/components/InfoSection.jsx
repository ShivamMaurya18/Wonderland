import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Style/InfoSection.css";

const infoCards = [
  {
    id: "01",
    icon: "/icons/Money.png", // Replace with your own image path or icon
    title: "Packages",
    text: "We would like to present our New Packages. Choose from a wide range of packages that best suits to make your visit at SKY WONDERLAND most memorable.",
    linkText: "Book Now",
    linkHref: "#",
  },
  {
    id: "02",
    icon: "/icons/Calendar.png",
    title: "Group & Event Booking",
    text: "From Birthdays, Family Occasions to Corporate Events and more. If you have a group with something to celebrate, SKY WONDERLAND has everything you need to make it more magical.",
    linkText: "Read More",
    linkHref: "#",
  },
  {
    id: "03",
    icon: "/icons/Map.png",
    title: "Park Map",
    text: "Browse everything SKY WONDERLAND has to offer with this easy-to-use interactive map. Click, zoom and explore to find your favorite rides, shows, attractions, dining and more.",
    linkText: "Read More",
    linkHref: "#",
  },
];

const InfoSection = () => {
  return (
    <div className="info-section py-3 text-center">
      <p className="text-uppercase small text-muted mb-2">Info</p>
      <h2 className="display-6 fw-bold mb-5">
        OUR PACKAGES AND <span className="text-danger">MAP</span>
      </h2>

      <Container>
        <Row className="g-4">
          {infoCards.map((card, i) => (
            <Col md={4} key={i}>
              <Card className="info-card h-100 p-4 border-0 shadow-sm position-relative">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="info-icon mx-auto mb-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-secondary small">{card.text}</p>
                <a href={card.linkHref} className="fw-semibold text-dark">
                  {card.linkText}
                </a>
                <div className="card-number">{card.id}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
