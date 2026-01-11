import React from 'react'
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container-fluid">
        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img src={logo} width={40} alt="Logo" />
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO COLAPSABLE */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Enlaces de navegación */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold text-center">
            <li className="nav-item"><a className="nav-link text-dark" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">Sobre Nosotros</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">Tienda</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">Contáctanos</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">Visualizador</a></li>
          </ul>

          {/* Buscador-movil */}
          <div className="mx-lg-auto d-flex justify-content-center my-3 my-lg-0" style={{ width: '100%', maxWidth: '450px' }}>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control border-end-0 shadow-none" 
                placeholder="¿Qué estás buscando?" 
                style={{ borderRadius: '25px 0 0 25px', border: '1px solid #ced4da' }}
              />
              <button 
                className="btn text-white px-3" 
                type="button" 
                style={{ borderRadius: '0 25px 25px 0', backgroundColor: '#4b3f6b' }}
              >
                🔍
              </button>
            </div>
          </div>
         


          {/* Iconos */}
          <div className="d-flex justify-content-center align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0">
            <a href="#" className="text-dark fs-4">👤</a>
            <a href="#" className="text-dark fs-4">🤍</a>
            <a href="#" className="text-dark fs-4">🛍️</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header