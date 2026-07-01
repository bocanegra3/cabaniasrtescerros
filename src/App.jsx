import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from "./pages/Home";
import Cabanas from "./pages/Cabanas";
import CabanaDetalle from "./pages/CabanaDetalle";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas" element={<Cabanas />} />
          <Route path="/cabanas/:id" element={<CabanaDetalle />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;