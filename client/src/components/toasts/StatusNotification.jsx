import React from 'react';
import {Toast} from 'react-bootstrap';
import {GrStatusGood, GrStatusCritical} from 'react-icons/gr';

const StatusNotification = ({show, text, title, success = true, onClose, ...props}) =>
    <div className='toast-notification-box'>
        <Toast show={show} onClose={onClose}>
            <Toast.Header className='text-regular text-light' closeButton closeVariant='white'>
                {success && <GrStatusGood size='32px' color='green'/>}
                {!success && <GrStatusCritical size='32px' color='red'/>}
                <strong className='mx-auto'>{title}</strong>
            </Toast.Header>
            <Toast.Body className='text-regular text-light'>{text}</Toast.Body>
        </Toast>
    </div>


export default StatusNotification;