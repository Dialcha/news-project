import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, CardColumns } from "react-bootstrap";
import { dataTest } from "../assets/datatest";
import Noticia from "../components/Noticia";
import { fetchNews } from "../redux/actions/actions";
import Noticias from "../components/Noticias";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.onCategoryClick("/principales");
  }

  handleClick() {
    console.log(this.props)
  }

  render() {
    //let titulos = this.props.newsByCategory.news.items && this.props.newsByCategory.news.items.map(noticia => {
    //    return(
    //    <h1>{noticia.title}</h1>
    //    )
    //})
    return (

      <Noticias newsByCategory={this.props.newsByCategory}/>

      //<div>
      //  <h1>Pruebaaaa</h1>
      //  <button onClick={this.handleClick}></button>
      //</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (category) => dispatch(fetchNews(category)),
  };
};

const mapStateToProps = (state) => {
  const { newsByCategory } = state;
  return { newsByCategory };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
