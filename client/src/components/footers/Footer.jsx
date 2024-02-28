import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {EMAIL, PHONE} from '../../config/data';
import SocialNetworksNav from '../navs/SocialNetworksNav';
import '../../styles/footer.scss'

const Footer = () =>
    <Navbar
        className='footer'
        expand='lg'
        bg='dark'
        data-bs-theme='dark'
        collapseOnSelect>
        <Container>
            <Nav className='d-flex flex-column'>
                <Nav.Link className='footer-text-link text-regular' href={'tel:' + PHONE}>
                    {PHONE}
                </Nav.Link>
                <Nav.Link className='footer-text-link text-regular' href={'mailto:' + EMAIL}>
                    {EMAIL}
                </Nav.Link>
            </Nav>
            <SocialNetworksNav/>
        </Container>
    </Navbar>

export default Footer;