import React from 'react';
import {Nav} from 'react-bootstrap';
import {GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK} from '../../config/data';
import {FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';
import '../../styles/navs.scss'


const SocialNetworksNav = ({...props}) => {
    return (
        <Nav className='d-flex flex-row'>
            <Nav.Link href={TELEGRAM_LINK} target='_blank'>
                <FaTelegram className='social-icon' color='white' size='32px'/>
            </Nav.Link>

            <Nav.Link href={LINKEDIN_LINK} target='_blank'>
                <FaLinkedin className='social-icon' color='white' size='32px'/>
            </Nav.Link>

            <Nav.Link href={GITHUB_LINK} target='_blank'>
                <FaGithub className='social-icon' color='white' size='32px'/>
            </Nav.Link>
        </Nav>
    );
};

export default SocialNetworksNav;