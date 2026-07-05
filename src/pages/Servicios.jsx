import "./Servicios.css";

const servicios = [
  {
    id: 1,
    title: "Desayuno seco",
    image: "../../public/img/DEMAS/DesayunoSeco.png",
    description:
      "Incluye una selección simple para comenzar el día: infusiones, panificados y productos secos.",
    details: ["Disponible de 8:00 a 10:30 hs", "Se entrega en la cabaña"],
  },
  {
    id: 2,
    title: "Pileta acondicionada",
    image: "../../public/img/DEMAS/Pileta.png",
    description:
      "Espacio ideal para relajarse y disfrutar al aire libre durante la estadía.",
    details: ["Con sombrillas", "Agua Climatizada", "Con reposeras"],
  },
  {
    id: 3,
    title: "Entretenimiento",
    image: "../../public/img/DEMAS/Entretenimiento.png",
    description:
      "Opciones pensadas para disfrutar dentro de la cabaña en momentos de descanso.",
    details: ["Juegos de mesa", "Plataforma Netflix disponible", "Mesa de metegol"],
  },
];

function Servicios() {
  return (
    <section className="page servicios-page">
      <div className="servicios-page__header">
        <h1 className="section-title">Nuestros servicios</h1>
        <p className="section-text">
          Servicios pensados para que tu estadía sea cómoda, tranquila y
          disfrutable.
        </p>
      </div>

      <div className="servicios-page__grid">
        {servicios.map((servicio) => (
          <article className="servicio-card" key={servicio.id}>
            <div className="servicio-card__image-box">
              <img
                src={servicio.image}
                alt={servicio.title}
                className="servicio-card__image"
              />
            </div>

            <div className="servicio-card__content">
              <h3 className="servicio-card__title">{servicio.title}</h3>

              <p className="servicio-card__description">
                {servicio.description}
              </p>

              <ul className="servicio-card__list">
                {servicio.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;