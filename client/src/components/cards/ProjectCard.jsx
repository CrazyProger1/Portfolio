import React from 'react';
import {Badge, Card} from 'react-bootstrap';
import {IoIosGitMerge} from 'react-icons/io';
import '../../styles/cards.scss'
import '../../styles/images.scss'

const ProjectCard = ({name, version, image, variant = 'light', ...props}) => {
    const handleClick = () => {
        console.log('CLICK')
    }
    return (
        <Card onClick={handleClick} className='project-card user-select-none border-0 rounded-5'>
            <Card.Img
                className='rounded-5 project-card-image'
                variant='top'
                src={image}
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-end h-100'>
                <Card.Title className={'text-regular text-' + variant}>{name}</Card.Title>
                <Card.Text className='text-regular'>
                    <Badge className='m-1 p-1' bg={variant}>
                        <IoIosGitMerge size='16px' color={variant === 'dark' ? 'white' : 'black'}/>
                        {version}
                    </Badge>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default ProjectCard;