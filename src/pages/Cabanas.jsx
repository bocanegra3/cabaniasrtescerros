import CabanaCard from "../components/CabanaCard/CabanaCard";
import "./Cabanas.css";


const cabanas = [
  {
    id: "cabana-1",
    title: "Cabaña hasta 3 personas",
    location: "Cabaña Colibri",
    rating: "5.0",
    price: "75.000",
    image: "../../public/img/COLIBRI/FrenteColibri.png",  
  },
  {
    id: "cabana-2",
    title: "Cabaña familiar hasta 8 personas",
    location: "Cabaña Hornero",
    rating: "5.0",
    price: "95.000",
    image: "../../public/img/HORNERO/FrenteHornero.png",  
  },
  {
    id: "cabana-3",
    title: "Cabaña ideal para 2 personas",
    location: "Cabaña Jilguero",
    rating: "5.0",
    price: "70.000",
    image: "../../public/img/JILGUERO/FrenteJilguero.png",   
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