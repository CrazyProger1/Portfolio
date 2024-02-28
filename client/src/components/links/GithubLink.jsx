import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const GithubLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <FaGithub className='social-icon' color='white' size='32px'/>
    </Nav.Link>


export default GithubLink;