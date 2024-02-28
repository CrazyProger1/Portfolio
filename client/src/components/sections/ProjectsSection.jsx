import React, {useReducer} from 'react';
import ProjectSlider from '../sliders/ProjectSlider';
import {PROJECTS} from '../../config/data';
import ProjectOverviewOffcanvas from '../offcanvases/ProjectOverviewOffcanvas';

const offcanvasInitialState = {
    show: false,
    project: {}
}

const offcanvasReducer = (state, action) => {
    switch (action.type) {
        case 'show':
            return {
                ...state,
                show: true,
                project: action.project
            };
        case 'hide':
            return {
                ...state,
                show: false
            };
        default:
            throw new Error('Invalid action!');
    }
}

const ProjectsSection = () => {
    const [offcanvasState, dispatchOffcanvas] = useReducer(
        offcanvasReducer,
        offcanvasInitialState
    )


    return (
        <React.Fragment>
            <ProjectSlider
                projects={PROJECTS}
                onChoose={project => dispatchOffcanvas({type: 'show', project: project})}/>
            <ProjectOverviewOffcanvas
                {...offcanvasState}
                handleClose={() => dispatchOffcanvas({type: 'hide'})}/>
        </React.Fragment>
    );
}


export default ProjectsSection;