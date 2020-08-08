import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import MenuItem from './MenuItem';
import { LinkContainer } from 'react-router-bootstrap' //

function Menu ({ handleClick, handleSubmit, items }) {
    return(
        <div>
                <Navbar bg="light" expand="lg">
                <LinkContainer to={'/principales'}><Navbar.Brand>NEWS-APP</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <LinkContainer to={'/principales'}><Nav.Link onClick={handleClick}>Principales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/politica'}><Nav.Link onClick={handleClick}>Política</Nav.Link></LinkContainer>
                        <LinkContainer to={'/internacionales'}><Nav.Link onClick={handleClick}>Internacionales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/tecnologia'}><Nav.Link onClick={handleClick}>Tecnología</Nav.Link></LinkContainer>
                        <LinkContainer to={'/espectaculos'}><Nav.Link onClick={handleClick}>Espectáculos</Nav.Link></LinkContainer>
                        <LinkContainer to={'/deportes'}><Nav.Link onClick={handleClick}>Deportes</Nav.Link></LinkContainer>           
                        </Nav>
                        <Form inline onSubmit={ handleSubmit }>
                            <FormControl id="searchInput" type="text" placeholder="Buscar noticias.." className="mr-sm-2" />
                            <Button variant="outline-success" type="submit">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default Menu;