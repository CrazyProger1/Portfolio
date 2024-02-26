import React from 'react';
import {Card} from 'react-bootstrap';
import VersionBadge from '../badges/VersionBadge';
import GithubStarsBadge from '../badges/GithubStarsBadge';
import '../../styles/cards.scss'
import '../../styles/images.scss'


const ProjectCard = ({name, version, image, stars, ...props}) => {
    const handleClick = () => {
        console.log('CLICK')
    }
    return (
        <Card
            onClick={handleClick}
            className='project-card user-select-none border-0 rounded-5'>
            <Card.Img
                className='rounded-5 project-card-image'
                variant='top'
                src={image}
            />
            <Card.ImgOverlay className='p-0 d-flex justify-content-end flex-column'>
                <div className='pb-2 ps-3 rounded-bottom-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                    <Card.Title className='text-regular text-dark mt-2'>{name}</Card.Title>
                    <Card.Text className='text-regular'>
                        <div className='d-flex flex-row'>
                            <VersionBadge version={version}/>
                            <div className='ms-1'/>
                            <GithubStarsBadge stars={stars}/>
                        </div>
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default ProjectCard;