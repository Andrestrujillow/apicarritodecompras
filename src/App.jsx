import React from 'react';
// Importamos las herramientas de rutas de React Router
import { Routes, Route } from 'react-router-dom';

// Importamos el componente Navbar que estará visible en todas las páginas
import Navbar from './components/Navbar';

// Importamos las páginas principales de la aplicación
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

// Componente principal de la aplicación
const App = () => {
  return (
    <>
      {/* Mostramos el navbar siempre, sin importar la página */}
      <Navbar />

      {/* Definimos las rutas de navegación de la aplicación */}
      <Routes>
        {/* Ruta de inicio (Home) */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la lista de productos */}
        <Route path="/productos" element={<Products />} />

        {/* Ruta para la página del carrito */}
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
