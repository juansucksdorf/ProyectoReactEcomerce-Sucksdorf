import { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import Auth from '../Auth';
import './NavBar.css';

const NavBar = () => {
  const [showAuth, setShowAuth] = useState(false);

  const handleToggleAuth = () => {
    setShowAuth(!showAuth); 
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="Brand">Ecommerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/category/celulares" className="nav-link">Celulares</Link>
        <Link to="/category/tablets" className="nav-link">Tablets</Link>
        <Link to="/category/notebooks" className="nav-link">Notebooks</Link>
      </Nav>
      <div className="auth-container"> 
        {showAuth && <Auth />}
      </div>
      {!showAuth && ( 
        <button onClick={handleToggleAuth}>Iniciar sesión</button>
      )}
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
