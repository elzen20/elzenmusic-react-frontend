import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  const bio = ` Elzen es un proyecto creado en Torreón Coahuila dedicado a la
  creación de música original llevando la interpretación en vivo
  de una manera distinta, algo conocido como: “Banda de una sola
  persona” o en ingles se conoce como One Man Band Performance.
  Y se le conoce así por el hecho de que el artista graba bucles
  o loops de música en vivo, en este caso Elzen utiliza
  diferentes instrumentos tales como guitarra
  acústica/eléctrica, mandolina, Glockenspiel, Bongos, Shakers,
  Cabasa, Cajon, sintetizadores, canto, etc.… para hacer capas
  musicales, realizando un formato canción en vivo. Es una
  experiencia similar a la grabación de una canción en un
  estudio, pero en este caso es en vivo y Elzen suele mezclar de
  diferentes géneros como Bossanova, música Clásica, Rumba
  Flamenca, Jazz, Electrónica, Dubstep, R&B Beats. Elzen tiene
  algunos videos de covers en Guitarra Fingerstyle, y algunas
  canciones instrumentales en multipista en la plataforma de
  Youtube, y recientemente está enfocado en seguir lanzando
  videos de su interpretación de Loops hasta el fin de la
  pandemia y colaborar con otros artistas abiertos a la creación
  musical. En 2020 lanzo algunos sencillos como “Magical Music”,
  “Kaleidoscope”, “Holy Life” e “Intergalactic Fate” las
  multiples plataformas digitales. Ha colaborado con otros
  artistas como Ángel Gibran y Karen López. El 20 de Abril del
  2022 lanzo su album titulado "Dual". Y en Septiembre esta por
  estrenar nuevo sencillo instrumental de guitarra acústica.
  Recientemente esta trabajando en la elaboración de contenido
  digital para redes sociales con Maia Records. Redes sociales
  (Youtube, Instagram y Facebook): /elzenmusic Plataformas
  digitales (Spotify, Deezer, iTunes, etc…): Elzen`;

  const bioSummary = bio.slice(0,199);
  return (
    <div className="Gallery">
      <Container fluid>
        <Row className="mb-5 pb-5">
          {/* Noticias */}
          <Col lg={{ span: 3, order: 1 }} xs={{ span: 12, order: 2 }}>
            <h4 className="mt-3 text-center text-gold fantasy bg-purple p-3 purple-border rounded">
              Últimas Noticias
            </h4>
            <Card className="w-75 m-auto purple-border">
              <Card.Header className="text-gold fantasy bg-purple">Tablaturas y Partituras</Card.Header>
              <Card.Body className="bg-light-gold">
              
                <Card.Title className="fantasy purple-font">
                  ¿Ya te enteraste de mi tienda en línea de partituras?
                </Card.Title>
    
                <Card.Text className="fantasy purple-font">
                  Ahora podrás adquirir las tablaturas y partituras, de muchos
                  de los covers que Elzen ha subido en guitarra Youtube.
                </Card.Text>
                <Button className="inverted-outline-purple">Ir a la seccion de Tablaturas</Button>
              </Card.Body>
            </Card>
            <Card className="w-75 mt-2 m-auto purple-border">
              <Card.Header className="text-gold fantasy bg-purple">Grabaciones de pistas</Card.Header>
              <Card.Body className="text-center bg-light-gold">
                <Card.Title className="fantasy purple-font">
                  ¿Requieres una grabación de guitarra, bajo, percusiones, etc?
                </Card.Title>
                <a
                  href="https://soundbetter.com/profiles/609948-elzen"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Elzen profile on SoundBetter"
                >
                  <img
                    className="w-25 h-25"
                    alt="Elzen, Electric Guitar on SoundBetter"
                    src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-c84cb3e75c4267f5bee41f7f617a81d9.svg"
                  />
                </a>
                <Card.Text className="fantasy purple-font">Puedes entrar a nuestro Sound Better</Card.Text>
                <Button className="inverted-outline-purple">Puedes también contactarnos</Button>
              </Card.Body>
            </Card>
            <Card className="w-75 mt-2 m-auto purple-border">
              <Card.Header className="text-gold fantasy bg-purple">Dancing With The Wind Video</Card.Header>
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">
                  ¿Ya viste el video caricaturizado de Dancing with The Wind?
                </Card.Title>
                <Card.Img
                variant="top"
                src="https://storage.googleapis.com/elzenmusic/gifs/dancing.gif"
              />
                <Card.Text className="fantasy purple-font">
                  Te recomiendo que no te pierdas el video caricaturizado de
                  Dancing in the wind hecho por Abraham Esparza.
                </Card.Text>
                <Button className="inverted-outline-purple">Ver el Video</Button>
              </Card.Body>
            </Card>
            <Card className="w-75 mt-2 m-auto purple-border">
              <Card.Header className="text-gold fantasy bg-purple">Sabores Tropicales Video</Card.Header>
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">
                  ¿Ya viste el video de Sabores Tropicales hecho con IA?
                </Card.Title>
                <Card.Img
                variant="top"
                src="https://storage.googleapis.com/elzenmusic/gifs/sabores.gif"
              />
                <Card.Text className="fantasy purple-font">
                  Te recomiendo que no te pierdas el video de Sabores Tropicales
                  hecho con IA.
                </Card.Text>
                <Button className="inverted-outline-purple">Ver el Video</Button>
              </Card.Body>
            </Card>
            <Card className="w-75 mt-2 m-auto purple-border">
              <Card.Header className="text-gold fantasy bg-purple">Yuanfen Video</Card.Header>
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">¿Ya te viste mi video de Yuanfen?</Card.Title>
                <Card.Img
                variant="top"
                src="https://storage.googleapis.com/elzenmusic/gifs/yuanfen.gif"
              />
                <Card.Text className="fantasy purple-font">
                  Te recomiendo que no te pierdas el video de Yuanfen, reflejando un poco la naturaleza de Durango y un poco de mi calidez musical.
                </Card.Text>
                
                <Button className="inverted-outline-purple">Ver el Video</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Carousel */}
          <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <Carousel className="purple-border">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/photos/IMG_7819.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/photos/IMG_7830.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/photos/elsaltito-5.jpg "
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/photos/elsaltito-9.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <Card className="text-center mt-3 purple-border">
              <Card.Header className="text-purple bg-gold fantasy">Biografía</Card.Header>
              <Card.Body className="bg-purple">
                <Card.Title className="text-gold fantasy">Acerca de Elzen</Card.Title>
                <Card.Img
                  className="w-25"
                  variant="top"
                  src="images/elzenw.png"
                />
                <Card.Text className="text-white"> 
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
                <Button className="inverted-outline-purple">
                  Click aquí para enviar un correo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Lanzamientos */}
          <Col lg={{ span: 3, order: 3 }} xs={{ span: 12, order: 3 }}>
            <h4 className="mt-3 text-center text-gold fantasy bg-purple p-3 purple-border rounded">
              ¿Ya escuchaste mis Lanzamientos?
            </h4>

            <Card className="text-center w-75 m-auto purple-border">
              <Card.Img
                variant="top"
                src="images/covers/sabores_tropicales.png"
              />
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">Sabores Tropicales</Card.Title>
                <Card.Text className="fantasy purple-font">
                  Elzen feat (León Escargoth, Saul Ruiz, Kuyt Duran, Marcela
                  Rocha)
                </Card.Text>
                <Button className="inverted-outline-purple">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto purple-border">
              <Card.Img
                variant="top"
                src="images/covers/dancing_in_the_wind_cover.png"
              />
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">Dancing with the wind</Card.Title>
                <Card.Text className="fantasy purple-font">Elzen feat (León Escargoth)</Card.Text>
                <Button className="inverted-outline-purple">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto purple-border">
              <Card.Img variant="top" src="images/covers/red_ocean.jpg" />
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">Red Ocean</Card.Title>
                <Card.Text className="fantasy purple-font">Elzen</Card.Text>
                <Button className="inverted-outline-purple">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto purple-border">
              <Card.Img variant="top" src="images/covers/dual.png" />
              <Card.Body className="bg-light-gold">
                <Card.Title className="fantasy purple-font">Dual</Card.Title>
                <Card.Text className="fantasy purple-font">Elzen</Card.Text>
                <Button className="inverted-outline-purple">Ir a Spotify</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
