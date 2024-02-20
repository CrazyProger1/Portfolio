import React, {useEffect, useRef, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {FaGithub} from "react-icons/fa";
import useScrollNavigate from '../../hooks/useScrollNavigate';
import '../../styles/Header.css'

const Header = () => {
    const [headerVisible, setHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);
    const navigate = useScrollNavigate();

    useEffect(() => {
        setHeaderHeight(getCurrentHeaderHeight());
    }, [headerRef])


    const getCurrentHeaderHeight = () =>
        headerRef.current ? headerRef.current.clientHeight : 0;

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrolledDown = prevScrollPos < currentScrollPos;


        setHeaderVisible(!isScrolledDown);
        setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () =>
        setHeaderHeight(getCurrentHeaderHeight());


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);


    return (
        <div>
            <Navbar
                ref={headerRef}
                className='header'
                expand='lg'
                bg='dark'
                data-bs-theme='dark'
                style={{
                    top: headerVisible ? '0' : `-${headerHeight}px`
                }}
                collapseOnSelect>

                <Container>
                    <Navbar.Brand>crazyproger1</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mx-auto'>
                            <Nav.Link href='#about' onClick={() => navigate('about')}>About</Nav.Link>
                            <Nav.Link href='#projects' onClick={() => navigate('projects')}>Projects</Nav.Link>
                            <Nav.Link href='#contact' onClick={() => navigate('contact')}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <FaGithub color='white' size='32px'/>
                </Container>

            </Navbar>
            <div style={{
                height: headerHeight
            }}/>
        </div>
    );
};

export default Header;