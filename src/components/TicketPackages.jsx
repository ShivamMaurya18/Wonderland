import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const packages = [
  {
    title: "Fast Track Package",
    img: "/images/fasttrack.png",
    desc: "In this time period, We're offering single time entry on each and every rides",
    priceAdult: 2000,
    priceKid: 1400,
  },
  {
    title: "Gold Crown Package",
    img: "/images/gold-crown.png",
    desc: "One time access to all Rides & Attractions. Includes Vrundavan Garden.",
    priceAdult: 1200,
    priceKid: 800,
  },
  {
    title: "Gold Package",
    img: "/images/gold.png",
    desc: "One time access to all Rides & Attractions. Not Included: AC Indoor Game zone (Trampoline Park & Kids Soft Play Area).",
    priceAdult: 1000,
    priceKid: 700,
  },
  {
    title: "Silver Crown Package",
    img: "/images/silver-crown.png",
    desc: "Includes Aapnu Gom, Vrundavan Garden & Selfie Zone. Any four Rides Allowed (Excludes Premium).",
    priceAdult: 500,
    priceKid: 400,
  },
  {
    title: "Park Visit",
    img: "/images/visit.png",
    desc: "One time visit in park. No ride and attractions allowed. Limited access to park.",
    priceAdult: 150,
    priceKid: 55,
  },
];

const TicketPackages = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showPackage, setShowPackage] = useState(false);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [quantityAdult, setQuantityAdult] = useState(1);
  const [quantityKid, setQuantityKid] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setShowPackage(true);
  };

  const today = new Date().toISOString().split("T")[0];

  const openCartModal = (pack) => {
    setSelectedPackage(pack);
    setQuantityAdult(1);
    setQuantityKid(0);
    setShowModal(true);
  };

  const addToCart = () => {
    const existingIndex = cart.findIndex(
      (item) => item.title === selectedPackage.title
    );

    const newItem = {
      ...selectedPackage,
      quantityAdult,
      quantityKid,
    };

    let updatedCart = [...cart];
    if (existingIndex >= 0) {
      updatedCart[existingIndex] = newItem;
    } else {
      updatedCart.push(newItem);
    }

    setCart(updatedCart);
    setShowModal(false);
  };

  const removeFromCart = (title) => {
    const updatedCart = cart.filter((item) => item.title !== title);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart, selectedDate } });
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        backgroundColor: "#f5f8ff",
        minHeight: "100vh",
      }}
    >
      <Container className="py-4">
        <h2 className="text-center fw-bold text-danger" data-aos="fade-down">
          🎟️ Select Your Visit Date
        </h2>
        <p className="text-center text-muted mb-4" data-aos="fade-up">
          Plan your fun-filled day at the park! Pick your preferred date below
          👇
        </p>
        <div className="text-center my-3" data-aos="zoom-in">
          <Form.Control
            type="date"
            min={today}
            value={selectedDate}
            onChange={handleDateChange}
            style={{
              maxWidth: "320px",
              margin: "0 auto",
              fontSize: "1.1rem",
              padding: "12px",
              borderRadius: "12px",
              border: "2px solid #0d6efd",
              boxShadow: "0 4px 8px rgba(13, 110, 253, 0.15)",
            }}
          />
        </div>

        {!showPackage && (
          <div
            className="mx-auto mt-5 px-4 py-3 rounded-4"
            style={{
              maxWidth: "600px",
              backgroundColor: "#e9f5ff",
              borderLeft: "5px solid #0d6efd",
            }}
            data-aos="fade-up"
          >
            <h5 className="fw-bold mb-3 text-primary">
              🎯 Ticket Rules & Info
            </h5>
            <ul className="ticket-info text-start mb-0">
              <li>
                <strong>Adult Ticket:</strong> Height above 48″ (4ft)
              </li>
              <li>
                <strong>Kids Ticket:</strong> Between 32″ (2.7ft) and 48″ (4ft)
              </li>
              <li>
                <strong>Note:</strong> Below 32″ – Free entry (No rides)
              </li>
            </ul>
          </div>
        )}

        {showPackage &&
          packages.map((pack, index) => (
            <Card
              key={index}
              className="shadow-lg p-4 border-0 mb-4 package-card"
              data-aos="fade-up"
            >
              <Row>
                <Col md={4} className="text-center mb-3 mb-md-0">
                  <img
                    src={pack.img}
                    alt={pack.title}
                    className="img-fluid rounded"
                    style={{ maxHeight: "220px", objectFit: "cover" }}
                  />
                </Col>
                <Col md={8}>
                  <h4 className="fw-bold text-primary">{pack.title}</h4>
                  <p>{pack.desc}</p>
                  <p className="text-danger">
                    Note: Height between 32″ to 48″ = kid’s ticket, above 48″ =
                    adult ticket.
                  </p>
                  <h5 className="fw-bold mt-4">
                    ₹{pack.priceAdult} <small>/Adult</small>{" "}
                    &nbsp;&nbsp;|&nbsp;&nbsp; ₹{pack.priceKid}{" "}
                    <small>/Kids</small> &nbsp;&nbsp;
                    <span className="text-muted">Incl. all taxes</span>
                  </h5>
                  <Button
                    variant="primary"
                    className="mt-3 px-4 rounded-pill"
                    onClick={() => openCartModal(pack)}
                  >
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}

        {cart.length > 0 && (
          <Card className="mt-5 p-4 shadow">
            <h4 className="fw-bold mb-3">Cart Summary</h4>
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-2"
              >
                <div>
                  <strong>{item.title}</strong>
                  <div>
                    Adults: {item.quantityAdult} × ₹{item.priceAdult} = ₹
                    {item.quantityAdult * item.priceAdult}
                  </div>
                  <div>
                    Kids: {item.quantityKid} × ₹{item.priceKid} = ₹
                    {item.quantityKid * item.priceKid}
                  </div>
                </div>
                <div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => openCartModal(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.title)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h5 className="m-0">
                Total: ₹
                {cart.reduce(
                  (total, item) =>
                    total +
                    item.quantityAdult * item.priceAdult +
                    item.quantityKid * item.priceKid,
                  0
                )}
              </h5>
              <Button variant="success" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </Card>
        )}
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedPackage?.title}</h5>
          <Form.Group className="my-3">
            <Form.Label>Adult Tickets</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={quantityAdult}
              onChange={(e) => setQuantityAdult(parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kid Tickets</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={quantityKid}
              onChange={(e) => setQuantityKid(parseInt(e.target.value))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addToCart}>
            Confirm & Add
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .ticket-info {
          list-style: none;
          padding-left: 0;
          font-size: 1.05rem;
        }

        .ticket-info li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 24px;
        }

        .ticket-info li::before {
          content: "✔️";
          position: absolute;
          left: 0;
          top: 0;
        }

        .package-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .package-card h4 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TicketPackages;
