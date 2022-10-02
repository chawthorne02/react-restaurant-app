import MenuItems from "./MenuItems";
import Checkout from "./Checkout";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function MenuList() { 
    


    
    return (
     <section className="menu">
        <div>
            <ul>
                <MenuItems />
            </ul>
        </div>
        <div>
            <Checkout />
        </div>
     </section>

     
    );
 }   
  




  export default MenuList;