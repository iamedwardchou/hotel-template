import React from "react";
import NavBar from "../components/nav/Nav";
import Footer from "../components/nav/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";

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
              <Col lg={4} md={6}></Col>
              <Col lg={4} md={6}></Col>
              <Col lg={4} md={6}></Col>
              <Col lg={4} md={6}></Col>
              <Col lg={4} md={6}></Col>
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
