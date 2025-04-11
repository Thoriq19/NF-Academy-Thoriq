import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

const Team = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <h2 className="mb-4">Team Kami</h2>
      <Row className="justify-content-center w-100">
        <Col md="3" className="mb-3">
          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Andi</CardTitle>
              <CardText>Frontend Developer</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-3">
          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Budi</CardTitle>
              <CardText>Backend Developer</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-3">
          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Citra</CardTitle>
              <CardText>UI/UX Designer</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-3">
          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Doni</CardTitle>
              <CardText>Golang</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
