import { useParams } from "react-router-dom";

function CabanaDetalle() {
  const { id } = useParams();

  return (
    <section className="page">
      <h1 className="section-title">Detalle de cabaña</h1>
      <p className="section-text">
        Información detallada de la cabaña seleccionada: {id}
      </p>
    </section>
  );
}

export default CabanaDetalle;