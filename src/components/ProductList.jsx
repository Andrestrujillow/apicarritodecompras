import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../components/ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = productos.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (producto) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === producto.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  const resetCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>

      <div className="cart-summary">
        <strong>🛒 Carrito:</strong> {totalItems} producto(s)
        <button className="reset-btn" onClick={resetCart}>
          Vaciar carrito
        </button>
        {cart.length > 0 && (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} x {item.cantidad}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <Card
                  id={p.id}
                  nombre={p.title}
                  precio={p.price}
                  descripcion={p.description}
                  imagen={p.image}
                />
                <button
                  className="add-btn"
                  onClick={() => addToCart(p)}
                >
                  Agregar al carrito
                </button>
              </div>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;