import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart
    .reduce((s, p) => s + p.price * (p.quantity || 1), 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((p) => (
              <li key={p.id} className="cart-item">
                <div className="cart-info">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <strong>{p.title}</strong>
                    <div>Cantidad: {p.quantity}</div>
                  </div>
                </div>
                <div>
                  <div>${(p.price * p.quantity).toFixed(2)}</div>
                  <button onClick={() => removeFromCart(p.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <div>Total: ${total}</div>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
}
