import { Card, Button } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import {
  completeSpotifySocialGateFromUrl,
  SPOTIFY_TRACK_URL,
  startSpotifySocialGateAuth,
} from "../../js/spotifySocialGate";

function News() {
  const [spotifyState, setSpotifyState] = useState({
    status: "idle",
    message: "",
  });
  const oauthHandledRef = useRef(false);

  useEffect(() => {
    if (oauthHandledRef.current) {
      return;
    }

    oauthHandledRef.current = true;

    const handleSpotifyReturn = async () => {
      const result = await completeSpotifySocialGateFromUrl();

      if (result.status === "idle") {
        return;
      }

      if (result.status === "error") {
        setSpotifyState({
          status: "error",
          message: result.message,
        });
        return;
      }

      setSpotifyState({
        status: "success",
        message: "Follow completado. Redirigiendo a Red Ocean en Spotify...",
      });
      window.location.assign(SPOTIFY_TRACK_URL);
    };

    handleSpotifyReturn();
  }, []);

  const onSpotifyGateClick = async () => {
    setSpotifyState({
      status: "processing",
      message: "Abriendo Spotify para autorizacion...",
    });

    try {
      await startSpotifySocialGateAuth();
    } catch (errorObject) {
      setSpotifyState({
        status: "error",
        message: errorObject.message || "No se pudo iniciar autorizacion con Spotify.",
      });
    }
  };

  return (
    <>
      <h4 className="mt-3 text-center text-gold fantasy bg-purple p-3 purple-border rounded">
        Últimas Noticias
      </h4>
      <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Spotify Social Gate
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            Sigue mi perfil y desbloquea Red Ocean
          </Card.Title>
          <Card.Text className="fantasy purple-font">
            Presiona el boton para autorizar Spotify. Cuando se confirme el
            follow a mi perfil de artista, te redirigiremos automaticamente al
            track Red Ocean.
          </Card.Text>
          <Button
            className="inverted-outline-purple"
            onClick={onSpotifyGateClick}
            disabled={spotifyState.status === "processing"}
          >
            {spotifyState.status === "processing"
              ? "Conectando con Spotify..."
              : "Seguir en Spotify y abrir Red Ocean"}
          </Button>
          {spotifyState.message ? (
            <Card.Text
              className={`mt-3 fantasy ${
                spotifyState.status === "error" ? "text-danger" : "purple-font"
              }`}
            >
              {spotifyState.message}
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
      {/* <Card className="w-75 m-auto purple-border">
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
      </Card> */}
            <Card className="w-75 mt-2 m-auto purple-border">
        <Card.Header className="text-gold fantasy bg-purple">
          Red Ocean en vivo
        </Card.Header>
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            ¿Ya viste el Red Ocean en vivo?
          </Card.Title>
          <Card.Img
            variant="top"
            src="/images/modal-promo/RedOceanDesktop.png"
          />
          <Card.Text className="fantasy purple-font">
            Te recomiendo que veas este increíble performance en vivo de Red
            Ocean, grabado en el Teatro Garibay de Torreon, Coahuila.
          </Card.Text>
          <a
            href="https://www.youtube.com/watch?v=dRh95Jnt8aA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="inverted-outline-purple">Ver el Video</Button>
          </a>
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
          {/* <Link to="/weddings">
            <Button className="inverted-outline-purple">
              Ir a la sección de eventos privados
            </Button>
          </Link> */}
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
          {/* <Link to="/contact"> */}
            <Button href="https://wa.me/+528717274478" className="inverted-outline-purple">
              Puedes también contactarnos
            </Button>
          {/* </Link> */}
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
