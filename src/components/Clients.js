import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export default function Clients() {
  const avatars = [
    'https://i.pravatar.cc/40?img=5',
    'https://i.pravatar.cc/40?img=15',
    'https://i.pravatar.cc/40?img=25',
  ];

  return (
    <Card className="panel shadow-sm border-0 h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">My clients</h6>
          <Button size="sm" variant="light" className="rounded-pill">View all</Button>
        </div>
        <div className="fs-1 fw-bold">18</div>
        <hr/>
        <div className="text-muted small mb-3">
          <span className="badge rounded-pill text-bg-light me-2">12</span>
          sessions this week
        </div>
        <hr/>
        <div className="d-flex align-items-center gap-2">
          {avatars.map((a, i) => (
            <Image key={i} roundedCircle src={a} width={36} height={36} alt="client" />
          ))}
          <Button className="ms-auto rounded-circle" variant="dark" style={{ width: 38, height: 38, padding: 0 }}>
            +16
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}