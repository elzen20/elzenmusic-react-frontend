import { Card, Button } from "react-bootstrap";
import React from "react";

function Releases() {
  return (
    <>
      <h4 className="mt-3 text-center text-gold fantasy bg-purple p-3 purple-border rounded">
        ¿Ya escuchaste mis Lanzamientos?
      </h4>

      <Card className="text-center w-75 m-auto purple-border">
        <Card.Img variant="top" src="images/covers/sabores_tropicales.png" />
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            Sabores Tropicales
          </Card.Title>
          <Card.Text className="fantasy purple-font">
            Elzen feat (León Escargoth, Saul Ruiz, Kuyt Duran, Marcela Rocha)
          </Card.Text>
          <a href="https://open.spotify.com/intl-es/track/3WEpaMiTd9Yn7GzCZ1l8n7?si=c73197def135425e" target="_blank" rel="noopener noreferrer">
          <Button className="inverted-outline-purple">Ir a Spotify</Button>
          </a>
          
        </Card.Body>
      </Card>
      <Card className="text-center mt-2 w-75 m-auto purple-border">
        <Card.Img
          variant="top"
          src="images/covers/dancing_in_the_wind_cover.png"
        />
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">
            Dancing with the wind
          </Card.Title>
          <Card.Text className="fantasy purple-font">
            Elzen feat (León Escargoth)
          </Card.Text>
          <a href="https://open.spotify.com/intl-es/track/4KccVEuqRggvcyyZyZ5wqE?si=adf789583fcc42da" target="_blank" rel="noopener noreferrer">
          <Button className="inverted-outline-purple">Ir a Spotify</Button>
          </a>
          
        </Card.Body>
      </Card>
      <Card className="text-center mt-2 w-75 m-auto purple-border">
        <Card.Img variant="top" src="images/covers/red_ocean.jpg" />
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">Red Ocean</Card.Title>
          <Card.Text className="fantasy purple-font">Elzen</Card.Text>
          <a href="https://open.spotify.com/intl-es/album/6fVTD5jVP8XBdFMfKV7rGj?si=DdJrt32aTHmtqxnLMMLyHQ" target="_blank" rel="noopener noreferrer">
          <Button className="inverted-outline-purple">Ir a Spotify</Button>
          </a>
          
        </Card.Body>
      </Card>
      <Card className="text-center mt-2 w-75 m-auto purple-border">
        <Card.Img variant="top" src="images/covers/dual.png" />
        <Card.Body className="bg-light-gold">
          <Card.Title className="fantasy purple-font">Dual</Card.Title>
          <Card.Text className="fantasy purple-font">Elzen</Card.Text>
          <a href="https://open.spotify.com/intl-es/album/0PRQqqpwGG6UYQAHCHoBvt?si=v-M1XKmzTGiBGNt5WXw7ng" target="_blank" rel="noopener noreferrer">
          <Button className="inverted-outline-purple">Ir a Spotify</Button>
          </a>
          
        </Card.Body>
      </Card>
    </>
  );
}

export default Releases;
