import React from 'react';
import ContactMe from '../forms/ContactMe';
import styled from 'styled-components';


const ButtonSend = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-family: Poppins-Regular, serif;
  padding: 10px 10px;
  border: none;
  border-bottom: 1px solid gray;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    text-shadow: rgba(255, 255, 255, 0.85) 0 0 25px;
    border-bottom: 1px solid white;
  }
`;


const ContactSection = () => {
    const handleClick = () => {
        console.log('SENDING!')
    }
    return (
        <div>
            <ContactMe/>
            <div className='d-flex justify-content-center my-5'>
                <ButtonSend onClick={handleClick}>Send</ButtonSend>
            </div>

        </div>

    );
};

export default ContactSection;