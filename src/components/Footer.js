import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";


function Footer() {
  let date = new Date();
  //let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Amine El Idrissi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="https://github.com/amyne11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        {/*      <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amine_elidrisssi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                
                
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:amyne.elidrissi@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <AiFillMail />
  </a>
</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
