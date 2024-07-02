import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <Container>
        <Row>
          <Col xs={{ span: 12}}>
            <a
              className="mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="https://linktr.ee/elzenmusic"
            >
              Redes Sociales
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            
           <Link className="link-light" to={"/privacy-policy"} >
           Política de Privacidad
           </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
