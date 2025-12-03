import React, { createContext, useState, useEffect } from 'react';
import { getProducts, addProduct as addProductApi, updateProduct as updateProductApi, deleteProduct as deleteProductApi } from '../api';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setError(null);
    } catch (error) {
      setError('Error al obtener los productos.');
      toast.error('Error al obtener los productos.');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = await addProductApi(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      toast.success('Producto agregado exitosamente.');
    } catch (error) {
      setError('Error al agregar el producto.');
      toast.error('Error al agregar el producto.');
    }
  };

  const updateProduct = async (productId, updatedFields) => {
    try {
      const updatedProduct = await updateProductApi(productId, updatedFields);
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === productId ? updatedProduct : p))
      );
      toast.success('Producto actualizado exitosamente.');
    } catch (error) {
      setError('Error al actualizar el producto.');
      toast.error('Error al actualizar el producto.');
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductApi(productId);
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
      toast.success('Producto eliminado exitosamente.');
    } catch (error) {
      setError('Error al eliminar el producto.');
      toast.error('Error al eliminar el producto.');
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading, error, addProduct, updateProduct, deleteProduct, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
