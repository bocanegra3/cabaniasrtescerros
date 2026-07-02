import { Link } from "react-router-dom";
import "./Ubicacion.css";

function Ubicacion() {
  return (
    <section className="page ubicacion-page">
      <div className="ubicacion-box">
        <h1 className="ubicacion-title">Ubicación</h1>

        <div className="ubicacion-content">
          <div className="ubicacion-text">
            <p>
              Cabañas Tres Cerros se encuentra en una zona tranquila, ideal para
              descansar y disfrutar del entorno natural.
            </p>

            <p>
              Estamos ubicados cerca de Los Reartes, a pocos kilómetros de Villa
              General Belgrano y otros puntos turísticos de la zona.
            </p>

            <p>
              Para llegar correctamente, recomendamos consultar previamente por
              WhatsApp o mail.
            </p>

            <Link to="/contacto" className="ubicacion-button">
              Más información
            </Link>
          </div>

          <div className="ubicacion-map">
            {/* 
              ACÁ DEBÉS CAMBIAR EL MAPA.
              Podés reemplazar este div por un iframe de Google Maps.
              Ejemplo:
              <iframe src="TU_LINK_DE_GOOGLE_MAPS" loading="lazy"></iframe>
            */}

            <div className="fake-map">
              <span className="fake-map__pin">📍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;