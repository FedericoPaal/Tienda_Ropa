import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Crear URL local para previsualizar
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(reader.result); // Guardar como base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || price <= 0 || description.length < 10 || !image) {
      setError('Por favor, complete todos los campos correctamente e incluya una imagen.');
      return;
    }
    addProduct({ title: name, price, description, image });
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
    setImagePreview('');
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
            placeholder="Nombre del producto"
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ej: 99.99"
            step="0.01"
            min="0"
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción del producto (mínimo 10 caracteres)"
          ></textarea>
        </div>
        <div>
          <label>Imagen del Producto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Vista previa del producto" />
              <p>Imagen cargada correctamente</p>
            </div>
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
