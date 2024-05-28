import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer(props) {
  const { items } = props;

  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <Container>
        <Row>
          <Col>Siganme en redes sociales:</Col>
        </Row>
        <Row>
          <Col>
            <a
              className="mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="https://linktr.ee/elzenmusic"
            >
              Linktree
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
