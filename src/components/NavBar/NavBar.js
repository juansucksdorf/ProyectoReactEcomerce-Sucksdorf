import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="Brand">Ecommerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/category/celulares" className="nav-link">Celulares</Link>
        <Link to="/category/tablets" className="nav-link">Tablets</Link>
        <Link to="/category/notebooks" className="nav-link">Notebooks</Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
