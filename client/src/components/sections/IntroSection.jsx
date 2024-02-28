import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';
import {ME_PHOTO} from '../../config/data';
import IntroText from '../texts/IntroText';


const IntroSection = () =>
    <Row className='user-select-none'>
        <Col className='d-flex align-items-center'>
            <div className='ms-auto'>
                <IntroText/>
            </div>
        </Col>
        <Col className='d-flex justify-content-center'>
            <Image className='image-me rounded-5' src={ME_PHOTO} alt='Me Photo' fluid/>
        </Col>
    </Row>

export default IntroSection;