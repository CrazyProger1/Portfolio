import React, {useReducer, useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import StatusNotification from '../toasts/StatusNotification';
import {sendEmail} from '../../services/email';

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                show: true,
                title: 'Email',
                success: true,
                text: action.text

            };
        case 'error':
            return {
                ...state,
                show: true,
                title: 'Email',
                success: false,
                text: action.text
            };
        case 'hide':
            return {
                ...state,
                show: false
            };
        default:
            throw new Error('Invalid action!');
    }
}

const ContactMeForm = () => {
    const [validated, setValidated] = useState(false);
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notificationState, dispatchNotification] = useReducer(
        notificationReducer,
        {
            show: false,
            text: '',
            title: '',
            success: true
        }
    )

    const send = () => {
        sendEmail(`Subject: ${subject}\nFrom: ${email}\nMessage: ${message}`).then(response => {
            dispatchNotification({
                type: 'success',
                text: 'Email successfully sent!',
            });
            setTimeout(() => dispatchNotification({type: 'hide'}), 3000);
        }).catch(error => {
            dispatchNotification({
                type: 'error',
                text: `Email was not sent! Reason: ${error.text}`,
            });
            setTimeout(() => dispatchNotification({type: 'hide'}), 10000);
        });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity() === false)
            return;

        setValidated(false);
        setMessage('');
        setEmail('');
        setSubject('');
        send();
    };
    return (
        <div className='d-flex justify-content-center'>
            <StatusNotification {...notificationState} onClose={() => dispatchNotification({type: 'hide'})}/>

            <Col xs={12} md={6}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label
                            className='text-regular text-light user-select-none'>
                            Subject
                        </Form.Label>
                        <Form.Control
                            required
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
                            required
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
                            required
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
                            type='submit'
                            className='form-button-send text-regular text-light rounded-0 p-2 user-select-none'>
                            Send
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </div>
    );
};

export default ContactMeForm;