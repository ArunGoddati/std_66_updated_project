import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="sidebar p-3">
      <div className="logo mb-4">
        <h5>Mindease</h5>
      </div>
      <Nav className="flex-column">
        <Nav.Link href="#"><i className="bi bi-house"></i> Home</Nav.Link>
        <Nav.Link href="#"><i className="bi bi-calendar-event"></i> Appointments</Nav.Link>
        <Nav.Link href="#"><i className="bi bi-people"></i> Patient List</Nav.Link>
        <Nav.Link href="#"><i className="bi bi-chat-dots"></i> Messages <span className="badge bg-dark">5</span></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-journal"></i> Resources</Nav.Link>
        <Nav.Link href="#"><i className="bi bi-credit-card"></i> Billing</Nav.Link>
      </Nav>
      <div className="premium mt-auto p-3">
        <p>Join Premium<br />$9.99/m</p>
        <button className="btn btn-dark btn-sm">Explore plans</button>
      </div>
    </div>
  );
}

export default Sidebar;
