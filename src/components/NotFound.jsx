import React from "react";
import "../assets/notfound.css";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

function NotFound() {
  return (
    <Container>
      <Col>
      
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          La página que buscas no existe
          <p>
            Anímate e ingresa a <Link to="/">Principales</Link> e infórmate con
            las últimas noticias
          </p>
        </div>
      </div>
      </Col>
    </Container>
  );
}

export default NotFound;
