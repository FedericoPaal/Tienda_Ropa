import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const EditProduct = ({ product, onclose }) => {
  const { updateProduct } = useContext(ProductContext);
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image || '');
  const [imagePreview, setImagePreview] = useState(product.image || '');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(reader.result);
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
    updateProduct(product.id, { title: name, price, description, image });
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
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onclose} className="cancel-btn">Cancelar</button>
      </div>
    </form>
  );
};

export default EditProduct;
