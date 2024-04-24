import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectRequestedTabs,
  selectTotal,
  removeTabFromCart,
  checkout,
  handleEmailChange,
  selectEmail,
  selectEmailValid,
} from "../features/counter/counterSlice";

function CartScreen() {
  const requestedTabs = useSelector(selectRequestedTabs);
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const navigate = useNavigate();
  const email = useSelector(selectEmail);
  const emailValid = useSelector(selectEmailValid);

  useEffect(() => {
    if (requestedTabs.length === 0) {
      navigate("/tabs");
    }
  }, [requestedTabs, navigate]);

  const handleEmail = (e) => {
    dispatch(handleEmailChange(e.target.value));
  };
  const handleCheckout = () => {
    dispatch(checkout(email));
    navigate("/checkout");
  };

  return (
    <Container className="text-align">
      <h1 className="py-5">Carrito </h1>
      <InputGroup className="mb-3" hasValidation>
        <InputGroup.Text id="basic-addon1">Email: </InputGroup.Text>
        <Form.Control
          placeholder="Favor de proporcionar su correo electrónico"
          aria-label="Email"
          aria-describedby="basic-addon1"
          value={email}
          onChange={handleEmail}
          isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">
          {email.length > 0 &&
            !emailValid &&
            "Por favor ingresa un correo electrónico válido."}
        </Form.Control.Feedback>
      </InputGroup>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo de la Tablatura</th>
            <th>Precio</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {requestedTabs.map((requestedTab, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{requestedTab.title}</td>
              <td>{`$ ${requestedTab.price} MXN`}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeTabFromCart(requestedTab))}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1 className="py-5">Total: {`$ ${total.toFixed(2)} MXN`}</h1>
      <Button
        variant="info"
        className="my-5"
        onClick={handleCheckout}
        disabled={!emailValid}
      >
        Comprar
      </Button>
    </Container>
  );
}

export default CartScreen;
