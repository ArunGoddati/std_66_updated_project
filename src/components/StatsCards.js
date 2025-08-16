import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function StatsCards() {
  const cards = [
    { title: 'Unpaid invoices', amount: '$150', bg: '#f4de86' },
    { title: 'Account balance', amount: '$250', bg: '#cfe0f5' },
    { title: 'Pending', amount: '$500', bg: '#d9cdea' },
  ];

  return (
    <Row className="g-3 mb-1">
      {cards.map((c, i) => (
        <Col md={4} key={i}>
          <Card className="stat-card shadow-sm border-0" style={{ backgroundColor: c.bg }}>
            <Card.Body className="py-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="text-muted small">{c.title}</div>
                  <div className="fs-3 fw-semibold mt-1">{c.amount}</div>
                </div>
                <span className="btn btn-light btn-sm rounded-circle"><i className="bi bi-database"></i></span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}