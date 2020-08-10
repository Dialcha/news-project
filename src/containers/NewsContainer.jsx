import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/actions/actions";
import Noticias from "../components/Noticias";
import { dataMenu } from '../assets/datamenu';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    let param = this.props.match.path
    let idRoute = dataMenu.find(element => element.route === param);
    this.props.onCategoryClick(idRoute.id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.path === nextProps.match.path) {
      return;
    }
    let param = nextProps.match.path
    let idRoute = dataMenu.find(element => element.route === param);
    this.props.onCategoryClick(idRoute.id);
    console.log(this.props.match);
  }

  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
     <div>
       <Noticias newsByCategory={this.props.newsByCategory}/>
     </div> 
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
