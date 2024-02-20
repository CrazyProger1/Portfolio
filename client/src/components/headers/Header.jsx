import React, {useEffect, useRef, useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
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
                <Navbar.Brand>crazyproger1</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link href='#about' onClick={() => navigate('about')}>About</Nav.Link>
                        <Nav.Link href='#projects' onClick={() => navigate('projects')}>Projects</Nav.Link>
                        <Nav.Link href='#contact' onClick={() => navigate('contact')}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{
                height: headerHeight
            }}/>
        </div>
    );
};

export default Header;