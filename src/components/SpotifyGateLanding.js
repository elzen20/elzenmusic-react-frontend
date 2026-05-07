import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { analytics, logEvent } from "../js/firebase";
import "./SpotifyGateLanding.css";

const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/786LaXEMjTkduykfZsmbox";
const SPOTIFY_TRACK_URL =
  "https://open.spotify.com/album/6fVTD5jVP8XBdFMfKV7rGj";

function SpotifyGateLanding() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source") || "direct";
  const utmMedium = params.get("utm_medium") || "none";
  const utmCampaign = params.get("utm_campaign") || "none";
  const trafficInfo = { utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign };

  const handleListen = () => {
    logEvent(analytics, "spotify_gate_listen_click", { song: "Red Ocean", ...trafficInfo });
    window.location.assign(SPOTIFY_TRACK_URL);
  };

  const handleFollow = () => {
    logEvent(analytics, "spotify_gate_follow_click", { artist: "Elzen", ...trafficInfo });
    window.open(SPOTIFY_ARTIST_URL, "_blank", "noopener,noreferrer");
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/modal-promo/Red_Ocean_CTA_Image_2.png)`,
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

        <button className="spotify-gate-follow-btn" onClick={handleFollow}>
          Seguirme en Spotify
        </button>

        <Link
          to="/website"
          className="spotify-gate-ghost-link"
          onClick={() => logEvent(analytics, "spotify_gate_website_click", { ...trafficInfo })}
        >
          Ir a WebSite Oficial
        </Link>
      </section>
    </main>
  );
}

export default SpotifyGateLanding;
