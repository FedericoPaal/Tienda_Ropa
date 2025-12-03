import React, { useContext, useState } from 'react'; // Added useState
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import { FaHome, FaBox, FaShoppingCart, FaUserShield, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars, FaTimes

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false); // Close menu on logout
  };

  const totalItems = cart.reduce((s, p) => s + (p.quantity || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setIsOpen(false)}>Mi E-commerce</Link>
      </div>

      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <div className="nav-left">
          <Link to="/" onClick={() => setIsOpen(false)}><FaHome /> Inicio</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}><FaBox /> Productos</Link>
          {user && <Link to="/admin" onClick={() => setIsOpen(false)}><FaUserShield /> Admin</Link>}
        </div>

        <div className="nav-right">
          <Link to="/cart" className="cart-link" onClick={() => setIsOpen(false)}><FaShoppingCart /> Carrito ({totalItems})</Link>
          {user ? (
            <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}><FaSignInAlt /> Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

