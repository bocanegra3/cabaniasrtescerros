import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"


function Home() {
  return (
<section className="page">
  <div className='celular'>
       <h1 className="section-title">Cabañas Tres Cerros</h1>

      <p className="section-text">
        Este es un ALOJAMIENTO HABILITADO. Infraestructura turística para garantizar la mejor experiencia durante tu estadía. Establecimiento totalmente equipado en un cálido ambiente con vistas únicas que te dejarán con la boca abierta. Estamos preparados para recibirte como te mereces. Es un complejo de cabañas con excelente ubicación a tan solo 50 metros de la ruta S-271 y a muy pocas cuadras del Casco Histórico del pueblo. Las cabañas cuentan con todas las comodidades y un hermoso parque.
      </p>
 </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/hme/PiletayHorizonte.png"
            alt="Cabaña Tres Cerros"
          />

          <Carousel.Caption>
            <h3>Descanso en la naturaleza</h3>
            <p>Cabañas pensadas para desconectar y disfrutar.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/hme/PiletaMejorFoto.png"
            alt="Interior de cabaña"
          />

          <Carousel.Caption>
            <h3>Comodidad y tranquilidad</h3>
            <p>Un espacio cálido para tu estadía.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/hme/PiletaFrente.png"
            alt="Paisaje natural"
          />

          <Carousel.Caption className=''>
            <h3>Tu escapada ideal</h3>
            <p>Tranquilidad, aire libre y descanso.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Home;