import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import daffodil from "../../assests/Daffodil International School (1).jpg";
import Engineering from "../../assests/Engineering University School & College (2).jpg";
import udayan from "../../assests/Udayan higher Secondary School (1).jpg";

const Workshop = () => {
  return (
    <Container>
      <h3 style={{ textAlign: "center", margin: "40px 0px" }}>Our Workshops</h3>
      <div style={{ margin: "0 5%" }}>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={daffodil} className="img-fluid" />
              <Card.Body>
                <Card.Title>Daffodil International School</Card.Title>
                <Card.Text>
                  We went Daffodil International School for selling our products
                  there.We have beed able to get the attention of students there
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Engineering} className="img-fluid" />
              <Card.Body>
                <Card.Title>Engineering University School & College</Card.Title>
                <Card.Text>
                  We went Daffodil International School for selling our products
                  there.We have beed able to get the attention of students there
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={udayan} className="img-fluid" />
              <Card.Body>
                <Card.Title>Udayan Higher Secondary School</Card.Title>
                <Card.Text>
                  We went Daffodil International School for selling our products
                  there.We have beed able to get the attention of students there
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Workshop;
