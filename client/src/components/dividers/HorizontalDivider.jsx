import React from 'react';
import {Col, Row} from "react-bootstrap";

const HorizontalDivider = ({name, ...props}) => {
    return (
        <Row className='my-5'>
            <Col md='auto'>
                <h2 style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize: '45px'}}>{name}</h2>
            </Col>
            <Col className='d-flex align-items-center'>
                <hr style={{height: '4px', width: '100%'}} color='white'/>
            </Col>
        </Row>
    );
};

export default HorizontalDivider;