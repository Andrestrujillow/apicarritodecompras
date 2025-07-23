import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Card.css'; // Assuming you have a CSS file for styling the card

const Card = ({ id, nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card">
      <Link to={`/productos/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={imagen} alt={nombre} style={{ width: '100%', borderRadius: '8px' }} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>{descripcion.substring(0, 60)}...</p>
      </Link>
    </div>
  );
};



export default Card;
