import CabanaCard from "../components/CabanaCard/CabanaCard";
import "./Cabanas.css";

const cabanas = [
  {
    id: "cabana-1",
    title: "Cabaña para descansar entre naturaleza y tranquilidad",
    location: "Cabañas Tres Cerros",
    rating: "5.0",
    price: "45.000",
    image: "/images/cabana-1.jpg",
  },
  {
    id: "cabana-2",
    title: "Cabaña familiar con vista al entorno natural",
    location: "Cabañas Tres Cerros",
    rating: "5.0",
    price: "55.000",
    image: "/images/cabana-2.jpg",
  },
  {
    id: "cabana-3",
    title: "Cabaña equipada para una estadía cómoda",
    location: "Cabañas Tres Cerros",
    rating: "5.0",
    price: "50.000",
    image: "/images/cabana-3.jpg",
  },
];



function Cabanas() {
  return (
    <section className="page">
      <h1 className="section-title">Nuestras cabañas</h1>
      <p className="section-text">
        Conocé las opciones disponibles para tu estadía.
      </p>

      <div className="cabanas-page__grid">
        {cabanas.map((cabana) => (
          <CabanaCard key={cabana.id} cabana={cabana} />
        ))}
      </div>
    </section>
  );
}

export default Cabanas;