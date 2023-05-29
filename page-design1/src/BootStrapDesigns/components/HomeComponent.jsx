import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomeComponent = () => {
  return (
    <>
      <Container className="d-flex justify-content-center flex-column">
        <Row className="d-flex justify-content-center flex-column">
          {Array.from(Array(10).keys()).map((i, j) => {
            return (
              <Col xs={12} lg={4} key={i} style={{ marginBottom: "1rem" }}>
                <CardListComponent />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeComponent;

const img =
  "https://images.unsplash.com/photo-1685305277176-06d606fb108d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

function CardListComponent() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
