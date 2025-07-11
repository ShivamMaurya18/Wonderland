import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaBan,
  FaTicketAlt,
  FaChild,
  FaLock,
} from "react-icons/fa";

const BookingPolicy = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const policies = [
    {
      text: "Please carry your online booking confirmation acknowledgement receipt (Hard/Softcopy) at online booking counter.",
      icon: <FaTicketAlt className="text-primary" />,
    },
    {
      text: "This Wrist band is valid for a single entry for the same day and it is non-transferable, non-exchangeable, non-refundable, non-redeemable for cash & non-replaceable.",
      icon: <FaLock className="text-warning" />,
    },
    {
      text: "On purchase of this Wrist band the holder confirms that she/he has read, understood and agreed to all the terms and conditions in the park and voluntarily assumed all the risks.",
      icon: <FaCheckCircle className="text-success" />,
    },
    {
      text: "SKY Wonderland will not be responsible for any loss, damage or injury sustained by the band holder, and persons accompanying him, while in the park.",
      icon: <FaExclamationCircle className="text-danger" />,
    },
    {
      text: "Visitors have to wear wrist band and display all the time throughout the valid date of visit. (Loose or damaged band will not be considered as valid entry).",
      icon: <FaTicketAlt className="text-primary" />,
    },
    {
      text: "Guests are requested to study various safety norms for all the rides and shows and adhere to them in terms of height, weight and medical conditions.",
      icon: <FaCheckCircle className="text-success" />,
    },
    {
      text: "Wrist bands packages, rates and governing conditions are subject to change without notice.",
      icon: <FaExclamationCircle className="text-warning" />,
    },
    {
      text: "SKY Wonderland reserves the right to refuse entry to holder of this wrist band for violations of park rules, illegal activity or failure to comply with any security measures.",
      icon: <FaExclamationCircle className="text-danger" />,
    },
    {
      text: "The following articles are strictly prohibited: Eatables (including guthka, Pan-Masala, Chewing Gum, Chocolate, Chips etc.), Cigarette, Lighter, Knife, Match-box, Firearms, Electronic gadgets (GoPro, Selfie stick), and all kinds of inflammable objects.",
      icon: <FaBan className="text-danger" />,
    },
    {
      text: 'Free entry for children below 32" height. (Entry permitted to park. Rides and attraction entry will not be allowed).',
      icon: <FaChild className="text-info" />,
    },
    {
      text: "Kindly retain the wrist bands, until you leave the premises of park.",
      icon: <FaTicketAlt className="text-primary" />,
    },
    {
      text: "Some Rides & Attractions may be on a rotation basis or may be closed at any time, without notice at the discretion of park management or due to safety concerns.",
      icon: <FaExclamationCircle className="text-warning" />,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fff1eb, #ace0f9)",
        paddingTop: "100px",
        paddingBottom: "60px",
        minHeight: "100vh",
      }}
    >
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          style={{ fontSize: "3rem", color: "#004d61" }}
          data-aos="zoom-in"
        >
          📝 Online Booking Terms & Conditions
        </h2>

        <Card
          className="shadow-lg border-0 mx-auto"
          style={{
            maxWidth: "900px",
            backgroundColor: "#ffffffee",
            borderRadius: "16px",
          }}
          data-aos="fade-up"
        >
          <Card.Body>
            <ul className="list-unstyled ps-2">
              {policies.map((point, index) => (
                <li
                  key={index}
                  className="mb-3 d-flex"
                  style={{ lineHeight: "1.6", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      minWidth: "26px",
                      marginTop: "4px",
                      fontSize: "1.1rem",
                    }}
                  >
                    {point.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "1.05rem",
                      marginLeft: "10px",
                      color: "#333",
                    }}
                  >
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BookingPolicy;
