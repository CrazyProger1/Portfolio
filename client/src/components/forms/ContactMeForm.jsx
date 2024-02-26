import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';


const ContactMeForm = () => {
    const handleSend = () => {

    }
    return (
        <div className='d-flex justify-content-center'>
            <Col xs={12} md={6}>
                <Form>
                    <Form.Group>
                        <Form.Label className='text-regular text-light'>Subject</Form.Label>
                        <Form.Control className='form-control' type='text'/>
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='text-regular text-light'>Email</Form.Label>
                        <Form.Control className='form-control' type='email'/>
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='text-regular text-light'>Message</Form.Label>
                        <Form.Control className='form-control' as='textarea' rows={3} type='text'/>
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-center mt-5'>
                        <Button className='form-button-send text-regular text-light rounded-0 p-2'
                                onClick={handleSend}>Send</Button>
                    </Form.Group>
                </Form>
            </Col>
        </div>
    );
};

export default ContactMeForm;