import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="products">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <div className="buttons">
              <button onClick={() => addToCart(p)}>Agregar</button>
              <button> <Link to={`/products/${p.id}`}>Ver detalles</Link> </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
