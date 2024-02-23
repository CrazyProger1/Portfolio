import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {MobileHide} from '../styled/MobileHide';
import {BRAND} from '../../config/data';
import {HEADER_NAV_LINKS} from '../../config/constants';
import useScrollNavigate from '../../hooks/useScrollNavigate';
import SocialNetworksNav from '../navs/SocialNetworksNav';
import '../../styles/header.scss'

const Header = () => {
    const navigate = useScrollNavigate();

    return (
        <Navbar
            className='header'
            expand='lg'
            bg='dark'
            data-bs-theme='dark'
            collapseOnSelect>
            <Container>
                <Navbar.Brand className='header-brand user-select-none'>{BRAND}</Navbar.Brand>
                <Navbar.Toggle aria-controls='header-collapse'/>
                <Navbar.Collapse id='header-collapse'>
                    <Nav className='mx-auto'>
                        {HEADER_NAV_LINKS.map(({text, to}) =>
                            <Nav.Link
                                key={to}
                                className='header-text-link ms-3 user-select-none'
                                onClick={() => navigate(to)}>
                                {text}
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <MobileHide>
                    <SocialNetworksNav/>
                </MobileHide>
            </Container>
        </Navbar>
    );
}

export default Header;