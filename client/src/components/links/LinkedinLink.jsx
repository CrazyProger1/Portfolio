import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const LinkedinLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <FaLinkedin className='social-icon' color='white' size='32px'/>
    </Nav.Link>

export default LinkedinLink;