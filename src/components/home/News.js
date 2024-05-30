import { Card, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
function News() {
  return (
    <>
      <h4 className="mt-3 text-center text-gold fantasy bg-purple p-3 purple-border rounded">
        Últimas Noticias
      </h4>
      <Card className="w-75 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Tablaturas y Partituras
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Ya te enteraste de mi tienda en línea de partituras?
          </Card.Title>

          <Card.Text className="fantasy purple-font">
            Ahora podrás adquirir las tablaturas y partituras, de muchos de los
            covers que Elzen ha subido en guitarra Youtube.
          </Card.Text>
          <Link to="/tabs">
            <Button className="inverted-outline-purple">
              Ir a la sección de Tablaturas
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Bodas y Eventos Privados
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Buscas música en vivo?
          </Card.Title>
          <Card.Text className="fantasy purple-font">
            Conoce la calidad de mi performance en vivo.
          </Card.Text>
          <Link to="/weddings">
            <Button className="inverted-outline-purple">
              Ir a la sección de Bodas
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Grabaciones de pistas
        </Card.Header>
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
          <Card.Text className="fantasy purple-font">
            Puedes entrar a nuestro Sound Better presionando la imagen
          </Card.Text>
          <Link to="/contact">
            <Button className="inverted-outline-purple">
              Puedes también contactarnos
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Dancing With The Wind Video
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Ya viste el video caricaturizado de Dancing with The Wind?
          </Card.Title>
          <Card.Img
            variant="top"
            src="https://storage.googleapis.com/elzenmusic/gifs/dancing.gif"
          />
          <Card.Text className="fantasy purple-font">
            Te recomiendo que no te pierdas el video caricaturizado de Dancing
            in the wind hecho por Abraham Esparza.
          </Card.Text>
          <a
            href="https://www.youtube.com/watch?v=0YaD_2cxKiI&list=OLAK5uy_ljGWscql9u9pFn9r_8xih2Keo4C5GKo_k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inverted-outline-purple">Ver el Video</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Sabores Tropicales Video
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Ya viste el video de Sabores Tropicales hecho con IA?
          </Card.Title>
          <Card.Img
            variant="top"
            src="https://storage.googleapis.com/elzenmusic/gifs/sabores.gif"
          />
          <Card.Text className="fantasy purple-font">
            Te recomiendo que no te pierdas el video de Sabores Tropicales hecho
            con IA.
          </Card.Text>
          <a
            href="https://www.youtube.com/watch?v=YGnUcALUQMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inverted-outline-purple">Ver el Video</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Yuanfen Video
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Ya te viste mi video de Yuanfen?
          </Card.Title>
          <Card.Img
            variant="top"
            src="https://storage.googleapis.com/elzenmusic/gifs/yuanfen.gif"
          />
          <Card.Text className="fantasy purple-font">
            Te recomiendo que no te pierdas el video de Yuanfen, reflejando un
            poco la naturaleza de Durango y un poco de mi calidez musical.
          </Card.Text>

          <a
            href="https://www.youtube.com/watch?v=J0pw48AoSM8&list=PLF6N0Iy5VM_QXOkXHPF9TH0RJknCQoF38"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inverted-outline-purple">Ver el Video</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}

export default News;
