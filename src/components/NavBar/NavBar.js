import CartWidget from "../CartWidget/CartWidget"
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        
            <h2 className="Brand">Ecomerce</h2>
            <div>
            <Button variant="success">Celulares</Button>{' '}
            <Button variant="success">Tablets</Button>{' '}
            <Button variant="success">Notebooks</Button>{' '}
            </div>
            <CartWidget/>
        
        </Navbar>
    )
}
export default NavBar