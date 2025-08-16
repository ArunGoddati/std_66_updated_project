import React from "react";
import {Image, Table, Badge, Dropdown } from "react-bootstrap";

export default function SessionRequests() {
  const requests = [
    { name: "James Patel", time: "Today, 15:00", type: "Gestalt Therapy", status: "Approved", url:"https://i.pravatar.cc/40?img=5" },
    { name: "Hannah Collins", time: "Tomorrow, 18:30", type: "CBT", status: "Pending", url:"https://i.pravatar.cc/40?img=15" },
    { name: "Sara Kim", time: "Fri, 10:00", type: "ACT Session", status: "Declined", url:"https://i.pravatar.cc/40?img=25" }
  ];

  const statusColors = {
    Approved: "success",
    Pending: "warning",
    Declined: "danger"
  };

  return (
    <div>
      <h5>Session Requests</h5>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Client</th>
            <th>Requested Time</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r, idx) => (
            <tr key={idx}>
              <td>
                <Image roundedCircle src={r.url} width={36} height={36} alt="client"/>
                {r.name}</td>
              <td>{r.time}</td>
              <td>{r.type}</td>
              <td>
                <Badge bg={statusColors[r.status]} className="me-2">{r.status}</Badge>
                <Dropdown size="sm" drop="end">
                  <Dropdown.Toggle variant="light" />
                  <Dropdown.Menu>
                    <Dropdown.Item>Approve</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Decline</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
