import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../components/Cart.js";

import "./css/Header.css";

function Header(props) {
  const { items } = props;
  return (
    <div className="Header">
      
      <Cart/>
        <div className="Logo  pt-4 ">
          <img src="images/elzen/ELZEN_white_logo.png" alt="logo" />
        </div>

        <div className="typo">
          <img
            className="adjust_image"
            src="images/elzen/ELZEN_white_typo.png"
            alt="logo"
          />
        </div>

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
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Nav>

    </div>
  );
}

export default Header;
