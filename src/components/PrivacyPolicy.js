import { Card, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const bio = `Introducción:\r\n\r\n
  Bienvenido a nuestra política de privacidad. En Elzen Music Website, nos tomamos muy en serio la privacidad de nuestros usuarios y nos comprometemos a proteger la información personal que recopilamos.
  \r\n\r\n
  Información Recopilada:\r\n\r\n
  En Elzen Music Website, recopilamos información personal de diversas formas, incluidos los datos que proporcionas cuando nos contactas, completas formularios, interactúas con nuestra aplicación, etc. Esta información puede incluir tu nombre, dirección de correo electrónico, el mensaje para el cual nos contactas.
  \r\n\r\n
  Uso de la Información:\r\n\r\n
  Utilizamos la información que recopilamos para proporcionar y mejorar nuestros servicios, personalizar la experiencia del usuario, enviar comunicaciones de marketing, etc.`;

  const bioSummary = bio.slice(0, 199);
  return (
    <Container>
      <Card className="text-center my-5 purple-border">
        <Card.Header className="text-purple bg-gold fantasy">
          Política de Privacidad
        </Card.Header>
        <Card.Body className="bg-purple">
          <Card.Text className="text-white bio">{bio}</Card.Text>
          {/* <Link to="/contact">
          <Button className="inverted-outline-purple">
            Click aquí para contactarnos
          </Button>
        </Link> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PrivacyPolicy;
