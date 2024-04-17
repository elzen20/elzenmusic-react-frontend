import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import { selectRequestedTabs, selectTotal, removeTabFromCart } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function CartScreen() {
  const requestedTabs = useSelector(selectRequestedTabs);
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const navigate = useNavigate();
  useEffect(()=>{
    if(requestedTabs.length===0){
      navigate("/tabs")
    }
  },[requestedTabs, navigate])


  return (
    <Container className="text-align">
      <h1 className="py-5">Carrito </h1>
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
              <td>{ `$ ${requestedTab.price} MXN`}</td>
              <td><Button variant="danger" onClick={()=> dispatch(removeTabFromCart(requestedTab))}>Remover</Button></td>

            </tr>
          ))}
        </tbody>
      </Table>
      <h1 className="py-5">Total: {`$ ${total.toFixed(2)} MXN`}</h1>
      <Button variant="info" onClick={()=>navigate("/checkout")}>
          Comprar
      </Button>
    </Container>
  );
}

export default CartScreen;
