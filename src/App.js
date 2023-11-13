import React, { useState } from "react";
import CompletePurchase from "./CompletePurchase";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCompletePurchase, setShowCompletePurchase] = useState(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  const [products] = useState([
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 15 },
    { id: 3, name: "Producto 3", price: 20 }
    // ... más productos
  ]);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleCompletePurchase = () => {
    if (cartItems.length > 0) {
      setShowCompletePurchase(true);
    } else {
      setShowEmptyCartMessage(true);
      setTimeout(() => {
        setShowEmptyCartMessage(false);
      }, 3000); // Mostrar el mensaje por 3 segundos
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (showCompletePurchase) {
    return (
      <CompletePurchase
        totalPrice={totalPrice}
        handleCompletePurchase={() => setShowCompletePurchase(false)}
      />
    );
  }

  return (
    <div className="App">
      {showEmptyCartMessage && <p>¡No hay productos en el carrito!</p>}
      <h1>Carrito de Compras</h1>
      <div>
        <h2>Productos</h2>
        {products.map((product) => (
          <div key={product.id}>
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={() => addToCart(product)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Carrito</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <span>
                {item.name} - ${item.price}
              </span>
              <button onClick={() => removeFromCart(item.id)}>
                <FaTrash /> Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>El carrito está vacío</p>
        )}
      </div>
      <div>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={handleCompletePurchase}>
          <FaCheck /> Completar Compra
        </button>
      </div>
    </div>
  );
}

export default App;
