import React from 'react';
import {Offcanvas} from 'react-bootstrap';

const ProjectOverviewOffcanvas = ({show, handleClose, project, ...props}) => {
    const {name, description} = project;

    return (
        <Offcanvas placement='bottom' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-regular text-light'>{name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='text-regular text-light'>
                {description}
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export default ProjectOverviewOffcanvas;