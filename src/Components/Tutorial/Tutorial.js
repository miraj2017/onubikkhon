import React from "react";

import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Tutorial = () => {
  return (
    <div style={{ padding: "120px 0px" }}>
      <h1 style={{ textAlign: "center", padding: "20px 0px" }}>Tutorial</h1>
      <Container>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Card style={{ border: "none", width: "50%", margin: "0 auto" }}>
              <Card.Body>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/HZyiVmXQND0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tutorial;
