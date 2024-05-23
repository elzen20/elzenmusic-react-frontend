import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectRequestedTabs } from "../features/counter/counterSlice";
import { Link } from "react-router-dom";
function Cart() {
  var location = useLocation();

  const requestedTabs = useSelector(selectRequestedTabs);
  const [disabledCart, setDisabledCart] = useState(true);
  const [linkRoute, setLinkRoute] = useState("");
  useEffect(() => {
    if (requestedTabs.length !== 0) {
      setDisabledCart(false);
      setLinkRoute("/cartScreen");
    } else {
      setLinkRoute(location.pathname);
      setDisabledCart(true);
    }
  }, [requestedTabs, location]);

  return (
    <div className="d-flex justify-content-end fixed-top">
      <Link to={linkRoute}>
        <Button disabled={disabledCart}  className="d-flex flex-column cart">
        
          <span className="item-count mx-1">{requestedTabs.length}</span>
          <FaShoppingCart className="" />
        </Button>
      </Link>
    </div>
  );
}
export default Cart;
