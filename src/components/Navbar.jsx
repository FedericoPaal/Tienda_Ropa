import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import { FaHome, FaBox, FaShoppingCart, FaUserShield, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const totalItems = cart.reduce((s, p) => s + (p.quantity || 1), 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/"><FaHome /> Inicio</Link>
        <Link to="/products"><FaBox /> Productos</Link>
        {user && <Link to="/admin"><FaUserShield /> Admin</Link>}
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link"><FaShoppingCart /> Carrito ({totalItems})</Link>
        {user ? (
          <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        ) : (
          <Link to="/login"><FaSignInAlt /> Login</Link>
        )}
      </div>
    </nav>
  );
}

