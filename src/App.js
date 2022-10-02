import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MenuList from './components/Menu/MenuList';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Contact from './components/Contact/Contact';



function App() { 
  
  const [page, setPage] = useState("a");
  let content;
  if (page === "a") {
    content = <WelcomePage />;
  } else if (page === "b") {
    content = <MenuList />;
  } else if (page === "c") {
    content = <Contact />;
  }
  
  
  return (
  <div className='Brunch-spot'>
    <Navbar>
    <Container fluid>
    {/* <img src={pancakes} alt='logo' /> */}
      <Navbar.Brand className="title">The Brunch Spot</Navbar.Brand>
        <Nav className="navigation">
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("a")}
            >
              Welcome
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("b")}
            >
              Menu 
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("c")}
            >
              Contact
            </Button>{" "}
        </Nav>     
      </Container>
    </Navbar>
    {content}
  </div>  
    



  );
}

export default App;
 