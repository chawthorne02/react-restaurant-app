import MenuItems from "./MenuItems";
import Checkout from "./Checkout";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import BreakfastItems from "./BreakfastItems";
import  LunchItems from "./LunchItems";


const INITIAL_STATE = {
    tag: "",
    title: "",
  };
  

function MenuList() { 
    const [menuFilter, setMenuFilter] = useState(INITIAL_STATE);
    const [menuFilterList, setMenuFilterList] = useState([]);
    const [filter, setFilter] = useState(); 

    const[all, setAll] = useState(true);
  const[breakfast, setBreakfast] = useState(false);
  const[lunch, setLunch] = useState(false);



const displayAll = () => {
  setAll(true);
  setBreakfast(false);
  setLunch(false)
}

const displayBreakfast = () => {
  setAll(false);
  setBreakfast(true);
  setLunch(false)
}

const displayLunch = () => {
  setAll(false);
  setBreakfast(false);
  setLunch(true)
}
    
    const handleInput = (e) => {
        setMenuFilter({ ...menuFilter, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setMenuFilterList([...menuFilterList, menuFilter]);
        setMenuFilter(INITIAL_STATE);
      };

      const menuFilterHTML = menuFilterList
    .filter((menuFilter) => (filter ? menuFilter.tag === filter : menuFilter))
    .map((menuFilter, index) => (
      <li key={index}>
        <a href={menuFilter.tag}>{menuFilter.title}</a>
      </li>
    ));

    // const tagList = [...new Set(setMenuFilterList.map((menuFilter) => menuFilter.tag))];
  // const tagListHTML = tagList.map((tag, index) => (
  //   <li>
  //     <Button 
  //     key={index}
  //      onClick={() => setFilter(tag)}>
  //       {tag}
  //     </Button>
  //   </li>
  // ));
    let menuComponent;
    
      if (all){
         menuComponent = <MenuItems />;
      } else if (breakfast) {
        menuComponent = <BreakfastItems />;
      } else if (lunch) {
        menuComponent = <LunchItems />;
      }
    return (
    
     <section className="menu">
        <Nav className="filter-btns">  
        <Button value="all" variant="primary" className="all-btn" onClick={() => displayAll()}>All</Button>
        <Button value="lunch" variant="primary" className="lunch-btn" onClick={() => displayLunch()}>Lunch</Button>
        <Button value="breakfast" variant="primary" className="breakfast-btn" onClick={() => displayBreakfast()}>Breakfast</Button>
        {/* {tagListHTML} */}
      </Nav>
        <div className="menu-side">
            <ul className="menu-cards">
            
              {menuComponent}
            
            </ul>
        </div>
        
       
     </section>

     
    );
 }   
  




  export default MenuList;