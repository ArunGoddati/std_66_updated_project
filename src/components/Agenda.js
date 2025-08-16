import React from "react";
import {Image, Card, ListGroup } from "react-bootstrap";
export default function Agenda() {
  const events = [
    { title: "Calm & Focus Group", time: "12:30-13:30", url:"https://i.pravatar.cc/40?img=5" },
    { title: "1:1 with T. Morgan", time: "14:30-15:15", url:"https://i.pravatar.cc/40?img=15" },
    { title: "1:1 with S. Green", time: "16:30-17:00", url:"https://i.pravatar.cc/40?img=25" },
    { title: "1:1 with M. Carter", time: "18:00-19:00", url:"https://i.pravatar.cc/48?img=47" }
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title>My agenda</Card.Title>
        <ListGroup variant="flush">
          {events.map((e, idx) => (
            <ListGroup.Item key={idx}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <strong>{e.title}</strong>
                  <div className="text-muted">{e.time}</div>
                </div>
                <Image roundedCircle src={e.url} width={36} height={36} alt="client" />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
