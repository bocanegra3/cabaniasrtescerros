import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
   <img src="../../public/CabañasLogotipo.png" alt="" width={"70rem"}/>
        </NavLink>

        <button
          className={`header__toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`header__menu ${isOpen ? "is-open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/cabanas" onClick={closeMenu}>
              Cabañas
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" onClick={closeMenu}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/ubicacion" onClick={closeMenu}>
              Ubicación
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={closeMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;