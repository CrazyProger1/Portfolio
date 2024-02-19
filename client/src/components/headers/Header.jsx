import React, {useEffect, useRef, useState} from 'react';
import {Navbar} from 'react-bootstrap';
import useScrollNavigate from '../../hooks/useScrollNavigate';

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);
    const navigate = useScrollNavigate();

    useEffect(() => {
        setHeaderHeight(getHeaderHeight());
    }, [headerRef])


    const getHeaderHeight = () => headerRef.current ? headerRef.current.clientHeight : 0;

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrolledDown = prevScrollPos < currentScrollPos;

        setVisible(!isScrolledDown);
        setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () =>
        setHeaderHeight(getHeaderHeight());


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return (
        <div>
            <Navbar
                ref={headerRef}
                expand='lg'
                bg='dark'
                data-bs-theme='dark'
                style={{
                    top: visible ? '0' : `-${headerHeight}px`
                }}
                collapseOnSelect>

            </Navbar>
            <div style={{
                height: headerHeight
            }}/>
        </div>
    );
};

export default Header;