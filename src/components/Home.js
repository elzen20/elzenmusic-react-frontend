import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "../App.css";
function Home() {
  return (
    <div className="Gallery">
      <Container fluid>
        <Row className="mb-5 pb-5">
          <Col lg={{ span: 6, offset: 3 }}>
            <Carousel>
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
            <h4 className="mt-3 text-center text-white fantasy bg-purple p-3">
              Últimas Noticias
            </h4>
            <Card>
              <Card.Header>Tablaturas y Partituras</Card.Header>
              <Card.Body>
                <Card.Title>
                  ¿Ya te enteraste de nuestra tienda en línea de partituras?
                </Card.Title>
                <Card.Text>
                  Ahora podrás adquirir las tablaturas y partituras, de muchos
                  de los covers que Elzen ha subido en guitarra Youtube.
                </Card.Text>
                <Button variant="danger">Ir a la seccion de Tablaturas</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Grabaciones de pistas</Card.Header>
              <Card.Body className="text-center">
                <Card.Title className="text-start">
                  ¿Requieres una grabación de guitarra, bajo percusiones?
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
                <Card.Text >Puedes entrar a nuestro Sound Better</Card.Text>
               
                <Button variant="danger">Puedes también contactarnos</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Dancing With The Wind Video</Card.Header>
              <Card.Body>
                <Card.Title>
                  ¿Ya viste el video caricaturizado de Dancing with The Wind?
                </Card.Title>
                <Card.Text>
                  Te recomiendo que no te pierdas el video caricaturizado de
                  Dancing in the wind hecho por Abraham Esparza.
                </Card.Text>
                <Button variant="danger">Ver el Video</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Sabores Tropicales Video</Card.Header>
              <Card.Body>
                <Card.Title>
                  ¿Ya viste el video de Sabores Tropicales hecho con IA?
                </Card.Title>
                <Card.Text>
                  Te recomiendo que no te pierdas el video de Sabores
                  Tropicales hecho con IA.
                </Card.Text>
                <Button variant="danger">Ver el Video</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Dual Album</Card.Header>
              <Card.Body>
                <Card.Title>
                  ¿Ya escuchaste mi albúm títulado como "Dual"?
                </Card.Title>
                <Card.Text>
                  Te recomiendo que no te pierdas el video de Sabores
                  Tropicales hecho con IA.
                </Card.Text>
                <Button variant="danger">Escuchar albúm</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Free Dove Video</Card.Header>
              <Card.Body>
                <Card.Title>
                  ¿Ya te viste mi video de Free Dove?
                </Card.Title>
                <Card.Text>
                  Te recomiendo que no te pierdas el video de Free Dove,
                  pondra con los pelos de punta.
                </Card.Text>
                <Button variant="danger">Escuchar albúm</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="">
            <h4 className="mt-3 text-center text-white fantasy bg-purple p-3">
              ¿Ya escuchaste mis Lanzamientos?
            </h4>

            <Card className="text-center w-75 m-auto">
              <Card.Img
                variant="top"
                src="images/covers/sabores_tropicales.png"
              />
              <Card.Body>
                <Card.Title>Sabores Tropicales</Card.Title>
                <Card.Text>
                  Elzen feat (León Escargoth, Saul Ruiz, Kuyt Duran, Marcela
                  Rocha)
                </Card.Text>
                <Button variant="success">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto">
              <Card.Img
                variant="top"
                src="images/covers/dancing_in_the_wind_cover.png"
              />
              <Card.Body>
                <Card.Title>Dancing with the wind</Card.Title>
                <Card.Text>Elzen feat (León Escargoth)</Card.Text>
                <Button variant="success">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto">
              <Card.Img variant="top" src="images/covers/red_ocean.jpg" />
              <Card.Body>
                <Card.Title>Red Ocean</Card.Title>
                <Card.Text>Elzen</Card.Text>
                <Button variant="success">Ir a Spotify</Button>
              </Card.Body>
            </Card>
            <Card className="text-center mt-2 w-75 m-auto">
              <Card.Img variant="top" src="images/covers/dual.png" />
              <Card.Body>
                <Card.Title>Dual</Card.Title>
                <Card.Text>Elzen</Card.Text>
                <Button variant="success">Ir a Spotify</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default Home;
