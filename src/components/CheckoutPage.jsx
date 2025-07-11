import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [], selectedDate = "" } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contact, email, address, city, state, payment } = formData;

    if (
      !name ||
      !contact ||
      !email ||
      !address ||
      !city ||
      !state ||
      !payment
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const bookingDetails = {
      ...formData,
      bookingDate: formattedDate,
      arrivalTime: formattedTime,
      selectedDate,
      cart,
    };

    navigate("/tickets/confirmation", { state: bookingDetails });
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "50px",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
      }}
    >
      <Container style={{ maxWidth: "650px" }}>
        <Card className="shadow-lg border-0 p-4 rounded-4">
          <h3 className="text-center text-primary fw-bold mb-4">
            Checkout Details
          </h3>

          <Form onSubmit={handleSubmit}>
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                placeholder: "Enter full name",
              },
              {
                label: "Contact Number",
                name: "contact",
                type: "tel",
                placeholder: "Enter contact number",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter email address",
              },
              {
                label: "Address",
                name: "address",
                type: "text",
                placeholder: "Enter address",
              },
              {
                label: "City",
                name: "city",
                type: "text",
                placeholder: "Enter city",
              },
              {
                label: "State",
                name: "state",
                type: "text",
                placeholder: "Enter state",
              },
            ].map((field, idx) => (
              <Form.Group className="mb-3" key={idx}>
                <Form.Label className="fw-semibold">
                  {field.label} <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ))}

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Country <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" value="India" readOnly />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">
                Payment Method <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                required
              >
                <option value="">Select payment method</option>
                <option value="upi">UPI</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="cod">Cash on Arrival</option>
              </Form.Select>
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="px-5 py-2 fw-bold rounded-pill"
                style={{ fontSize: "1.1rem" }}
              >
                Confirm Booking
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default CheckoutPage;
