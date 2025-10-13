import React from "react";

export default function ProductList({ products = [], addToCart }) {
  if (!products.length) return <p>No hay productos para mostrar.</p>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p className="price">${p.price}</p>
          <button onClick={() => addToCart(p)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}
