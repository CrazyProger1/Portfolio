import React from 'react';
import {SiPypi} from 'react-icons/si';
import {Nav} from 'react-bootstrap';

const PypiLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <SiPypi className='social-icon' color='white' size='32px'/>
    </Nav.Link>

export default PypiLink;