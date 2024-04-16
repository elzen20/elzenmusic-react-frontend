import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import {
  selectCount,
  selectRequestedTabs,
} from "../features/counter/counterSlice";
import { Link } from "react-router-dom";
function Cart() {
  var location = useLocation();
  
  const requestedTabs = useSelector(selectRequestedTabs);
  const [disabledCart, setDisabledCart] = useState(true);
  const [linkRoute, setLinkRoute] = useState("");
  useEffect(()=>{
    
    if(requestedTabs.length !==0){
      setDisabledCart(false)
      setLinkRoute("/cartScreen")
    }else{
      setLinkRoute(location.pathname)
      setDisabledCart(true)
    }
  }, [requestedTabs, location])

  return (
    <div>
      <Link to={linkRoute}>
        <Button disabled={disabledCart} variant="success">
          <FaShoppingCart className="mx-1" />
          Ir Al carrito
          <span className="item-count mx-1 px-1">{requestedTabs.length}</span>
        </Button>
      </Link>
    </div>
  );
}
export default Cart;
