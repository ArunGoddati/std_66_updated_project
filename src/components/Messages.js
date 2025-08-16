import React from 'react';
import { Card, Image } from 'react-bootstrap';

const items = [
  { name: 'Alice Brown', time: '11:01', text: 'Can we try breathing exer…', img: 'https://i.pravatar.cc/48?img=47' },
  { name: 'Emily Carter', time: '09:18', text: "Yes, I'll add them.", img: 'https://i.pravatar.cc/48?img=12' },
  { name: 'Michael Lee', time: '09:18', text: 'Thank you for your help!', img: 'https://i.pravatar.cc/48?img=33' },
];

export default function Messages() {
  return (
    <Card className="panel shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Recent Messages</h6>
        </div>
        <div className="d-flex flex-column gap-2">
          {items.map((m, idx) => (
            <div key={idx} className="d-flex align-items-center gap-3 bg-light rounded-4 p-2 px-3">
              <Image roundedCircle src={m.img} width={44} height={44} alt={m.name} />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <strong>{m.name}</strong>
                  <small className="text-muted">{m.time}</small>
                </div>
                <div className="text-muted small text-truncate">{m.text}</div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}