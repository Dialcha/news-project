import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { dataTest } from "../assets/datatest";
import Noticia from "./Noticia";
import Loading from "./Loading";

function Noticias({newsByCategory}) {

  return (
        newsByCategory.news.isFetching ? (
          <Loading />
        ) : (
          <Container>
            <CardColumns>
              {
                newsByCategory.news.items.map((noticia) => {
                  return (
                    <Noticia
                      image={noticia.img_url}
                      title={noticia.title}
                      source={noticia.source_name}
                    />
                  );
                })
              }
            </CardColumns>
          </Container>
        )
  );
}

export default Noticias;
