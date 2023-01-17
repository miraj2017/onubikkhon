import React from "react";

import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import about from "../../assests/about.webp";

const About = () => {
  return (
    <div style={{ padding: "100px 0px" }}>
      <Container>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Card
              style={{ border: "none", margin: "0 auto", alignItems: "center" }}
            >
              <Card.Img
                style={{ height: "200px", width: "50%", margin: "0 auto" }}
                variant="top"
                src={about}
                className="img-fluid"
              />
            </Card>
          </Col>
          <Col>
            <h4 style={{ marginLeft: "2%" }}>The Foldscope Microscope</h4>
            <Card style={{ border: "none", width: "60%" }}>
              <Card.Body>
                Foldscope is the paper microscope that began as an idea to make
                science more accessible. That idea has grown into a company that
                now delivers low-cost tools around the world! Foldscope has
                reached over 1.6 million people with our foldable paper
                microscopes, and we have created an online community of
                explorers unlike any other.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
