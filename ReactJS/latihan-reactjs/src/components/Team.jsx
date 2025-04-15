import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const teamData = [
  { name: 'Andi', role: 'Frontend Developer' },
  { name: 'Budi', role: 'Backend Developer' },
  { name: 'Citra', role: 'UI/UX Designer' },
  { name: 'Doni', role: 'Golang Developer' }
];

const Team = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)",
        minHeight: "100vh",
        color: "white",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}
    >
      <Container className="text-center">
        <h2 style={{ marginBottom: "1rem" }}>Team Kami</h2>
        <p style={{ marginBottom: "3rem" }}>Kami adalah tim yang solid dalam pengembangan web modern.</p>
        <Row className="justify-content-center">
          {teamData.map((member, index) => (
            <Col md="3" sm="6" xs="10" key={index} className="mb-4">
              <Card style={{ backgroundColor: "#ffffff22", border: "none", color: "white", borderRadius: "12px" }}>
                <CardBody>
                  <CardTitle tag="h5">{member.name}</CardTitle>
                  <CardText>{member.role}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
