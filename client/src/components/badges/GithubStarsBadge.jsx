import React from 'react';
import {FaStar} from 'react-icons/fa';
import {Badge} from 'react-bootstrap';

const GithubStarsBadge = ({stars, ...props}) =>
    <Badge className='p-1' bg='dark'>
        <FaStar size='16px' color='white'/>
        <span className='ms-1 text-regular text-light'>
            {stars}
        </span>
    </Badge>

export default GithubStarsBadge;