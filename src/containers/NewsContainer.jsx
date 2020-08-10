import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/actions/actions";
import Noticias from "../components/Noticias";
import { dataMenu } from "../assets/datamenu";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.path === "/search/:keyword") {
      this.props.onCategoryClick("search", this.props.match.params.keyword);
    } else {
      let param = this.props.match.path;
      let idRoute = dataMenu.find((element) => element.route === param);
      this.props.onCategoryClick(idRoute.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.path === nextProps.match.path) {
      if (
        nextProps.match.path === "/search/:keyword" &&
        nextProps.match.params.keyword !== this.props.match.params.keyword
      ) {
        this.props.onCategoryClick("search", nextProps.match.params.keyword);
      } else {
        return;
      }
    } else if (nextProps.match.path === "/search/:keyword") {
      this.props.onCategoryClick("search", nextProps.match.params.keyword);
    } else {
      let param = nextProps.match.path;
      let idRoute = dataMenu.find((element) => element.route === param);
      this.props.onCategoryClick(idRoute.id);
      console.log(this.props.match);
    }
  }

  render() {
    return (
      <div>
        <Noticias newsByCategory={this.props.newsByCategory} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (category, keyword) =>
      dispatch(fetchNews(category, keyword)),
  };
};

const mapStateToProps = (state) => {
  const { newsByCategory } = state;
  return { newsByCategory };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
