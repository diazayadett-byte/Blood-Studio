import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5">
      <div className="container pb-4">
        <div className="row">
          {/* Sección Branding */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold mb-3" style={{ letterSpacing: '2px' }}>BLOOM STUDIO</h2>
            <p className="text-secondary small" style={{ maxWidth: '300px' }}>
              Transformamos tus ideas en productos únicos. En Bloom Studio, la creatividad no tiene límites.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-github"></i></a>
            </div>
          </div>

          {/* Sección Compañía */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 small">Compañía</h6>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Inicio</a></li>
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Sobre nosotros</a></li>
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Tienda</a></li>
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Contactanos</a></li>
            </ul>
          </div>

          {/* Sección Recursos */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 small">Recursos</h6>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Spotify Playlist</a></li>
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
              <li className="mb-3"><a href="#" className="text-secondary text-decoration-none">Youtube Playlist</a></li>
            </ul>
          </div>

          {/* Sección Contacto y Pagos */}
          <div className="col-md-4 mb-4 text-md-end">
            <div className="mb-4">
              <div className="d-flex justify-content-md-end align-items-center mb-3">
                <div className="me-3">
                  <p className="mb-0 fw-bold small">Tel</p>
                  <p className="mb-0 text-secondary small">555-555-5555</p>
                </div>
                <i className="bi bi-telephone fs-4"></i>
              </div>
              <div className="d-flex justify-content-md-end align-items-center">
                <div className="me-3">
                  <p className="mb-0 fw-bold small">Mail</p>
                  <p className="mb-0 text-secondary small">info@bloomstudio.com</p>
                </div>
                <i className="bi bi-envelope fs-4"></i>
              </div>
            </div>

            {/* Iconos de Pago */}
            <div className="d-flex justify-content-md-end gap-2 mt-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" height="20" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" height="20" />
              <img src="https://www.comercialsanluis.com/wp-content/uploads/2019/11/visa-logo-preview.png" alt="Visa" height="20" />
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="py-3" style={{ backgroundColor: '#111' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex flex-wrap gap-4 small text-secondary">
                <a href="#" className="text-secondary text-decoration-none">Sobre nosotros</a>
                <a href="#" className="text-secondary text-decoration-none">Contacto</a>
                <a href="#" className="text-secondary text-decoration-none">Privacidad</a>
                <a href="#" className="text-secondary text-decoration-none">Terminos y condiciones</a>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <p className="small text-secondary mb-0">
                &copy; 2025, Todos los derechos reservados a <strong>Bloom Studio</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
