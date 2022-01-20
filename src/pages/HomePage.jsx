import React from 'react'
import NavBar from '../components/nav/Nav'
import Couresl from '../components/homepage/Crousel'
import Footer from '../components/nav/Footer'
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import top from '../assets/top.jpg';
import bottom from '../assets/bottom.jpg';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import styled from "styled-components";
import './Hompage.css'


// 目前看來用 styled 客製化 react-bootstrap 細節是比較可行的做法
const FormControl = styled(Form.Control)`
    font-size: 12px;
    padding: 15px;
`
const FormSelect = styled(Form.Select)`
    font-size: 13px;
    padding: 15px;
`

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Couresl/>
            <CheckForm/>
            <About/>
            <BestRoom/>
            <Footer/>
        </>
    )
}


const CheckForm = () => {
    return (
        <section calssName="form py-5">
           <div className="form-main">
                <div className="container pt-lg-3 pb-lg-5">
                    <h3 className="title-small">Check Availability</h3>
                    <Form action="" method="post" class="signin-form">
                        <div className="row">
                            <div className="form-input col-md-4 col-sm-6 mt-3">
                                <Form.Label>Check-in Date</Form.Label>
                                <FormControl  type="date" name="" placeholder="Date" required=""/>
                            </div>
                            <div className="form-input col-md-4 col-sm-6 mt-3">
                                <Form.Label>Check-out Date</Form.Label>
                                <FormControl type="date" name="" placeholder="Date" required=""/>
                            </div>
                            <div className="form-input col-md-4 col-sm-6 mt-3">
                                <Form.Label>Adults</Form.Label>
                                <FormSelect className="selectpicker">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </FormSelect>
                            </div>
                            <div className="form-input col-md-4 col-sm-6 mt-3">
                                <Form.Label>Children</Form.Label>
                                <FormSelect className="selectpicker">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </FormSelect>

                            </div>
                            <div className="form-input col-md-4 col-sm-6 mt-3">
                                <Form.Label>Price </Form.Label>
                                <FormControl type="text" name="" placeholder="Max Price ($)" required />
                            </div>
                            <div class="bottom-btn col-md-4 col-sm-6 mt-3">
                                <Form.Label>Check availability </Form.Label>
                                <Button className="btn btn-style btn-secondary w-100 px-2">Check Availability</Button>
                            </div>
                        </div>
                    </Form>
                </div>
           </div>
        </section>
    )
}

//各區之間的間隔還要再調整 
const About = () =>{
    return (
        <section className="about py-5">
            <Container className="py-sm-4">
                <Row>
                    <Col lg={6} className="about-left mb-md-0 mb-5">
                        <h3 class="title-big">Relax in our Resort</h3>
                        <h5>We make the best for all our customers.</h5>
                        <p className="mt-3">Duis nisi sapien, elementum finibus fermentum eget, aliquet leo. Mauris hendrerit vel ex.
                            Quisque vitae luctus massa. Phasellus sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
                            Integer ultrices finibus sed nisi. in convallis felis dapibus sit amet. Lorem ipsum dolor, sit 
                            amet consectetur adipisicing elit. Totam, porro! Lorem ipsum dolor sit amet.</p>
                        <Button variant="secondary">Learn About Us</Button>
                    </Col>
                    <Col lg={6} className="position-relative mt-lg-0 mt-5">
                        <img src={top} alt="" className="img-fluid img-border mt-4"></img>
                        <img src={bottom} alt="" className="img-fluid position-absolute img-position"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


const BestRoom = () =>{
    return(
    <section className="best-rooms bg-gray-light py-5">
        <Container className="py-lg-5 py-sm-4">
            <h3 className="title-big text-center">Best Rooms</h3>
            <Row className="d-flex align-items-center">
                <Col lg={6}>
                    <Card calssName="maghny-grid">
                        {/* <Figure className="effect-lily"> */}
                            <Card.Img variant="top" className="img-fluid" alt="" src={room1} />
                            {/* <Figure.Caption className="w3set-hny"> 
                                <div>
                                    <h4 class="top-text">Luxury Hotel and Best Resort
                                        <span>Peaceful Place to stay</span></h4>
                                    <p>From 20$ </p>
                                </div>
                            </Figure.Caption>
                        </Figure> */}
                        
                        <Card.Body calssName="room-info">
                            <Card.Title>Luxury Hotel</Card.Title>
                            <ul class="d-flex mb-3">
                                <li className="me-3"><span class="fa fa-users"></span> 2 Guests</li>
                                <li className="me-3"><span class="fa fa-bed"></span> Double bed</li>
                                <li className="me-3"><span class="fa fa-bed"></span> 15sqft</li>
                            </ul>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="secondary">Book now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="mt-lg-0 mt-4">
                    <div className="rooms d-flex flex-wrap">
                        <img className="rounded mb-4 me-4" alt="" src={room2}/>
                        <img className="rounded mb-4 me-4" alt="" src={room3}/>  
                        <img className="rounded mb-4 me-4" alt="" src={room2}/>
                        <img className="rounded mb-4 me-4" alt="" src={room3}/>  
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
export default HomePage
