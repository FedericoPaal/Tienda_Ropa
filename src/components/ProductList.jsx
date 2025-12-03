import React from "react";
import { ProductGrid, ProductCard } from "./ProductStyles";

export default function ProductList({ products = [], addToCart }) {
  if (!products.length) return <p>No hay productos para mostrar.</p>;

  return (
    <ProductGrid>
      {products.map((p) => (
        <ProductCard key={p.id}>
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p className="price">${p.price}</p>
          <button onClick={() => addToCart(p)}>Agregar al carrito</button>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
