import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../cards/ProjectCard';
import '../../styles/sliders.scss'


const SampleNextArrow =({className, style, onClick}) => {
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = ({className, style, onClick}) =>  {
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        />
    );
}

const ProjectSlider = ({projects, onChoose, ...props}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };
    return (
        <Slider {...settings} className='me-5 ms-5'>
            {projects.map(project =>
                <div
                    className='p-3 slider-item'
                    key={project.name}>
                    <ProjectCard
                        project={project}
                        onChoose={onChoose}
                    />
                </div>
            )}
        </Slider>

    );
};

export default ProjectSlider;