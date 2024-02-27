import React from 'react';
import {Nav} from 'react-bootstrap';
import {GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK} from '../../config/data';
import GithubLink from '../links/GithubLink';
import LinkedinLink from '../links/LinkedinLink';
import TelegramLink from '../links/TelegramLink';


const SocialNetworksNav = () =>
    <Nav className='d-flex flex-row'>
        <TelegramLink link={TELEGRAM_LINK}/>

        <LinkedinLink link={LINKEDIN_LINK}/>

        <GithubLink link={GITHUB_LINK}/>
    </Nav>


export default SocialNetworksNav;