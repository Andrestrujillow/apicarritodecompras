import React from 'react';
// Importamos los estilos específicos para esta página
import './CartPage.css';

const CartPage = () => {
  // Obtenemos los productos del carrito almacenados en localStorage
  // Si no hay nada guardado, se usa un arreglo vacío
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Esta función borra el carrito completamente
  const resetCart = () => {
    // Eliminamos el item 'cart' del localStorage
    localStorage.removeItem('cart');
    // Recargamos la página para que se actualice visualmente el carrito vacío
    window.location.reload();
  };

  return (
    <div className="cart-page">
      {/* Título principal de la página */}
      <h2>Carrito</h2>

      {/* Verificamos si el carrito está vacío */}
      {cart.length === 0 ? (
        // Si no hay productos, mostramos un mensaje
        <p>El carrito está vacío.</p>
      ) : (
        // Si hay productos en el carrito, los mostramos en una lista
        <>
          <ul>
            {/* Recorremos cada producto del carrito y lo mostramos como <li> */}
            {cart.map((item) => (
              <li key={item.id}>
                {/* Mostramos el título del producto */}
                {item.title}
              </li>
            ))}
          </ul>

          {/* Botón para vaciar el carrito completamente */}
          <button onClick={resetCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
