import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const EditProduct = ({ product, onclose }) => {
  const { updateProduct } = useContext(ProductContext);
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || price <= 0 || description.length < 10) {
      setError('Por favor, complete todos los campos correctamente.');
      return;
    }
    updateProduct(product.id, { title: name, price, description });
    onclose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar Producto</h3>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onclose}>Cancelar</button>
    </form>
  );
};

export default EditProduct;
