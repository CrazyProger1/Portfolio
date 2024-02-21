import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';
import {GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK} from '../../config/data';
import {HEADER_NAV_LINKS} from '../../config/constants';
import useScrollNavigate from '../../hooks/useScrollNavigate';
import '../../styles/Header.css'

const Header = () => {
    const navigate = useScrollNavigate();

    return (
        <div>
            <Navbar
                className='header'
                expand='lg'
                // bg='dark'
                data-bs-theme='dark'
                collapseOnSelect>
                <Container>
                    <Navbar.Brand className='header-brand'>crazyproger1</Navbar.Brand>
                    <Navbar.Toggle aria-controls='header-navbar'/>
                    <Navbar.Collapse id='header-navbar'>
                        <Nav className='header-nav-links-container mx-auto'>
                            {HEADER_NAV_LINKS.map(({text, to}) =>
                                <Nav.Link
                                    className='header-nav-link ms-3'
                                    onClick={() => navigate(to)}>
                                    {text}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className='header-nav-icons-container'>
                        <Nav.Link href={TELEGRAM_LINK} target='_blank'>
                            <FaTelegram color='white' size='32px'/>
                        </Nav.Link>

                        <Nav.Link href={LINKEDIN_LINK} target='_blank'>
                            <FaLinkedin color='white' size='32px'/>
                        </Nav.Link>

                        <Nav.Link href={GITHUB_LINK} target='_blank'>
                            <FaGithub color='white' size='32px'/>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;