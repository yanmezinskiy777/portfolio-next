import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";

const TYPED = [
  "Coding",
  "React.js",
  "Node.js",
  "Next.js",
  "Gastby.js",
  "Bootstrap",
];

export class index extends Component {
  render() {
    return (
      <Base>
        <BasePage>
          <div className="main-section">
            <div className="background-image">
              <img src="/images/background-index.png" />
            </div>
            <Container>
              <Row>
                <Col md="6">
                  <div className="hero-section">
                    <div className={`flipper`}>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                        <img className="image" src="/images/section-1.png" />
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                    <h1>
                      Welcome to the portfolio website of Filip Jerga. Get
                      informed, collaborate and discover projects I was working
                      on through the years!
                    </h1>
                    <Typed
                      strings={TYPED}
                      className="self-typed"
                      typeSpeed={70}
                      backSpeed={70}
                      showCursor
                      backDelay={1000}
                      startDelay={0}
                      cursorChar={`|`}
                      loop
                    ></Typed>
                  </div>
                  <div className="hero-welcome-bio">
                    <h1>Let's take a look on my work.</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </BasePage>
      </Base>
    );
  }
}

export default index;
