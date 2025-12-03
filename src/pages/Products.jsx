import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import { ProductGrid, ProductCard } from '../components/ProductStyles'; // Import styled components

export default function Products() {
  const { products, loading, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="products">
      <SEO
        title="Productos - Mi E-commerce"
        description="Explora nuestro catálogo de productos."
      />
      <h2>Productos</h2>
      <Search setSearchTerm={setSearchTerm} />
      <ProductGrid>
        {currentProducts.map((p) => (
          <ProductCard key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <div className="buttons">
              <button onClick={() => addToCart(p)} aria-label={`Agregar ${p.title} al carrito`}>Agregar</button>
              <button><Link to={`/products/${p.id}`} aria-label={`Ver detalles de ${p.title}`}>Ver detalles</Link></button>
            </div>
          </ProductCard>
        ))}
      </ProductGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
