import React from 'react';
import {Nav} from 'react-bootstrap';
import GithubLink from '../links/GithubLink';
import PypiLink from '../links/PypiLink';
import GitlabLink from "../links/GitlabLink";


const ProjectOverviewNav = ({links, ...props}) =>
    <Nav>
        {links?.map(({site, link}) => (
            <div key={link}>
                {site === 'github' && <GithubLink link={link}/>}
                {site === 'pypi' && <PypiLink link={link}/>}
                {site === 'gitlab' && <GitlabLink link={link}/>}
            </div>
        ))}
    </Nav>


export default ProjectOverviewNav;