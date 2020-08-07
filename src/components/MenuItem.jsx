import React from 'react';
import { Nav } from 'react-bootstrap';

function MenuItem({ handleClick, title }) {
    return(
        <Nav.Link onClick={ handleClick }>{ title }</Nav.Link>
    )
}

export default MenuItem;