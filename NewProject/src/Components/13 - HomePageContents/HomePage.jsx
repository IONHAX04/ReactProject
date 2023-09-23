import React from 'react'

import '../13 - HomePageContents/HomePage.css';

import { Col, Row, Button, Accordion } from 'react-bootstrap'
import BgImg from '../../assets/images/Home/sides.png';

import { content } from '../13 - HomePageContents/Accordions/content';
import AccordionsContent from '../13 - HomePageContents/Accordions/AccordionsContent.jsx';


export default function HomePage() {
    return (
        <div>
            <Row className='startPage'>
                <Col lg={5} className='mainPageContent'>
                    <h2>Your Personal Diet Planner</h2>
                    <h6>Embark on a journey to a healthier you with our cutting-edge diet planner platform. At Diet Planner, we understand that achieving your fitness and nutrition goals is not just about what you eat; it's about having the right guidance and support along the way.</h6>
                    <Button variant="outline-secondary">Get Start Your Journey</Button>{' '}
                </Col>
                <Col lg={7} className='mainPageContent'>
                    <img
                        src={BgImg}
                        className='img-fluid'
                    ></img>
                </Col>
            </Row>

            <div className="accordions">
                <h2>Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    {content.map((key) => {
                        return <AccordionsContent details={key} key={key.id}/>
                    })}
                </Accordion>
            </div>

            <div className="plans">
                <h2>Custom Diet Plans For Your Needs</h2>
            </div>
        </div>
    )
}
