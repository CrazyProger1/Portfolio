import React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../../styles/dividers.scss'


const HorizontalDivider = ({name, ...props}) => {
    return (
        <Row>
            <Col md='auto'>
                <h2 className='section-title text-light'>{name}</h2>
            </Col>
            <Col className='d-flex align-items-center'>
                <hr className='section-line'/>
            </Col>
        </Row>
    );
};

export default HorizontalDivider;