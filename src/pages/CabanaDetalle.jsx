import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import "./CabanaDetalle.css";

const detallesCabanas = {
  "cabana-1": {
    nombre: "Cabaña Colibrí",
    capacidad: "Hasta 4 personas",
    descripcion:
      "Cabaña cómoda rodeada de naturaleza, equipada con cocina, baño privado, parrilla y espacio de descanso.",
    imagenes: [
      {
        src: "/img/COLIBRI/FrenteColibri.png",
        alt: "Frente de la Cabaña Colibrí",
      },
      {
        src: "/img/COLIBRI/CabañaColibriInterior.png",
        alt: "Interior de la Cabaña Colibrí",
      },
      {
        src: "/img/COLIBRI/CabañaColibriInteriorDos.png",
        alt: "Habitación de la Cabaña Colibrí",
      },
            {
        src: "/img/COLIBRI/CabañaColibriInteriorTres.png",
        alt: "Habitación de la Cabaña Colibrí",
      },
    ],
  },

  "cabana-2": {
    nombre: "Cabaña Hornero",
    capacidad: "Hasta 6 personas",
    descripcion:
      "Una cabaña amplia para familias, con habitaciones cómodas, cocina equipada, parrilla y galería.",
    imagenes: [
      {
        src: "/img/HORNERO/FrenteHornero.png",
        alt: "Frente de la Cabaña Hornero",
      },
      {
        src: "/img/HORNERO/InteriorHornero.png",
        alt: "Interior de la Cabaña Hornero",
      },
      {
        src: "/img/HORNERO/ParrillaHornero.png",
        alt: "Habitación de la Cabaña Hornero",
      },
    ],
  },

  "cabana-3": {
    nombre: "Cabaña Jilguero",
    capacidad: "Hasta 4 personas",
    descripcion:
      "Cabaña equipada para disfrutar una estadía tranquila, con cocina, baño privado y acceso a las instalaciones.",
    imagenes: [
      {
        src: "/img/JILGUERO/FrenteJilguero.png",
        alt: "Frente de la Cabaña Jilguero",
      },
      {
        src: "/img/JILGUERO/InteriorJilguero.png",
        alt: "Interior de la Cabaña Jilguero",
      },
      {
        src: "/img/JILGUERO/CocinaJilguero.png",
        alt: "Cocina de la Cabaña Jilguero",
      },
      {
        src: "/img/JILGUERO/DormitorioJilguero.png",
        alt: "Habitación de la Cabaña Jilguero",
      },
      {
        src: "/img/JILGUERO/InteriorJilgueroDos.png",
        alt: "Interior de la Cabaña Jilguero",
      },
      {
        src: "/img/JILGUERO/BañoJilguero.png",
        alt: "Baño de la Cabaña Jilguero",
      },
    ],
  },
};

function CabanaDetalle() {
  const { id } = useParams();

  const [indiceActivo, setIndiceActivo] = useState(0);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);

  const cabana = detallesCabanas[id];

  if (!cabana) {
    return (
      <section className="page">
        <h1>Cabaña no encontrada</h1>

        <Link to="/cabanas" className="detalle-button">
          Volver a cabañas
        </Link>
      </section>
    );
  }

  const imagenes = cabana.imagenes;

  const indiceAnterior = (indiceActivo - 1 + imagenes.length) % imagenes.length;

  const indiceSiguiente = (indiceActivo + 1) % imagenes.length;

  const abrirGaleria = () => {
    setMostrarGaleria(true);
  };

  const cerrarGaleria = () => {
    setMostrarGaleria(false);
  };

  return (
    <section className="page detalle-page">
      <div className="detalle-card">
        <Link
          to="/cabanas"
          className="detalle-close"
          aria-label="Volver a cabañas"
        >
          ×
        </Link>
        <div className="detalle-galeria">
          <button
            type="button"
            className="detalle-preview detalle-preview--left"
            onClick={() => setIndiceActivo(indiceAnterior)}
            aria-label="Ver imagen anterior"
          >
            <img
              src={imagenes[indiceAnterior].src}
              alt={imagenes[indiceAnterior].alt}
            />
          </button>

          <div className="detalle-carousel">
            <Carousel
              activeIndex={indiceActivo}
              onSelect={(selectedIndex) => setIndiceActivo(selectedIndex)}
              interval={null}
              indicators={false}
            >
              {imagenes.map((imagen, index) => (
                <Carousel.Item key={imagen.src}>
                  <button
                    type="button"
                    className="detalle-main-image"
                    onClick={abrirGaleria}
                    aria-label={`Ampliar imagen ${index + 1}`}
                  >
                    <img src={imagen.src} alt={imagen.alt} />
                  </button>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <button
            type="button"
            className="detalle-preview detalle-preview--right"
            onClick={() => setIndiceActivo(indiceSiguiente)}
            aria-label="Ver imagen siguiente"
          >
            <img
              src={imagenes[indiceSiguiente].src}
              alt={imagenes[indiceSiguiente].alt}
            />
          </button>
        </div>

        <div className="detalle-indicator">
          {indiceActivo + 1} / {imagenes.length}
        </div>

        <div className="detalle-content">
          <div>
            <span className="detalle-label">{cabana.capacidad}</span>

            <h1 className="detalle-title">{cabana.nombre}</h1>

            <p className="detalle-description">{cabana.descripcion}</p>
          </div>

          <Link to="/contacto" className="detalle-button">
            Consultar disponibilidad
          </Link>
        </div>
      </div>

      <Modal
        show={mostrarGaleria}
        onHide={cerrarGaleria}
        centered
        size="xl"
        dialogClassName="galeria-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Galería de {cabana.nombre}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel
            activeIndex={indiceActivo}
            onSelect={(selectedIndex) => setIndiceActivo(selectedIndex)}
            interval={null}
            indicators={false}
          >
            {imagenes.map((imagen) => (
              <Carousel.Item key={imagen.src}>
                <div className="modal-image-box">
                  <img src={imagen.src} alt={imagen.alt} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="modal-thumbnails">
            {imagenes.map((imagen, index) => (
              <button
                type="button"
                key={imagen.src}
                className={`modal-thumbnail ${
                  indiceActivo === index ? "is-active" : ""
                }`}
                onClick={() => setIndiceActivo(index)}
              >
                <img src={imagen.src} alt={imagen.alt} />
              </button>
            ))}
          </div>

          <p className="modal-counter">
            Imagen {indiceActivo + 1} de {imagenes.length}
          </p>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default CabanaDetalle;
