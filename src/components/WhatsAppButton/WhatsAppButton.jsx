import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";


function WhatsAppButton() {
  const phoneNumber = "549XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hola, quiero consultar por las cabañas Tres Cerros."
  );



  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
 </a>

  );
}

export default WhatsAppButton;