import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from 'react-toastify';

export default function Cart() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart
    .reduce((s, p) => {
      const quantity = p.quantity || 1;
      const price = parseFloat(p.price) || 0;
      return s + (price * quantity);
    }, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning('El carrito está vacío');
      return;
    }

    setIsProcessing(true);

    // Simular procesamiento de compra
    setTimeout(() => {
      toast.success(`¡Compra realizada exitosamente! Total: $${total}`);
      clearCart();
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="cart">
      <h3>Carrito de Compras</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((p) => (
              <li key={p.id} className="cart-item">
                <div className="cart-info">
                  <img src={p.image} alt={p.title} />
                  <div className="cart-details">
                    <strong>{p.title}</strong>
                    <p className="cart-price">${parseFloat(p.price).toFixed(2)}</p>
                  </div>
                </div>

                <div className="cart-controls">
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQuantity(p.id)}
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>
                    <span className="qty-display">{p.quantity || 1}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQuantity(p.id)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${((parseFloat(p.price) || 0) * (p.quantity || 1)).toFixed(2)}
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(p.id)}
                  aria-label={`Eliminar ${p.title}`}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">${total}</span>
            </div>
            <div className="cart-actions">
              <button
                className="btn-checkout"
                onClick={handleCheckout}
                disabled={isProcessing || cart.length === 0}
              >
                {isProcessing ? 'Procesando...' : 'Realizar Compra'}
              </button>
              <button
                className="btn-clear"
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
