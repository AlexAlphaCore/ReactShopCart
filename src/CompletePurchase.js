import React from "react";

const CompletePurchase = ({ totalPrice, handleCompletePurchase }) => {
  return (
    <div>
      <h1>Compra Completada</h1>
      <p>Total a pagar: ${totalPrice}</p>
      <button onClick={handleCompletePurchase}>Volver a la Tienda</button>
    </div>
  );
};

export default CompletePurchase;
