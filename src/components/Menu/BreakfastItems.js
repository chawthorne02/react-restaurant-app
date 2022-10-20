import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import INITIAL_ITEMS from './Menu';
import { useState } from 'react';
import Checkout from './Checkout';
import OrderItems from './Checkout';
import { nanoid } from "nanoid";



const INITIAL_ITEMS = [{
  id: 1,
  title: 'Pancakes',
  price: 5.99,
  tag: 'Breakfast',
  img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
  id: 2,
  title: 'Omelette',
  price: 10.99,  
  tag: 'Breakfast',
  img: 'https://images.unsplash.com/photo-1640719178276-f322d7364aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
},
{
  id: 3,
  title: 'French Toast',
  price: 7.99,
  tag: 'Breakfast',
  img: 'https://images.unsplash.com/photo-1597200284813-aeddf0653f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80'   
},
{
  id: 4,
  title: 'Waffles',
  price: 8.99,
  tag: 'Breakfast',
  img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80'
},
{
  id: 5,
  title: 'Salad',
  price: 6.99,
  tag: 'Lunch',
  img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2790&q=80' 
},
{
  id: 6,
  title: 'Club Sandwich',
  price: 11.99,
  tag: 'Lunch',
  img: 'https://images.unsplash.com/photo-1567234669013-216f3a40e02e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
  id: 7,
  title: 'Chicken Sandwich',
  price: 14.99,
  tag: 'Lunch',
  img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
},
{
  id: 8,
  title: 'Burger',
  price: 17.99,
  tag: 'Lunch',
  img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
}
]

// const INITIAL_ORDER = [];









function BreakfastItems(props) {
  
  
  
  const [menuItems, setMenuItems] = useState(INITIAL_ITEMS);
  const [orderItems, setOrderItems] = useState([]);


  const breakfast = INITIAL_ITEMS.filter(item => {
    return item.tag === 'Breakfast';
  });
  const lunch = INITIAL_ITEMS.filter(item => {
    return item.tag === 'Lunch';
  });
  
  // const addOrder = (newEntree) => {
  //   setMenuItem([newEntree, ...menuItem]);
  // };
  

  const addMenuItem = (newOrderItem) => {
    setOrderItems([...orderItems, newOrderItem]);
  };  
  
  const clearOrder = () => {
    setOrderItems([])
  }

  const menuList = breakfast.map(entree => {
    return (
      
     <li key={entree.id} className="card-li">
      <Card className="card">
        <Card.Img className="menu-img" variant="top" src={entree.img} />
        <Card.Body className="card-body">
          <Card.Title>{entree.title}</Card.Title>
          <p>{entree.price}</p>
          <Button type="button" className='order-btn' onClick={() => addMenuItem(entree)}>
            Add to Order
          </Button>
        </Card.Body>
      </Card>
    </li>
    )
  })
    
  return (
    <>
     <ul className="menu-cards">

     {menuList}
     </ul>
    
     <div className="checkout-side">
           
      <Checkout orderItems={orderItems} setOrderItems={setOrderItems}/>
            
        </div> 
     </>
    );
  
  }









  export default BreakfastItems;