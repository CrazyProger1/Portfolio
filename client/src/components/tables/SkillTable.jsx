import React from 'react';
import SkillBadge from '../badges/SkillBadge';

const SkillTable = ({skills, ...props}) =>
    <div className='d-flex flex-wrap'>
        {skills.map(skill =>
            <div key={skill.name} className='m-1'>
                <SkillBadge skill={skill}/>
            </div>
        )}
    </div>

export default SkillTable;