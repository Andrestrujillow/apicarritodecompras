import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Componente Navbar que muestra la barra de navegación principal
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Enlace a la página de inicio */}
      <Link to="/">Inicio</Link>
      {/* Enlace a la página de productos */}
      <Link to="/productos">Productos</Link>
      {/* Enlace a la página del carrito */}
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
};

export default Navbar;
