import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { dataTest } from "../assets/datatest";
import Noticia from "./Noticia";

function Noticias({newsByCategory}) {
  let noticias = dataTest.map((noticia) => (
    <Noticia
      image={noticia.image}
      title={noticia.title}
      source={noticia.source}
    />
  ));

  return (
    <Container>
      <CardColumns>
        {newsByCategory.news.isFetching ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          newsByCategory.news.items.map((noticia) => {
            return (
              <Noticia
                image={noticia.img_url}
                title={noticia.title}
                source={noticia.source_name}
              />
            );
          })
        )}
      </CardColumns>
    </Container>
  );
}

export default Noticias;
