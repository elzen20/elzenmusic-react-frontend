import { Container, Row, Col ,Button } from "react-bootstrap";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../App.css";
import EmailForm from "./Form";

function Contact() {
  return (
    <div className="text-align pb-5 mb-5 fade-in">
      <Container fluid>
        <h1 className="text-gold fantasy mt-5 mb-3">Contáctanos</h1>
        <Button
        href="https://wa.me/+528717274478"
        className="inverted-outline-purple"
      >
        <div >WhatsApp</div>
        <FaWhatsapp/>
      </Button>
        <Button
        href="tel:8717274478"
        className="inverted-outline-purple mx-2"
      >
        <div >Llamanos</div>
        <FaPhoneAlt/>
      </Button>
        <EmailForm/>
      </Container>
    </div>
  );
}

export default Contact;