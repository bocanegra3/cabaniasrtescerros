import { Link } from "react-router-dom";
import "./CabanaCard.css";

function CabanaCard({ cabana }) {
  return (
    <article className="cabana-card">
      <div className="cabana-card__image-box">
        <img
          src={cabana.image}
          alt={cabana.title}
          className="cabana-card__image"
        />
      </div>

      <div className="cabana-card__content">
        <h3 className="cabana-card__title">{cabana.title}</h3>

        <p className="cabana-card__location">{cabana.location}</p>

        <div className="cabana-card__rating">
          ★ <span>{cabana.rating}</span>
        </div>

        <p className="cabana-card__price">
          Desde ${cabana.price}
          <span> por noche</span>
        </p>

        <p className="cabana-card__promo">Consulta disponible por WhatsApp</p>

        <Link to={`/cabanas/${cabana.id}`} className="cabana-card__button">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default CabanaCard;
