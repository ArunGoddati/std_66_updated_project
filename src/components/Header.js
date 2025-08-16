import React from 'react';
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center px-3 px-lg-4 py-3">
      <div>
        <h4 className="mb-1">Welcome back, Emily!</h4>
        <p className="text-muted mb-0">Easily manage your upcoming sessions and track client progress</p>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Button variant="light" className="rounded-circle icon-btn"><i className="bi bi-question-circle"></i></Button>
        <Button variant="light" className="rounded-circle icon-btn position-relative">
          <i className="bi bi-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
        </Button>
      </div>
    </header>
  );
}