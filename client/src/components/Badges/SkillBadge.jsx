import React from 'react';
import {Badge} from "react-bootstrap";

const SkillBadge = ({name, level, ...props}) => {
    const boxShadow = '3px 3px 3px rgba(255, 255, 255, 0.1)'; // Тень
    const borderColor = '#fdfdfd'; // Цвет границы

    return (
        <Badge
            className='m-1 p-1'
            style={{

                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: boxShadow,
                border: `1px solid ${borderColor}`
            }}
            bg={level}>
            <span className='text-dark' style={{fontFamily: 'Poppins-Regular', fontSize: '17px'}}>
                #{name}
            </span>

        </Badge>

    );
};

export default SkillBadge;