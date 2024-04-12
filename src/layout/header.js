import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from 'react-icons/fa';
import "./css/Header.css";

function Header(props) {
  const { items } = props;
  

  // Calcular la cantidad total de items en el carrito
  const products = [
    { url: "/producto1", title: "Producto 1", quantity: 3 },
    { url: "/producto2", title: "Producto 2", quantity: 1 },
    { url: "/producto3", title: "Producto 3", quantity: 2 }
  ];
  const itemCount = products.reduce((total, item) => total + item.quantity, 0);

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
                      <Nav.Link href={item.url}>{item.title}</Nav.Link>
                    </li>
                  ))}
                <Button variant="success">
                  <FaShoppingCart className="mx-1"/> 
                Ir Al carrito 
                  <span className="item-count mx-1 px-1">{itemCount}</span>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
