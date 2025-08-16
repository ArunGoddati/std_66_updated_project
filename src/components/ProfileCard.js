import React from "react";
import { Card, Badge } from "react-bootstrap";

export default function ProfileCard() {
  return (
    <Card className="mb-4">
      <Card.Body className="text-center">
        <img
          src="https://i.pravatar.cc/48?img=12"
          alt="profile"
          className="rounded-circle mb-3"
        />
        <h5>Emily Carter</h5>
        <p className="text-muted">Clinical Psychologist</p>
        <Badge bg="success">Available</Badge>
      </Card.Body>
    </Card>
  );
}
