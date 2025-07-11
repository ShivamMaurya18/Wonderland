import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TicketConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ticketRef = useRef();
  const [ticketID] = useState(
    "TKT" + Math.floor(100000 + Math.random() * 900000)
  );
  const [remainingTime, setRemainingTime] = useState(600);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!state) return;
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 600000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [state, navigate]);

  useEffect(() => {
    if (remainingTime === 60) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  }, [remainingTime]);

  if (!state) return <p>No ticket data found.</p>;

  const {
    name = "",
    contact = "",
    email = "",
    payment = "",
    bookingDate = "",
    arrivalTime = "",
    selectedDate = "",
    cart = [],
  } = state || {};

  const timeOfVisit = "10:00 AM";

  const generatePDF = async () => {
    const input = ticketRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${ticketID}_ticket.pdf`);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6fb",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      <div
        ref={ticketRef}
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 0 25px rgba(0,0,0,0.1)",
          position: "relative",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "10%",
            transform: "rotate(-30deg)",
            fontSize: "5rem",
            color: "#000",
            opacity: 0.06,
            zIndex: 0,
            fontWeight: "bold",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          THEME PARK
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#007bff",
            zIndex: 1,
            position: "relative",
          }}
        >
          🎟️ Ticket Confirmation
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "30px",
            zIndex: 1,
            position: "relative",
          }}
        >
          {/* Left - Personal Info */}
          <div style={{ flex: "1", minWidth: "300px", paddingRight: "20px" }}>
            <p>
              <strong>👤 Name:</strong> {name}
            </p>
            <p>
              <strong>📞 Contact:</strong> {contact}
            </p>
            <p>
              <strong>📧 Email:</strong> {email}
            </p>
            <p>
              <strong>💳 Payment Method:</strong> {payment}
            </p>
          </div>

          {/* Right - Booking Info */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <p>
              <strong>📅 Date of Visit:</strong> {selectedDate}
            </p>
            <p>
              <strong>🕒 Booking Date:</strong> {bookingDate} ({arrivalTime})
            </p>
            <p>
              <strong>🕘 Time of Visit:</strong> {timeOfVisit}
            </p>
            <p>
              <strong>🎫 Ticket ID:</strong> {ticketID}
            </p>
          </div>
        </div>

        {/* Ticket Details */}
        <div style={{ marginTop: "40px" }}>
          <h4 style={{ color: "#343a40" }}>🎫 Ticket Details</h4>
          {cart.map((item, index) => (
            <div key={index} style={{ marginTop: "15px" }}>
              <p>
                <strong>🎟 Package:</strong> {item.title}
              </p>
              <p>
                <strong>👨‍👩‍👧 Adults:</strong> {item.quantityAdult}
              </p>
              <p>
                <strong>🧒 Kids:</strong> {item.quantityKid}
              </p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            paddingTop: "20px",
            borderTop: "1px dashed #bbb",
          }}
        >
          <QRCode
            value={`TicketID: ${ticketID} | Name: ${name} | Date: ${selectedDate}`}
            size={160}
          />
          <p style={{ marginTop: "10px", color: "#666" }}>
            Show this QR code at the entrance.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={generatePDF}
          className="btn btn-primary px-4 py-2 fw-bold"
        >
          📄 Download PDF
        </button>
      </div>

      <p className="text-center mt-3 text-muted">
        ⏳ Redirecting to <strong>Home</strong> in{" "}
        <strong>{formatTime(remainingTime)}</strong>
      </p>

      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#ffcc00",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          ⚠️ You will be redirected to home in 1 minute.
        </div>
      )}
    </div>
  );
};

export default TicketConfirmation;
