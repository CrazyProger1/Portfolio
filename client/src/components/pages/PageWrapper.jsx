import React from 'react';
import {Container} from 'react-bootstrap';
import Headroom from 'react-headroom';
import Header from '../headers/Header';
import Footer from '../footers/Footer';


const PageWrapper = ({children, ...props}) =>
    <React.Fragment>
        <Headroom>
            <Header/>
        </Headroom>

        <Container>
            {children}
        </Container>

        <Footer/>
    </React.Fragment>

export default PageWrapper;