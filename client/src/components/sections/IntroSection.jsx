import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

const IntroSection = () => {
    return (
        <Row className='mt-5'>
            <Col className='d-flex justify-content-center align-items-center'>
                <div className='ms-auto'>
                    <h5 style={{color: 'white', fontFamily: 'Poppins-Regular'}}>
                        Hi, I'm Nikolay,
                    </h5>
                    <h1 style={{color: 'white', fontFamily: 'Poppins-ExtraBold', fontSize: '55px'}}>
                        <p>Python Developer</p>
                    </h1>
                </div>

            </Col>
            <Col className='d-flex justify-content-center'>
                <Image src={process.env.PUBLIC_URL + '/images/me.jpg'} width='58%' style={{borderRadius: '49px'}}/>
            </Col>
        </Row>
    );
};

export default IntroSection;