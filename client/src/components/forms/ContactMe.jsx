import React from 'react';
import {Col, Form} from 'react-bootstrap';
import '../../styles/forms.css'

const ContactMe = () => {
    return (
        <Form className='d-flex justify-content-center'>
            <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                    <Form.Label style={{color: 'white', fontFamily: 'Poppins-Regular'}}
                                className='form-label'>Topic</Form.Label>
                    <Form.Control className='form-control' type='text'/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{color: 'white', fontFamily: 'Poppins-Regular'}}
                                className='form-label'>Email</Form.Label>
                    <Form.Control className='form-control' type='email'/>
                </Form.Group>

                <Form.Group>
                    <Form.Label style={{color: 'white', fontFamily: 'Poppins-Regular'}}
                                className='form-label'>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} className='form-control' type='text'/>
                </Form.Group>
            </Col>
        </Form>

    );
};

export default ContactMe;