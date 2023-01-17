import React from "react";

import { Card, Col, Row } from "react-bootstrap";
import banner from "../../assests/banner.webp";

const Banner = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={banner}
              className="img-fluid"
              style={{ height: "100vh", width: "100vw" }}
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
