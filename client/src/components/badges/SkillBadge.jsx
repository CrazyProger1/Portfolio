import React from 'react';
import styled from 'styled-components';
import '../../styles/badges.scss'


const skillBadgeVariants = {
    high: '#17AA87',
    middle: '#F1C40F',
    low: '#FF603E',

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


const SkillBadge = ({skill, ...props}) => {
    const {name, level} = skill;
    return (
        <div className='text-regular skill-badge user-select-none d-flex flex-row'>
            <BadgeLeft className='text-bold'>
                #
            </BadgeLeft>
            <BadgeRight className='text-dark' variant={level}>
                {name}
            </BadgeRight>
        </div>
    );
}


export default SkillBadge;