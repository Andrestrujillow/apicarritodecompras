import React from 'react';
import './Card.css';

// Componente Card que muestra la información de un producto
const Card = ({ nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card">
      {/* Imagen del producto */}
      <img src={imagen} alt={nombre} />
      {/* Nombre del producto */}
      <h3>{nombre}</h3>
      {/* Precio del producto */}
      <p>${precio}</p>
      {/* Descripción corta del producto */}
      <p>{descripcion.substring(0, 50)}...</p>
    </div>
  );
};

export default Card;
