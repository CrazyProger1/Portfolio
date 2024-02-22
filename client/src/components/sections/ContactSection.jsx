import React from 'react';
import ContactMe from '../forms/ContactMe';
import {Button} from 'react-bootstrap';

const ContactSection = () => {
    return (
        <div>
            <ContactMe/>
            <div className='d-flex justify-content-center my-5'>
                <Button style={{color: 'white', borderBottom: '1px solid #FFFFFF', borderRadius: 0}}>Send</Button>
            </div>

        </div>

    );
};

export default ContactSection;