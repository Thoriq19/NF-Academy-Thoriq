import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink,
  Container, Row, Col, Card, CardBody, CardTitle, CardText
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';

const NavbarComponent = () => {
  return (
    <Navbar color="dark" dark expand="md" className="w-100">
      <NavbarBrand href="/"  className="fs-3 fw-bold">WEB latihan</NavbarBrand>
      <Nav  className="ms-auto fs-5" navbar>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/team" className="nav-link">Team</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="nav-link">Contact</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

function App() {
  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="fs-3 fw-bold">WEB Latihan</NavbarBrand>
        <Nav  className="ms-auto fs-5" navbar>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/team" className="nav-link">Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="nav-link">Contact</Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
