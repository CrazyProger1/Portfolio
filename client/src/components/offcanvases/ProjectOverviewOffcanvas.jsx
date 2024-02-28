import React from 'react';
import {Image, Offcanvas} from 'react-bootstrap';
import SkillTable from '../tables/SkillTable';
import ProjectOverviewNav from '../navs/ProjectOverviewNav';

const ProjectOverviewOffcanvas = ({show, handleClose, project, ...props}) => {
    const {name, description, image, skills, links, version, type} = project;

    return (
        <Offcanvas className='h-auto' placement='bottom' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton closeVariant='white'>
                <Offcanvas.Title className='text-regular text-light user-select-none'>{name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='text-regular text-light'>
                <div className='d-flex justify-content-center'>
                    <Image className='image-project rounded-5 user-select-none' src={image} thumbnail/>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <ProjectOverviewNav links={links}/>
                </div>


                <div className='mt-3'/>
                {description}

                <p/>
                <p>
                    Version: <span className='text-info'>{version}</span>
                </p>
                <p>
                    Type: <span className='text-info'>{type}</span>
                </p>


                <div className='mt-3'/>
                <SkillTable skills={skills}/>
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export default ProjectOverviewOffcanvas;