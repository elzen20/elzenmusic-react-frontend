import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SpotifyGateLanding.css";

const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/786LaXEMjTkduykfZsmbox";
const SPOTIFY_TRACK_URL =
  "https://open.spotify.com/album/6fVTD5jVP8XBdFMfKV7rGj";

function SpotifyGateLanding() {
  const handleListen = () => {
    window.open(SPOTIFY_ARTIST_URL, "_blank", "noopener,noreferrer");
    window.location.assign(SPOTIFY_TRACK_URL);
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/modal-promo/Red_Ocean_CTA_Image.png)`,
  };

  return (
    <main className="spotify-gate-page" style={backgroundStyle}>
      <div className="spotify-gate-overlay" />
      <section className="spotify-gate-panel">
        <p className="spotify-gate-kicker">Nueva Canción</p>
        <h1 className="spotify-gate-title">Escucha Red Ocean</h1>
        <p className="spotify-gate-copy">
          Sigue mi perfil en Spotify y escucha el nuevo track.
        </p>

        <Button className="spotify-gate-cta" onClick={handleListen}>
          Escuchar Red Ocean ❤🌊
        </Button>

        <Link to="/website" className="spotify-gate-ghost-link">
          Ir a WebSite Oficial
        </Link>
      </section>
    </main>
  );
}

export default SpotifyGateLanding;
