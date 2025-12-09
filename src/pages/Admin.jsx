import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import AddProduct from '../components/AddProduct';
import Modal from '../components/Modal';
import EditProduct from '../components/EditProduct';
import PageLayout from '../components/PageLayout';

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
    <PageLayout title="Administración de Productos">
      <div className="admin-container">
        <div className="admin-section">
          <h3>Agregar Nuevo Producto</h3>
          <AddProduct />
        </div>

        <div className="admin-section">
          <h3>Lista de Productos</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td className="actions-cell">
                    <button onClick={() => openEditModal(product)} className="edit-btn" aria-label={`Editar producto ${product.title}`}>Editar</button>
                    <button onClick={() => openDeleteModal(product)} className="delete-btn" aria-label={`Eliminar producto ${product.title}`}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <h3>Confirmar Eliminación</h3>
          <p>
            ¿Estás seguro de que deseas eliminar el producto "{productToDelete?.title}"?
          </p>
          <div className="modal-actions">
            <button onClick={handleDelete} className="delete-btn">Confirmar</button>
            <button onClick={closeDeleteModal} className="cancel-btn">Cancelar</button>
          </div>
        </Modal>

        {productToEdit && (
          <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
            <EditProduct product={productToEdit} onclose={closeEditModal} />
          </Modal>
        )}
      </div>
    </PageLayout>
  );
};

export default Admin;
