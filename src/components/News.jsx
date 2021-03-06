import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import NewsCard from "./NewsCard";
import Loading from "./Loading";

function News({ newsByCategory }) {
  return newsByCategory.news.isFetching ? (
    <Loading />
  ) : (
    <Container>
      <CardColumns>
        {newsByCategory.news.items.map((noticia) => {
          return (
            <NewsCard
              image={noticia.img_url}
              title={noticia.title}
              source={noticia.source_name}
              url={noticia.url}
            />
          );
        })}
      </CardColumns>
    </Container>
  );
}

export default News;
