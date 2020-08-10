import React, { Component } from 'react';
import Menu from '../components/newMenu';
import { fetchNews } from '../redux/actions/actions';
import { connect } from "react-redux";
import { dataMenu } from '../assets/datamenu';
import { withRouter } from "react-router";

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let value = document.getElementById("searchInput").value;
        console.log(this.props);
        this.props.history.push(`/search/${value}`)
    }

    render() {
        return(
            <Menu
                handleSubmit={ this.handleSubmit }
                items={ dataMenu }
                />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCategoryClick: (category, keyword) => dispatch(fetchNews(category, keyword)),
    };
  };

export default withRouter(connect(null, mapDispatchToProps)(MenuContainer));