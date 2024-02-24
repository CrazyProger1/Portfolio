import React from 'react';
import {Badge, Card} from 'react-bootstrap';
import {IoIosGitMerge} from 'react-icons/io';
import '../../styles/cards.scss'
import '../../styles/images.scss'

const ProjectCard = ({name, version, image, ...props}) => {
    const handleClick = () => {
        console.log('CLICK')
    }
    return (
        <Card onClick={handleClick} className='project-card user-select-none border-0 rounded-5'>
            <Card.Img
                className='rounded-5'
                variant='top'
                src={image}
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
                <Card.Title className='text-regular text-light'>{name}</Card.Title>
                <Card.Text className='text-regular'>
                    <Badge className='m-1 p-1' bg='dark'>
                        <IoIosGitMerge size='16px'/>
                        {version}
                    </Badge>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default ProjectCard;