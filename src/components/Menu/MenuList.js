import MenuItems from "./MenuItems";
import Checkout from "./Checkout";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function MenuList() { 
    


    
    return (
     <section className="menu">
        <div className="menu-side">
            <ul className="menu-cards">
                <MenuItems />
            </ul>
        </div>
        <div className="checkout-side">
            <Checkout />
        </div>
     </section>

     
    );
 }   
  




  export default MenuList;