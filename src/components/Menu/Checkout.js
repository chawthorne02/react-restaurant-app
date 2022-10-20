import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import INITIAL_ITEMS from "./Menu";

function OrderItems({ clearOrder, ...props }) {
  const [show, setShow] = useState(false);
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");

  const [orderItems, setOrderItems] = useState([...props.orderItems]);

  useEffect(() => {
    setOrderItems(props.orderItems);
  }, [props]);

  const addTotal = () => {
    let total = 0;
    orderItems.forEach((order) => {
      total += order.price;
    });
    return total.toFixed(2);
  };

  const handleShow = () => setShow(true);

  const addOrder = (order, customer, phone) => {
    let finalOrder = { order, customer, phone };
    alert("Your order has been submitted, thank you for your business!");
    console.log(finalOrder);
    // setSubmittedOrders([...submittedOrders, finalOrder]);
    clearOrder();
  };

  const submitOrder = () => {
    setShow(false);
    

    const newOrder = {
      order: props.orderItems,
      phone,
      customer,
    } 

    setCustomer("");
    setPhone("");
    props.setOrderItems([]);

    const orders = JSON.parse(localStorage.getItem('brunchSpotOrders')) || [];
    orders.push(newOrder);
    localStorage.setItem('brunchSpotOrders', JSON.stringify(orders));
   
  };


  const orderList = props.orderItems.map((order, index) => {
    return (
      <ListGroup.Item
        key={index}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{order.title}</div>
          {order.price}
        </div>
      </ListGroup.Item>
    );
  });

  return (
    <>
      <div className="listGroupOrders">
        <ListGroup as="ol" numbered>
          <header className="order-header">Your Order</header>
          {orderList}
        </ListGroup>
        <p className="order-total"> Total - ${addTotal()} </p>
        <Button
          className="complete-order-btn text-center"
          variant="primary"
          type="button"
          onClick={handleShow}
        >
          Complete Order
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Complete Your Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  required={true}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  required={true}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="submit-btn"
              variant="primary"
              onClick={submitOrder}
            >
              Submit Order
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default OrderItems;
