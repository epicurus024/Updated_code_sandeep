import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideoCamera} from '@fortawesome/free-solid-svg-icons'

const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faVideoCamera} className="me-2"/>
                    Movie Bar
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/moviesInTheaters">Movies In Theaters</Nav.Link>
                        <Nav.Link href="/comingSoon">Coming Soon</Nav.Link>
                        <Nav.Link href="/topRatedIndian">Top Rated Indian</Nav.Link>
                        <Nav.Link href="/topRatedMovies">Top Rated Movies</Nav.Link>
                        <Nav.Link href="/favourites">Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;