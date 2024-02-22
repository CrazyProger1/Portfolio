import React from 'react';
import {Badge, Card} from 'react-bootstrap';
import {IoIosGitMerge} from 'react-icons/io';
import {FaStar} from 'react-icons/fa';

const ProjectCard = ({project, ...props}) => {
    const {image, name, version} = project;
    return (
        <Card style={{width: '22rem'}}>
            <Card.Img
                variant='top'
                src={image}
                style={{
                    height: '100%',
                    borderRadius: '30px',
                    opacity: '0.8',
                }}
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
                <Card.Title style={{fontFamily: 'Poppins-Regular'}}>{name}</Card.Title>
                <Card.Text style={{fontFamily: 'Poppins-Regular'}}>
                    <Badge  className='m-1 p-1' bg='dark'>
                        <IoIosGitMerge size='16px'/>
                        {version}
                    </Badge>
                    <Badge  className='m-1 p-1' bg='dark'>
                        <FaStar size='16px'/>
                        5
                    </Badge>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default ProjectCard;