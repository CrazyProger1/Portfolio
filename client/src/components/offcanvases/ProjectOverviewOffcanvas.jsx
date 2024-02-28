import React from 'react';
import {Col, Image, Offcanvas} from 'react-bootstrap';
import SkillTable from '../tables/SkillTable';
import ProjectOverviewNav from '../navs/ProjectOverviewNav';

const ProjectOverviewOffcanvas = ({show, handleClose, project, ...props}) => {
    const {name, description, image, skills, links} = project;

    return (
        <Offcanvas className='h-auto' placement='bottom' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton closeVariant='white'>
                <Offcanvas.Title className='text-regular text-light user-select-none'>{name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='text-regular text-light'>
                <div className='d-flex justify-content-center'>
                    <Col xs={12} md={6}>
                        <Image className='rounded-5 user-select-none' src={image} thumbnail/>
                    </Col>
                </div>

                <div className='mt-5'/>
                {description}

                <div className='mt-3'/>
                <SkillTable skills={skills}/>

                <div className='mt-3'/>
                <ProjectOverviewNav links={links}/>
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export default ProjectOverviewOffcanvas;