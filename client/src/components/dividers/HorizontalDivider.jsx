import React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../../styles/dividers.scss'


const HorizontalDivider = ({section, ...props}) =>
    <Row>
        <Col md='auto'>
            <h2 className='section-title text-light display-5'>{section}</h2>
        </Col>
        <Col className='d-flex align-items-center'>
            <hr className='section-line'/>
        </Col>
    </Row>


export default HorizontalDivider;