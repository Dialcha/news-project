import React, { Component } from 'react';
import Menu from '../components/newMenu';
import { dataMenu } from '../assets/datamenu';
import { withRouter } from "react-router";

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let value = document.getElementById("searchInput").value;
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

export default withRouter(MenuContainer);