import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTicketAlt,
  FaUtensils,
  FaSuitcase,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdAttractions } from "react-icons/md";

const Rules = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const rulesData = [
    {
      title: "Entry Tickets",
      icon: <FaTicketAlt size={28} className="text-danger" />,
      bg: "#ffe8e8",
      list: [
        "Ticket includes entry fees and access to all rides.",
        "Additional charges apply for paid attractions.",
        "No refunds on tickets once sold.",
        "Ticket resale outside the counter is prohibited.",
        "No re-entry on used tickets.",
      ],
    },
    {
      title: "Rides",
      icon: <MdAttractions size={28} className="text-primary" />,
      bg: "#e6f2ff",
      list: [
        "Read ride instructions carefully before use.",
        "Not recommended for heart patients, pregnant women, etc.",
        "Follow all height/weight restrictions.",
        "Rides may be temporarily closed for maintenance.",
        "Use designated entry/exit points and follow queues.",
      ],
    },
    {
      title: "Food & Beverages",
      icon: <FaUtensils size={28} className="text-success" />,
      bg: "#e8ffe8",
      list: [
        "Food cards available at ticket counters.",
        "No outside food or drink allowed.",
        "Alcohol strictly prohibited on premises.",
      ],
    },
    {
      title: "Baggage Assistance",
      icon: <FaSuitcase size={28} className="text-warning" />,
      bg: "#fff9e6",
      list: [
        "Use the baggage counter for your belongings.",
        "Do not leave valuables unattended.",
        "Lockers available for hire.",
      ],
    },
    {
      title: "General Notes",
      icon: <FaExclamationTriangle size={28} className="text-dark" />,
      bg: "#f0f0f0",
      list: [
        "Wheelchairs and strollers available on request.",
        "Baby care centers available in specific areas.",
        "Medical centers available inside the park.",
        "We welcome your feedback — visit ticket counter or control tower.",
        "Management reserves all admission rights.",
      ],
    },
  ];

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff5e57",
    marginBottom: "50px",
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
      }}
    >
      <Container>
        <h2 style={titleStyle} data-aos="zoom-in">
          🎠 Rules & Regulations
        </h2>

        <Row>
          {rulesData.map((section, idx) => (
            <Col
              md={6}
              lg={4}
              key={idx}
              {...(idx < 3 ? { "data-aos": "fade-up" } : {})}
              className="mb-4"
            >
              <Card
                style={{
                  background: section.bg,
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
                className="h-100 rule-card"
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {section.icon}
                    <h5 className="ms-2 fw-bold mb-0">{section.title}</h5>
                  </div>
                  <ul className="ps-3">
                    {section.list.map((item, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Embedded CSS styles */}
      <style>{`
        .rule-card:hover {
          transform: translateY(-6px);
        }
      `}</style>
    </div>
  );
};

export default Rules;
