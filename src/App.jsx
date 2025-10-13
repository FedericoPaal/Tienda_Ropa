import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import ProductDetail from './pages/ProductDetail'; // ✅ nuevo componente

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  return (
    // si estamos en la ruta raíz, agregamos la clase `home-full` para que el main ocupe todo el ancho
    <div className={`app-container ${location.pathname === '/' ? 'home-full' : ''}`}>
      <Navbar cart={cart} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} /> {/* ✅ navegación */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Mostrar carrito en todas las rutas excepto en Home (ruta '/') */}
      {useLocation().pathname !== '/' && (
        <aside className="cart-aside">
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        </aside>
      )}
    </div>
  );
}

export default App;