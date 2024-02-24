import React from 'react';
import SkillBadge from '../badges/SkillBadge';

const SkillsTable = ({skills, ...props}) =>
    <div className='d-flex flex-wrap'>
        {skills.map(skill =>
            <div key={skill.name} className='m-1'>
                <SkillBadge {...skill}/>
            </div>
        )}
    </div>

export default SkillsTable;