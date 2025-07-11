import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Style/Navbar.css"; // Keep this for font and optional overrides

const CustomNavbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const navItems = [
    {
      type: "link",
      title: "Resort & Stay",
      href: "/resort",
    },
    {
      type: "dropdown",
      title: "Tickets",
      id: "tickets-dropdown",
      items: [
        { text: "Packages", href: "/tickets/packages" },
        { text: "Group & Event Booking", href: "/tickets/group-booking" },
      ],
    },
    {
      type: "dropdown",
      title: "Rides & Attractions",
      id: "rides-dropdown",
      items: [
        { text: "All Rides", href: "/rides/all" },
        { text: "Park Attractions", href: "/rides/attractions" },
      ],
    },
    {
      type: "dropdown",
      title: "About",
      id: "about-dropdown",
      items: [
        { text: "About SKY", href: "/about-sky" },
        { text: "Rules & Regulations", href: "/about/rules" },
        { text: "Online Booking Policy", href: "/about/policy" },
        { text: "Reach Us", href: "/about/contact" },
      ],
    },
  ];

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{
        background: "#1a1a1a", // lighter black
        borderBottom: "1px solid #444",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span style={brandStyle}>🏰 𝓢𝓚𝓨 𝓦𝓞𝓝𝓓𝓔𝓡𝓛𝓐𝓝𝓓</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="px-3 fw-semibold text-white nav-link"
              style={linkStyle}
            >
              Home
            </Nav.Link>

            {navItems.map((item, idx) =>
              item.type === "link" ? (
                <Nav.Link
                  key={idx}
                  as={NavLink}
                  to={item.href}
                  className="px-3 fw-semibold text-white nav-link"
                  style={linkStyle}
                >
                  {item.title}
                </Nav.Link>
              ) : (
                <NavDropdown
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  className="px-3 fw-semibold nav-link-custom"
                  show={hoveredDropdown === item.id}
                  onMouseEnter={() => setHoveredDropdown(item.id)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                  menuVariant="light"
                >
                  {item.items.map(({ text, href }, i) => (
                    <NavDropdown.Item
                      as={Link}
                      to={href}
                      key={i}
                      style={dropdownItemStyle}
                    >
                      {text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

// --- Styling ---
const brandStyle = {
  fontFamily: "'Pacifico', cursive",
  fontSize: "1.6rem",
  color: "#fff",
  letterSpacing: "1px",
};

const linkStyle = {
  color: "#fff",
  transition: "0.3s",
};

const dropdownItemStyle = {
  fontWeight: "500",
  padding: "10px 20px",
  transition: "all 0.3s",
};
