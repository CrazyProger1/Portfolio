import React from 'react';
import {FaGitlab} from 'react-icons/fa';
import {Nav} from 'react-bootstrap';

const GitlabLink = ({link, ...props}) =>
    <Nav.Link href={link} target='_blank'>
        <FaGitlab className='social-icon' color='white' size='32px'/>
    </Nav.Link>


export default GitlabLink;