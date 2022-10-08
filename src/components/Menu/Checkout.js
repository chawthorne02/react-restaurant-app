import React from 'react';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
// import INITIAL_ITEMS from './Menu';






function OrderItems(props) {
  
  
  
  const [orderItem, setOrderItem] = useState(props.usercolor);
  

  
  
  
  
//   const orderList = orderItem.map( ( {title} ) => {
//     return <p key={title}>{title}</p>
// })

  
  
const orderList = orderItem.map(order => {
    return (
      
      <li key={order.title} className="card-li">
      <Card className="card">
        <Card.Body className="card-body">
          <Card.Title>{order.title}</Card.Title>
          <p>{order.price}</p>
        </Card.Body>
      </Card>
    </li>
    )
  })
    
  return (
    <>
     {orderList} 
     </>
    );
  }









  export default OrderItems;