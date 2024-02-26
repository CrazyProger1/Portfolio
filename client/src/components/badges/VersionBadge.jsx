import React from 'react';
import {Badge} from 'react-bootstrap';
import {IoIosGitMerge} from 'react-icons/io';

const VersionBadge = ({version, ...props}) =>
    <Badge className='p-1' bg='dark'>
        <IoIosGitMerge size='16px' color='white'/>
        <span className='ms-1 text-regular text-light'>
            {version}
        </span>
    </Badge>

export default VersionBadge;