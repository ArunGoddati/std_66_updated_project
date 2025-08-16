import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import Messages from './components/Messages';
import Clients from './components/Clients';
import SessionRequests from './components/SessionRequests';
import ProfileCard from './components/ProfileCard';
import Calendar from './components/Calendar';
import Agenda from './components/Agenda';

function App() {
  return (
    <div className="app-container d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Header />
        <Container fluid className="py-3 content-wrap">
          <Row className="g-3">
            <Col lg={8}>
              <StatsCards />
              <Row className="g-3">
                <Col md={6}><Messages /></Col>
                <Col md={6}><Clients /></Col>
              </Row>
              <SessionRequests />
            </Col>
            <Col lg={4}>
              <ProfileCard />
              <Calendar />
              <Agenda />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;