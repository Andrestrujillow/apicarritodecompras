import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

// Componente ProductList que muestra la lista de productos y permite agregarlos al carrito
const ProductList = () => {
  // Estado para los productos
  const [productos, setProductos] = useState([]);
  // Estado para el carrito, inicializado desde localStorage si existe
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Cargar productos desde la API al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito solo si no existe ya
  const addToCart = (producto) => {
    // Si ya está en el carrito, no lo volvemos a agregar
    const exists = cart.find((item) => item.id === producto.id);
    if (!exists) {
      setCart([...cart, producto]);
    }
  };

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <div className="product-container">
        {/* Mapea y muestra cada producto */}
        {productos.map((p) => (
          <div className="product-card" key={p.id}>
            <Card
              id={p.id}
              nombre={p.title}
              precio={p.price}
              descripcion={p.description}
              imagen={p.image}
            />
            {/* Botón para agregar producto al carrito */}
            <button className="add-btn" onClick={() => addToCart(p)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
