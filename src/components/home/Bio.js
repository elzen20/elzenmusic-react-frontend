import { Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Bio() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const bio = ` Elzen es un músico, compositor, multiinstrumentista y arreglista destacado, especialmente reconocido por su virtuosismo en la guitarra. Originario de Torreón, Coahuila, México, comenzó su travesía musical a la temprana edad de 13 años. Inicialmente, recibió clases particulares de guitarra, pero su pasión lo llevó a adentrarse en la teoría musical por su cuenta, devorando libros y explorando diferentes estilos y técnicas.\r\n\r\nEntre los géneros que dominan su repertorio se encuentran el Bossanova, Flamenco, Jazz, Funk y Boleros, entre otros. Su destreza se manifiesta especialmente a través de la técnica conocida como FingerStyle, la cual emplea magistralmente para crear texturas ricas y complejas en su música, así como mediante la creación de loops en vivo, añadiendo capas de sonido para enriquecer sus interpretaciones.\r\n\r\nElzen ha dejado su huella en varios festivales musicales destacados, como el Laguna Power Fest y el Laguna Tattoo Ink, así como en el Uruapan Fest. Además, ha cautivado audiencias en eventos privados, siendo especialmente solicitado en bodas y eventos íntimos, donde su talento ha contribuido a crear atmósferas inolvidables.\r\n\r\nCon una trayectoria en constante evolución, Elzen sigue explorando nuevas fronteras musicales, consolidando su posición como uno de los músicos más versátiles y emocionantes de la escena contemporánea. \r\n\r\n Además ha hecho bastantes composiciones musicales que puedes encontrar en este sitio web.`;

  const bioSummary = bio.slice(0, 199);
  return (
    <Card className="text-center mt-3 purple-border">
      <Card.Header className="text-purple bg-gold fantasy">
        Biografía
      </Card.Header>
      <Card.Body className="bg-purple">
        <Card.Title className="text-gold fantasy">Acerca de Elzen</Card.Title>
        <Card.Img className="w-25" variant="top" src="images/elzenw.png" />
        <Card.Text className="text-white bio">
          {expanded
            ? // Mostrar todo el texto si se ha expandido
              bio
            : // Mostrar solo los primeros 150 caracteres y agregar un botón "Ver más"
              bioSummary}
          {expanded ? (
            <Button className="text-gold" variant="link" onClick={handleToggle}>
              Ver menos
            </Button>
          ) : (
            <Button className="text-gold" variant="link" onClick={handleToggle}>
              Ver más
            </Button>
          )}
        </Card.Text>
        <Link to="/contact">
          <Button className="inverted-outline-purple">
            Click aquí para enviar un correo
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Bio;
