import React from 'react';
import {Carousel} from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";

const ProjectsCarousel = () => {
    return (
        <Carousel>
            {/*<div className='flex-row'></div>*/}
            {/*<div className='gap-1'></div>*/}
            <Carousel.Item className='d-flex flex-row gap-5 justify-content-center'>
                <ProjectCard project={{
                    name: 'test',
                    version: '0.0.1',
                    image: 'https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg'
                }}/>
                <ProjectCard project={{
                    name: 'test 2',
                    version: '0.0.2',
                    image: 'https://es.celoxis.com/cassets/img/pmc/project-management.png'
                }}/>
                <ProjectCard project={{
                    name: 'test 3',
                    version: '0.0.3',
                    image: 'https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg'
                }}/>

            </Carousel.Item>
        </Carousel>
    );
};

export default ProjectsCarousel;