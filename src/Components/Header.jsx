import "./Header.css";


function Header() {
const abrir_cerrar_menu = () => {
    const menu = document.getElementById('menu-lateral');
    const btn = document.getElementById('btn-hamburguesa');
    if (menu) menu.classList.toggle('abrir-menu');
    if (btn) btn.classList.toggle('colocar-x');
  };

    return (
<>
      <header className='header-principal'>
        {/*  Botón menú para móviles */}
        <div className='barras'>
          <button onClick={abrir_cerrar_menu} className='boton_menu_movil' id='btn-hamburguesa'>
          </button>
        </div>

        {/*  Logo */}
        <div className='logo-container'>
          <img src={logoBloom} alt="Bloom studio" className="logo-img"/>
        </div>

      {/* Menú móvil/tablet */}
        <nav id='menu-lateral-movil' className='desplegable'>
          <ul>  
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contactanos</a></li>
            <li><a href="#">Visualizador</a></li>
          </ul>
        </nav>

        {/* Menú escritorio */}
        <nav className="nav-principal">
          <ul>  
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contactanos</a></li>
            <li><a href="#">Visualizador</a></li>
          </ul>
        </nav>
        {/*  Buscador */}
        <div className="contenedor-buscador"></div>
        <Buscador />  

        {/*  Iconos de Acción */}
        <div className="iconos-acciones">
           <span className="icono">👤</span>
           <span className="icono">🤍</span>
           <span className="icono">🛍️</span>
        </div>
      </header> 
    </>
  );
}

export default Header;
