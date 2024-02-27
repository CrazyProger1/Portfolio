import React, {useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import {EMAIL} from '../../config/data';


const ContactMeForm = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSend = () => {
        window.open(`mailto:${EMAIL}?subject=${subject}&body=${message}`);
    }
    return (
        <div className='d-flex justify-content-center'>
            <Col xs={12} md={6}>
                <Form>
                    <Form.Group>
                        <Form.Label
                            className='text-regular text-light user-select-none'>
                            Subject
                        </Form.Label>
                        <Form.Control
                            className='form-control'
                            type='text'
                            value={subject}
                            onChange={e => setSubject(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label
                            className='text-regular text-light user-select-none'>
                            Email
                        </Form.Label>
                        <Form.Control
                            className='form-control'
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label
                            className='text-regular text-light user-select-none'>
                            Message
                        </Form.Label>
                        <Form.Control
                            className='form-control'
                            as='textarea'
                            rows={3}
                            type='text'
                            value={message}
                            onChange={e => setMessage(e.target.value)}/>
                    </Form.Group>

                    <Form.Group
                        className='d-flex justify-content-center mt-5'>
                        <Button
                            className='form-button-send text-regular text-light rounded-0 p-2 user-select-none'
                            onClick={handleSend}>
                            Send
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </div>
    );
};

export default ContactMeForm;