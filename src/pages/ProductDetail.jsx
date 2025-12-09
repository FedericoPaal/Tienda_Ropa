import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import PageLayout from '../components/PageLayout';

export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (loading) return <PageLayout title="Producto"><p>Cargando producto...</p></PageLayout>;
  if (error) return <PageLayout title="Producto"><p>Error: {error}</p></PageLayout>;
  if (!product) return <PageLayout title="Producto"><p>Producto no encontrado</p></PageLayout>;

  return (
    <PageLayout title={product.title}>
      <section className="product-detail">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          <button> <Link to="/products" className="back-link">← Volver a productos</Link> </button>
        </div>
      </section>
    </PageLayout>
  );
}
