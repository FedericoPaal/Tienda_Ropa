import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import AddProduct from '../components/AddProduct';
import Modal from '../components/Modal';
import EditProduct from '../components/EditProduct';

const Admin = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setProductToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      closeDeleteModal();
    }
  };

  const openEditModal = (product) => {
    setProductToEdit(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setProductToEdit(null);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h2>Administración de Productos</h2>
      <AddProduct />
      <hr />
      <h3>Lista de Productos</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => openEditModal(product)} aria-label={`Editar producto ${product.title}`}>Editar</button>
            <button onClick={() => openDeleteModal(product)} aria-label={`Eliminar producto ${product.title}`}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <h3>Confirmar Eliminación</h3>
        <p>
          ¿Estás seguro de que deseas eliminar el producto "{productToDelete?.title}"?
        </p>
        <button onClick={handleDelete}>Confirmar</button>
        <button onClick={closeDeleteModal}>Cancelar</button>
      </Modal>

      {productToEdit && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <EditProduct product={productToEdit} onclose={closeEditModal} />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
