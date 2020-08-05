import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {fetchNews} from "../redux/actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router"

class Menu extends Component {
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
                this.props.onCategoryClick(param.slice(1, param.length));
            }, 1)
        )
    }
    
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <LinkContainer to={'/principales'}><Navbar.Brand>NEWS-APP</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <LinkContainer to={'/principales'}><Nav.Link onClick={this.handleClick}>Principales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/politica'}><Nav.Link onClick={this.handleClick}>Política</Nav.Link></LinkContainer>
                        <LinkContainer to={'/internacionales'}><Nav.Link onClick={this.handleClick}>Internacionales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/tecnologia'}><Nav.Link onClick={this.handleClick}>Tecnología</Nav.Link></LinkContainer>
                        <LinkContainer to={'/espectaculos'}><Nav.Link onClick={this.handleClick}>Espectáculos</Nav.Link></LinkContainer>
                        <LinkContainer to={'/deportes'}><Nav.Link onClick={this.handleClick}>Deportes</Nav.Link></LinkContainer>                        
                        </Nav>
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormControl type="text" placeholder="Buscar noticias.." className="mr-sm-2" />
                            <Button variant="outline-success" type="submit">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCategoryClick: (category) => dispatch(fetchNews(category)),
    };
  };

export default withRouter(connect(null, mapDispatchToProps)(Menu));
