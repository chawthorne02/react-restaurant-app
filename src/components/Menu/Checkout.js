import React from 'react';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


// import INITIAL_ITEMS from './Menu';






function OrderItems(props) {
  
  
  
  // const [orderItems, setOrderItem] = useState([...props.orderItems]);
  

  
  
  
  
//   const orderList = orderItem.map( ( {title} ) => {
//     return <p key={title}>{title}</p>
// })

  
  
const orderList = props.orderItems.map(order => {
    return (
      
      <div key={order.title} className="accordion-li">
    <Accordion className="order" defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Body>
        <span className='title'>{order.title}</span>
        <span className='price'>{order.price}</span>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    )
  })
    
  return (
    <>
     {orderList} 
     </>
    );
  }









  export default OrderItems;