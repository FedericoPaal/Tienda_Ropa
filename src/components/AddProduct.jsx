import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || price <= 0 || description.length < 10) {
      setError('Por favor, complete todos los campos correctamente.');
      return;
    }
    addProduct({ title: name, price, description });
    setName('');
    setPrice('');
    setDescription('');
    setError('');
  };

  return (
    <div>
      <h3>Agregar Producto</h3>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddProduct;
