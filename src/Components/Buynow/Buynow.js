import React from "react";
import Container from "react-bootstrap/Container";

import { Button, Card, Col, Row } from "react-bootstrap";
import p1 from "../../assests/p1.webp";
import p2 from "../../assests/p2.webp";
import p3 from "../../assests/p3.webp";
import p4 from "../../assests/p4.webp";

const Buynow = () => {
  return (
    <Container>
      <h1 style={{ textAlign: "center", margin: "40px 0px" }}>Products</h1>
      <div style={{ margin: "0 10%" }}>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={p1}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>Foldscope Assembled Pouch Paper .</Card.Title>
                <Card.Text>BDT 150</Card.Text>
                <Button style={{ background: "#1C96B9" }}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={p2}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>Foldscope Assembled Individual</Card.Title>
                <Card.Text>BDT 250</Card.Text>
                <Button style={{ background: "#1C96B9" }}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={p3}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>Foldscope Assembled Classroom Kit</Card.Title>
                <Card.Text>BDT 350</Card.Text>
                <Button style={{ background: "#1C96B9" }}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={p4}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>Basic Classroom Kit</Card.Title>
                <Card.Text>BDT 250</Card.Text>
                <Button style={{ background: "#1C96B9" }}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Buynow;
