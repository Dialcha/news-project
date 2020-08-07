import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/loading.css";

function Loading() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="center1">
            <div className="lds-facebook justify-content-md-center center2">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
            <h3>Cargando noticias</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Loading;
