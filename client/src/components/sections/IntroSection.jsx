import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';

const IntroSection = () =>
    <Row>
        <Col className='d-flex justify-content-center align-items-center'>
            <div className='ms-auto'>
                <h5 className='text-light text-regular'>
                    Hi, I'm Nikolay,
                </h5>
                <h1 className='text-light text-extrabold display-4'>
                    <p>Python Developer</p>
                </h1>
            </div>

        </Col>
        <Col className='d-flex justify-content-center'>
            <Image src={process.env.PUBLIC_URL + '/images/me.jpg'} width='58%' style={{borderRadius: '49px'}}/>
        </Col>
    </Row>

export default IntroSection;