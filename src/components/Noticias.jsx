import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { dataTest } from "../assets/datatest";
import Noticia from "./Noticia";

function Noticias() {
  let noticias = dataTest.map((noticia) => (
    <Noticia
      image={noticia.image}
      title={noticia.title}
      source={noticia.source}
    />
  ));


  return (
    <Container>
      <CardColumns>{noticias}</CardColumns>
    </Container>
  );
}

export default Noticias;
