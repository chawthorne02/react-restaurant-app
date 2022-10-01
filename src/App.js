import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() { 
  return (
    <Navbar>
    <Container fluid classname="navbar">
    {/* <img src={pancakes} alt='logo' /> */}
      <Navbar.Brand classname="title">The Brunch Spot</Navbar.Brand>
        <Nav.Link href="#welcome">Welcome</Nav.Link>
        <Nav.Link href="menu">Menu</Nav.Link>
        <Nav.Link href="#">Order Now</Nav.Link>
      
    </Container>
  </Navbar>
  );
}

export default App;
 