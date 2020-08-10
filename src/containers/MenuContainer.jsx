import React, { Component } from 'react';
import Menu from '../components/newMenu';
import { fetchNews } from '../redux/actions/actions';
import { connect } from "react-redux";
import { dataMenu } from '../assets/datamenu';

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        let value = document.getElementById("searchInput").value;
        this.props.onCategoryClick('search', value)
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

export default connect(null, mapDispatchToProps)(MenuContainer);