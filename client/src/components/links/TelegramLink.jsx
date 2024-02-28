import React from 'react';
import {FaTelegram} from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const TelegramLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <FaTelegram className='social-icon' color='white' size='32px'/>
    </Nav.Link>

export default TelegramLink;