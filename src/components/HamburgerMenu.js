import React, { useState } from 'react';
import { Nav, Navbar, Button, Collapse, Container } from 'react-bootstrap';
import "./HamburgerMenu.css";

const CollapsibleNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger_menu">
      <Collapse in={open}>
        <div className="bg-white p-4 text-dark shadow-sm" id="navbarToggleExternalContent">
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-truncate"><i className="bi bi-house"></i> Home</Nav.Link>
            <Nav.Link href="#" className="text-truncate"><i className="bi bi-calendar-event"></i> Appointments</Nav.Link>
            <Nav.Link href="#" className="text-truncate"><i className="bi bi-people"></i> Patient List</Nav.Link>
            <Nav.Link href="#" className="text-truncate">
              <i className="bi bi-chat-dots"></i> Messages <span className="badge bg-dark">5</span>
            </Nav.Link>
            <Nav.Link href="#" className="text-truncate"><i className="bi bi-journal"></i> Resources</Nav.Link>
            <Nav.Link href="#" className="text-truncate"><i className="bi bi-credit-card"></i> Billing</Nav.Link>
          </Nav>
        </div>
      </Collapse>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container className='d-flex justify-content-between fluid'>
          <h5 className="h4 text-white">Mindease</h5>
          <Button
            variant="dark"
            onClick={() => setOpen(!open)}
            aria-controls="navbarToggleExternalContent"
            aria-expanded={open}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default CollapsibleNavbar;
