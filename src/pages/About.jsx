import React from "react";
import NavBar from "../components/nav/Nav";
import Footer from "../components/nav/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <Container className="py-lg-5 py-sm-4">
          <Row>
            <Col md={6}>
              <h3>
                Best luxury Hotel in London since 2000. Our hotel has been
                present for over 20 years.
              </h3>
            </Col>
            <Col md={6}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                tempore sapiente, distinctio perferendis voluptas consequatur
                quaerat incidunt. Similique, officia! Dolorum fugiat et aliquam
                necessitatibus quas reiciendis, totam voluptatibus deleniti
                tempore doloribus dolor modi, ab facilis quam officiis ipsam
                doloremque.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veritatis incidunt iste totam, consequuntur minus
                assumenda commodi sint asperiores. Voluptatibus incidunt alias.
              </p>
            </Col>
          </Row>
          <ul className="d-flex mt-5">
            <li className="about-pic">
              <img calssName="rounded" alt="" src={about1}></img>
            </li>
            <li className="about-pic">
              <img calssName="rounded" alt="" src={about2}></img>
            </li>
            <li className="about-pic">
              <img calssName="rounded" alt="" src={about3}></img>
            </li>
          </ul>
        </Container>
      </section>
      <sectio className="about-us-2">
        <div className="about-us-bg">
          <div className="about-bg">
            <div className="d-flex flex-column align-items-center filter">
              <Container>
                <h4 className="mb-md-5 mb-4">
                  Doing the right thing, at the right time
                </h4>
                <Row>
                  {/* 明天做描述 */}
                  <Col md={6} calssName="">
                    <div className="about-feature">
                      <div className="icon">
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Welcome Drink</h5>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Unde pariatur saepe illum et aliquam.
                          Consectetur ex earum ipsum modi eveniet.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="">
                    <div className="about-feature">
                      <div className="icon">
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Welcome Drink</h5>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Unde pariatur saepe illum et aliquam.
                          Consectetur ex earum ipsum modi eveniet.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mt-4">
                    <div className="about-feature">
                      <div className="icon">
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Welcome Drink</h5>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Unde pariatur saepe illum et aliquam.
                          Consectetur ex earum ipsum modi eveniet.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mt-4">
                    <div className="about-feature">
                      <div className="icon">
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Welcome Drink</h5>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Unde pariatur saepe illum et aliquam.
                          Consectetur ex earum ipsum modi eveniet.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </sectio>
      <section className="about-us-stats">
        <div className="py-5">
          <Container className="py-lg-3">
            <Row className="align-items-center">
              <Col lg={6}>
                <h3 className="title-big">
                  We have a great funfact! Relax & Enjoy your Holiday
                </h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem itaque, quisquam ab neque libero delectus fugiat eum
                  facilis sit assumenda! Suscipit maxime animi mollitia sit enim
                  quam facere reprehenderit tempora.
                </p>
              </Col>
              <Col lg={6} className="text-center">
                <Row>
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="stats-card">
                      <span className="fa fa-users"></span>
                      <h3>1200+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </Col>
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="stats-card">
                      <span className="fa fa-camera"></span>
                      <h3>18k+</h3>
                      <p>Luxury Rooms</p>
                    </div>
                  </Col>
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="stats-card">
                      <span className="fa fa-briefcase"></span>
                      <h3>158</h3>
                      <p>Employers</p>
                    </div>
                  </Col>
                  <Col sm={6} className="ps-2 mt-4">
                    <div className="stats-card">
                      <span className="fa fa-comments"></span>
                      <h3>879+</h3>
                      <p>Services</p>
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

const About = () => {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
