import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Style/StatsSection.css";

const stats = [
  {
    icon: "/icons/food.png",
    value: "5+",
    label: "Food Court",
  },
  {
    icon: "/icons/ride.png",
    value: "20+",
    label: "Rides",
  },
  {
    icon: "/icons/ticket.png",
    value: "10K+",
    label: "Tickets Sold",
  },
  {
    icon: "/icons/mapzone.png",
    value: "70+",
    label: "Acres",
  },
];

const StatsSection = () => {
  return (
    <div className="stats-section py-3 mt-5">
      <Container>
        <Row className="text-center g-4">
          {stats.map((stat, index) => (
            <Col md={3} sm={6} xs={6} key={index}>
              <img
                src={stat.icon}
                alt={stat.label}
                className="mb-3"
                style={{ width: "90px", height: "90px" }}
              />
              <h2 className="fw-bold text-white">{stat.value}</h2>
              <p className="text-light mb-0">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;
