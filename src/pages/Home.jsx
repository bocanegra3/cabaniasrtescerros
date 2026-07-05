import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
<section className="page">
{/*       <h1 className="section-title">Cabañas Tres Cerros</h1>

      <p className="section-text">
        Un lugar pensado para descansar, conectar con la naturaleza y disfrutar
        la tranquilidad de las sierras.
      </p>
 */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/img/hme/PiletayHorizonte.png"
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
            src="/public/img/hme/PiletaMejorFoto.png"
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
            src="/public/img/hme/PiletaFrente.png"
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