import React from "react";
import NavBar from "../components/nav/Nav";
import Footer from "../components/nav/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import facilities from '../assets/facilities.jpg';

const OurServices = () => {
  return (
    <>
      <section className="services-block">
        <div className="py-5">
          <Container className="py-lg-5 py-sm-4">
            <Row>
              <Col lg={4} md={6}>
                <h3>Luxury Hotel Services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  modi adipisci velit deserunt asperiores officiis recusandae
                  expedita mollitia nisi cumque? Atque eligendi quibusdam
                  aliquid beatae pariatur culpa quam consequatur dignissimos!
                </p>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="services-feature">
                  <div className="services-feature-icon">
                    <span className="fa fa-bed"></span>
                  </div>
                  <div className="services-feature-content">
                    <h6>Fitness Zone</h6>
                    <h3>Swimming Pool</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id voluptate perspiciatis aliquid aut vel perferendis
                      consequuntur recusandae? Sint soluta minus in odit
                      architecto quis aliquam saepe, eius laborum ducimus.
                      Error.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="services-feature">
                  <div className="services-feature-icon">
                    <span className="fa fa-bed"></span>
                  </div>
                  <div className="services-feature-content">
                    <h6>Fitness Zone</h6>
                    <h3>Swimming Pool</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id voluptate perspiciatis aliquid aut vel perferendis
                      consequuntur recusandae? Sint soluta minus in odit
                      architecto quis aliquam saepe, eius laborum ducimus.
                      Error.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="services-feature">
                  <div className="services-feature-icon">
                    <span className="fa fa-bed"></span>
                  </div>
                  <div className="services-feature-content">
                    <h6>Fitness Zone</h6>
                    <h3>Swimming Pool</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id voluptate perspiciatis aliquid aut vel perferendis
                      consequuntur recusandae? Sint soluta minus in odit
                      architecto quis aliquam saepe, eius laborum ducimus.
                      Error.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="services-feature">
                  <div className="services-feature-icon">
                    <span className="fa fa-bed"></span>
                  </div>
                  <div className="services-feature-content">
                    <h6>Fitness Zone</h6>
                    <h3>Swimming Pool</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id voluptate perspiciatis aliquid aut vel perferendis
                      consequuntur recusandae? Sint soluta minus in odit
                      architecto quis aliquam saepe, eius laborum ducimus.
                      Error.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mt-4 mt-md-0">
                <div className="services-feature">
                  <div className="services-feature-icon">
                    <span className="fa fa-bed"></span>
                  </div>
                  <div className="services-feature-content">
                    <h6>Fitness Zone</h6>
                    <h3>Swimming Pool</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id voluptate perspiciatis aliquid aut vel perferendis
                      consequuntur recusandae? Sint soluta minus in odit
                      architecto quis aliquam saepe, eius laborum ducimus.
                      Error.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="services-facilities">
        <div className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h2>Our Hotel Facilities</h2>
                <img className="img-fluid rounded" src={facilities} alt="" ></img>
              </Col>
              <Col md={6}>
                <Row className="text-center">
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="services-facilities-feature">
                      <span className="fas fa-tv"></span>
                      <h3>TV</h3>
                      <p>Satellite</p>
                    </div>
                  </Col>
                  <Col sm={6} className="pe-2 mt-4">
                    <div className="services-facilities-feature">
                      <span className="fas fa-motorcycle"></span>
                      <h3>Bike</h3>
                      <p>Rental</p>
                    </div>
                  </Col>
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="services-facilities-feature">
                      <span className="fas fa-utensils"></span>
                      <h3>Food</h3>
                      <p>Included</p>
                    </div>
                  </Col>
                  <Col sm={6} className="pe-2 mt-4">
                    <div className="services-facilities-feature">
                      <span className="fas fa-bed"></span>
                      <h3>Bed</h3>
                      <p>King size</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <NavBar />
      <OurServices />
      <Footer />
    </>
  );
};

export default Services;
