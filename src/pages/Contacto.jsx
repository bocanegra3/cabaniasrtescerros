import "./Contacto.css";

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consulta enviada correctamente. Te responderemos a la brevedad.");
    e.target.reset();
  };

  return (
    <section className="page contacto-page">
      <div className="contacto-page__header">
        <h1 className="section-title">Contacto</h1>
        <p className="section-text">
          Completá el formulario y nos pondremos en contacto para ayudarte con
          tu consulta.
        </p>
      </div>

      <div className="contacto-page__content">
        <form className="contacto-form" onSubmit={handleSubmit}>
          <h2 className="contacto-form__title">Envianos tu consulta</h2>

          <div className="contacto-form__group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              title="Ingresá solo letras. Mínimo 2 caracteres."
              placeholder="Ej: Franco"
            />
          </div>

          <div className="contacto-form__group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              title="Ingresá solo letras. Mínimo 2 caracteres."
              placeholder="Ej: Gonzales"
            />
          </div>

          <div className="contacto-form__group">
            <label htmlFor="celular">Número de celular</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              required
              pattern="[0-9+\s()-]{8,20}"
              title="Ingresá un número válido. Ej: +54 9 3546 123456"
              placeholder="Ej: +54 9 3546 123456"
            />
          </div>

          <div className="contacto-form__group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Ej: consulta@mail.com"
            />
          </div>

          <div className="contacto-form__group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              minLength="10"
              maxLength="500"
              title="El mensaje debe tener al menos 10 caracteres."
              placeholder="Escribí tu consulta..."
            ></textarea>
          </div>

          <button type="submit" className="contacto-form__button">
            Enviar consulta
          </button>
        </form>

        <div className="contacto-info">
          <h2 className="contacto-info__title">
            También podés escribirnos por WhatsApp
          </h2>

          <p className="contacto-info__text">
            Respondemos las consultas por mail dentro de las próximas{" "}
            <strong>24 a 48 horas hábiles</strong>. Para consultas rápidas sobre
            disponibilidad, tarifas o reservas, podés contactarnos directamente
            por WhatsApp.
          </p>

          <div className="contacto-info__phone">   
            <span>Celular de contacto</span>            
            <strong>011 15-4192-3862</strong>
          </div>

          <div className="contacto-info__qr-box">
            <div className="fake-qr">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>Escaneá el QR para escribirnos por WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;