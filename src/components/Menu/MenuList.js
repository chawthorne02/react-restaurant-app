import MenuItems from "./MenuItems";
import Checkout from "./Checkout";


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