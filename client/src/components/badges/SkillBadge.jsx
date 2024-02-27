import React from 'react';
import styled from 'styled-components';
import SkillTooltip from "../tooltips/SkillTooltip";


const skillBadgeVariants = {
    advanced: '#17AA87',
    intermediate: '#F1C40F',
    basic: '#FF603E',

}

const BadgeLeft = styled.div`
  color: white;
  border: 1px solid #5D5D5D;
  padding: 2px;
  background-color: #5D5D5D;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
`

const BadgeRight = styled.div`
  border: 1px solid #5D5D5D;
  border-left: none;
  padding: 2px;
  background-color: ${(props) => skillBadgeVariants[props.variant]};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`


const SkillBadge = ({skill, ...props}) =>
    <SkillTooltip skill={skill}>
        <div className='text-regular skill-badge user-select-none d-flex flex-row'>
            <BadgeLeft className='text-bold'>
                #
            </BadgeLeft>
            <BadgeRight className='text-dark' variant={skill?.level}>
                {skill?.name}
            </BadgeRight>
        </div>
    </SkillTooltip>


export default SkillBadge;