import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../cards/ProjectCard';
import '../../styles/slider.scss'

const ProjectsSlider = ({projects, ...props}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 982,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Slider {...settings} className='me-5 ms-5'>
            {projects.map(project =>
                <div className='p-3'
                     key={project.name}>
                    <ProjectCard  {...project}/>
                </div>
            )}
        </Slider>

    );
};

export default ProjectsSlider;