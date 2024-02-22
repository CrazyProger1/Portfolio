import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK} from "../../config/data";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";

const Footer = () =>
    <Container style={{minHeight: '80px'}}>
        <Row>
            <Col sm={6} className='text-center'>

                <p className='text-light' style={{fontFamily: 'Poppins-Regular'}}>+380 67 88 14 381</p>
                <p className='text-light' style={{fontFamily: 'Poppins-Regular'}}>crazyproger1@gmail.com</p>

            </Col>
            <Col sm={6} className='d-flex flex-row justify-content-center mt-3'>

                <Nav.Link href={TELEGRAM_LINK} target='_blank'>
                    <FaTelegram color='white' size='32px'/>
                </Nav.Link>

                <Nav.Link className='ms-3' href={LINKEDIN_LINK} target='_blank'>
                    <FaLinkedin color='white' size='32px'/>
                </Nav.Link>

                <Nav.Link className='ms-3' href={GITHUB_LINK} target='_blank'>
                    <FaGithub color='white' size='32px'/>
                </Nav.Link>
            </Col>
        </Row>
    </Container>

export default Footer;