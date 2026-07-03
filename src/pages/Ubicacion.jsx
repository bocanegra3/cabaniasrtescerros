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
  {/* Pegá en src la dirección que aparece dentro del iframe copiado de Google Maps */}
  <iframe
    title="Ubicación de Cabañas Tres Cerros"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.825380075035!2d-64.58231584028997!3d-31.91134153369132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b3ce37da1d67%3A0x52bd11cacc030e4a!2sCaba%C3%B1as%20Tres%20Cerros%20solo%20sitios%20oficiales!5e0!3m2!1ses!2sar!4v1783045566600!5m2!1ses!2sar"
    width="100%"
    height="320"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;