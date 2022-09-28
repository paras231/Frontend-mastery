import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ backgroundColor: "red",height:"10vmax" }}>1 of 2</Col>
          <Col style={{ backgroundColor: "yellow" }}>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
