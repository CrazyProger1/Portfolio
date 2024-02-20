import React from 'react';
import {Container} from "react-bootstrap";
import Header from '../headers/Header';
import Footer from '../footers/Footer';


const PageWrapper = ({children, ...props}) =>
    <div>
        <Header/>
        <Container>
            {children}
        </Container>
        <Footer/>
    </div>

export default PageWrapper;