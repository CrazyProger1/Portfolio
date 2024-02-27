import React from 'react';
import {Card} from 'react-bootstrap';
import VersionBadge from '../badges/VersionBadge';
import GithubStarsBadge from '../badges/GithubStarsBadge';
import '../../styles/cards.scss'


const ProjectCard = ({project, onChoose, ...props}) => {
    const {name, version, image, stars} = project;

    return (
        <Card
            onClick={() => onChoose && onChoose(project)}
            className='project-card user-select-none border-0 rounded-5'>
            <Card.Img
                className='rounded-5 project-card-image'
                variant='top'
                src={image}
            />
            <Card.ImgOverlay className='p-0 d-flex justify-content-end flex-column'>
                <div className='pb-2 ps-3 rounded-bottom-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                    <Card.Title className='text-regular text-dark mt-2'>{name}</Card.Title>
                    <div className='d-flex flex-row'>
                        <VersionBadge version={version}/>
                        <div className='ms-1'/>
                        <GithubStarsBadge stars={stars}/>
                    </div>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default ProjectCard;