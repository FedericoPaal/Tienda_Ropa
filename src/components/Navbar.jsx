import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cart }) {
  const totalItems = cart.reduce((s, p) => s + (p.quantity || 0), 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
      </div>

      <div className="nav-right">
        <Link to="/products" className="cart-link">Carrito ({totalItems})</Link>
      </div>
    </nav>
  );
}
