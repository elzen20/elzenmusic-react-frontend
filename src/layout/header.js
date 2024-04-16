import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../components/cart.js"

import "./css/Header.css";

function Header(props) {
  const { items } = props;
  return (
    <div className="Header">
      <Container>
        <div className="Logo my-2 py-2">
          <img src="images/elzen/ELZEN_white_logo.png" alt="logo" />
        </div>

        <h1 className="mt-4">
          <img
            className="adjust_image"
            src="images/elzen/ELZEN_white_typo.png"
            alt="logo"
          />
        </h1>

        <Nav className="justify-content-center Menu">
          <Navbar variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {items &&
                  items.map((item, key) => (
                    <li key={key}>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
               <Cart/>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
