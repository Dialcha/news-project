import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap' //

function Menu ({ handleSubmit }) {
    return(
        <div>
                <Navbar bg="light" expand="lg">
                <LinkContainer exact to={'/'}><Navbar.Brand>KIOSKO APPLICATION</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <LinkContainer exact to={'/'}><Nav.Link>Principales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/politica'}><Nav.Link>Política</Nav.Link></LinkContainer>
                        <LinkContainer to={'/internacionales'}><Nav.Link>Internacionales</Nav.Link></LinkContainer>
                        <LinkContainer to={'/tecnologia'}><Nav.Link>Tecnología</Nav.Link></LinkContainer>
                        <LinkContainer to={'/espectaculos'}><Nav.Link>Espectáculos</Nav.Link></LinkContainer>
                        <LinkContainer to={'/deportes'}><Nav.Link>Deportes</Nav.Link></LinkContainer>           
                        </Nav>
                        <Form inline>
                            <FormControl id="searchInput" type="text" placeholder="Buscar noticias.." className="mr-sm-2" />
                                <Button variant="outline-success" onClick={handleSubmit}>Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default Menu;