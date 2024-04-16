import { Counter } from "../features/counter/Counter";
import { increment, fetchProductsAsync, selectTabs, addTabToCart, selectTabButtonTitle } from "../features/counter/counterSlice";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function Tabs() {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTabs);



  useEffect(() => {
   dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Container className="text-align pb-5">
      <h1 className="py-5">Tabs/Sheets </h1>
      <Row xs={1} md={2} className="g-2">
        {tabs.map((tab, idx) => (
          <Col xs={12} lg={3} key={idx}>
            <Card>
              <Card.Img variant="top" src={tab.src} />
              <Card.Body>
                <Card.Title>{tab.title}</Card.Title>
                <Card.Text>
                {tab.price}
              </Card.Text>
                <Button variant={tab.variant} onClick={() => dispatch(addTabToCart(tab))}>
                  {tab.buttonTitle}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tabs;
