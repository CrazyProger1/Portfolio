import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {FaGithub} from "react-icons/fa";
import useScrollNavigate from '../../hooks/useScrollNavigate';
import {GITHUB_LINK} from "../../config/data";
import {HEADER_NAV_LINKS} from "../../config/constants";
import '../../styles/Header.css'

const Header = () => {
    const navigate = useScrollNavigate();

    return (
        <div>
            <Navbar
                className='header'
                expand='lg'
                bg='dark'
                data-bs-theme='dark'
                collapseOnSelect>

                <Container>
                    <Navbar.Brand>crazyproger1</Navbar.Brand>
                    <Navbar.Toggle aria-controls='header-navbar'/>
                    <Navbar.Collapse id='header-navbar'>
                        <Nav className='mx-auto'>
                            {HEADER_NAV_LINKS.map(({text, to}) =>
                                <Nav.Link
                                    className='header-nav-link'
                                    onClick={() => {
                                        navigate(to);
                                    }}>
                                    {text}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href={GITHUB_LINK} target='_blank'>
                        <FaGithub color='white' size='32px'/>
                    </Nav.Link>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;