import React from 'react'
import logo from '../../assets/images/diet.png'
import '../00 - Navbar/Navbar.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import NavPlan from '../../assets/images/Navbar/plan.png';
import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progress from '../../assets/images/Navbar/progress.png';
import Personalize from '../../assets/images/Navbar/personalize.png';
import Integration from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';
import Calculator from '../../assets/images/Navbar/calculator.png';
import Article from '../../assets/images/Navbar/article.png';
import Help from '../../assets/images/Navbar/food-delivery.png';


const Navbars = () => {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            Diet Planner
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            className="bg-dark color-white"
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='navbarBrand'>
                                    User Name
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=' bg-dark navbar-dark'>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        <img
                                            alt=""
                                            src={NavPlan}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Meal Planner
                                    </Nav.Link>
                                    <NavDropdown
                                        title="Diet Plans"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action2">
                                            <img
                                                alt=""
                                                src={DietPlan}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Nutrition Info
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">
                                            <img
                                                alt=""
                                                src={Target}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Goals
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            <img
                                                alt=""
                                                src={Progress}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Progress Tracking
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">
                                            <img
                                                alt=""
                                                src={Personalize}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Personalize Diet
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">
                                            <img
                                                alt=""
                                                src={Integration}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Integration with Fitness
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action7">
                                            <img
                                                alt=""
                                                src={Shopping}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Shopping
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action8">
                                        <img
                                            alt=""
                                            src={Calculator}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Calculator</Nav.Link>
                                    <Nav.Link href="#action9">
                                        <img
                                            alt=""
                                            src={Article}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Articles</Nav.Link>
                                    <Nav.Link href="#action10">
                                        <img
                                            alt=""
                                            src={Help}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Help</Nav.Link>
                                    <Button variant="success">Login</Button>{' '}
                                    <Button variant="danger">Logout</Button>{' '}
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navbars