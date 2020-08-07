import React, { Component } from 'react';
import Menu from '../components/newMenu';
import { fetchNews } from '../redux/actions/actions';
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { dataMenu } from '../assets/datamenu';

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e);
    }

    handleClick() {
        return(
            setTimeout(() => {
                let param = this.props.location.pathname
                let idRoute = dataMenu.find(element => element.route === param);
                this.props.onCategoryClick(idRoute.id);
            }, 1) // Se añade el timeOut porque sin el, this.props.location registra la ubicación anterior
        )
    }

    render() {
        return(
            <Menu
                handleClick={ this.handleClick }
                handleSubmit={ this.handleSubmit }
                items={ dataMenu }/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCategoryClick: (category) => dispatch(fetchNews(category)),
    };
  };

export default withRouter(connect(null, mapDispatchToProps)(MenuContainer));