import React from 'react';
import {TbFileCv} from 'react-icons/tb';
import {Nav} from 'react-bootstrap';

const CVLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <TbFileCv className='social-icon' color='white' size='32px'/>
    </Nav.Link>


export default CVLink;