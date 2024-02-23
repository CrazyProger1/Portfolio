import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import {ME_PHOTO} from '../../config/data';
import '../../styles/images.scss'


const IntroSection = () =>
    <Row className='user-select-none'>
        <Col className='d-flex align-items-center'>
            <div className='ms-auto'>
                <h5 className='text-regular text-light'>
                    Hi, I'm Nikolay,
                </h5>
                <h1 className='text-extrabold text-light display-4'>
                    <p>Python Developer</p>
                </h1>
            </div>
        </Col>
        <Col className='d-flex justify-content-center'>
            <Image className='image-me' src={ME_PHOTO} alt='My Photo' fluid/>
        </Col>
    </Row>

export default IntroSection;