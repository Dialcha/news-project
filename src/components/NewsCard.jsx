import React from "react";
import { Card, Button } from "react-bootstrap";

function NewsCard({ image, title, source, url }) {
  return (
    <Card className="p-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{source}</Card.Text>
        <Button variant="primary">
          <a target="_blank" href={url}>
            Ver noticia original
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
