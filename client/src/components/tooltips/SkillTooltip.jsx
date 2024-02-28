import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const tooltipMessages = {
    basic: 'Basic 🙂',
    intermediate: 'Intermediate 🤓',
    advanced: 'Advanced 😎'
}


const SkillTooltip = ({children, skill, ...props}) =>
    <OverlayTrigger overlay={<Tooltip>
        <div className='text-regular text-light'>{tooltipMessages[skill?.level]}</div>
    </Tooltip>}>
        {children}
    </OverlayTrigger>

export default SkillTooltip;