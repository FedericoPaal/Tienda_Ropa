import React from "react";
import { ProductGrid, ProductCard } from "./ProductStyles";
import { FaShoppingCart } from "react-icons/fa"; // Import the icon
import { toast } from 'react-toastify'; // Import toast

export default function ProductList({ products = [], addToCart }) {
  if (!products.length) return <p>No hay productos para mostrar.</p>;

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} agregado al carrito!`);
  };

  return (
    <ProductGrid>
      {products.map((p) => (
        <ProductCard key={p.id}>
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p className="price">${p.price}</p>
          <button onClick={() => handleAddToCart(p)} aria-label={`Agregar ${p.title} al carrito`}>
            <FaShoppingCart style={{ marginRight: "8px" }} /> Agregar al carrito
          </button>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
