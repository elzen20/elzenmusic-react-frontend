import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  completeSpotifySocialGateFromUrl,
  SPOTIFY_TRACK_URL,
  startSpotifySocialGateAuth,
} from "../js/spotifySocialGate";
import "./SpotifyGateLanding.css";

function SpotifyGateLanding() {
  const [state, setState] = useState({
    status: "idle",
    message: "",
  });
  const oauthHandledRef = useRef(false);

  useEffect(() => {
    if (oauthHandledRef.current) {
      return;
    }

    oauthHandledRef.current = true;

    const resolveCallback = async () => {
      const result = await completeSpotifySocialGateFromUrl();

      if (result.status === "idle") {
        return;
      }

      if (result.status === "error") {
        setState({
          status: "error",
          message: result.message,
        });
        return;
      }

      setState({
        status: "success",
        message: "Follow completado. Redirigiendo al track Red Ocean...",
      });
      window.location.assign(SPOTIFY_TRACK_URL);
    };

    resolveCallback();
  }, []);

  const handleStart = async () => {
    setState({
      status: "processing",
      message: "Abriendo autenticacion de Spotify...",
    });

    try {
      await startSpotifySocialGateAuth();
    } catch (errorObject) {
      setState({
        status: "error",
        message:
          errorObject.message || "No se pudo iniciar la autenticacion con Spotify.",
      });
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/modal-promo/Red_Ocean_CTA_Image.png)`,
  };

  return (
    <main className="spotify-gate-page" style={backgroundStyle}>
      <div className="spotify-gate-overlay" />
      <section className="spotify-gate-panel">
        <p className="spotify-gate-kicker">Spotify Social Gate</p>
        <h1 className="spotify-gate-title">Escucha Red Ocean</h1>
        <p className="spotify-gate-copy">
          Sigue mi perfil de artista en Spotify y te llevamos automaticamente al
          track.
        </p>

        <Button
          className="spotify-gate-cta"
          onClick={handleStart}
          disabled={state.status === "processing"}
        >
          {state.status === "processing"
            ? "Conectando con Spotify..."
            : "Escuchar Red Ocean ❤🌊"}
        </Button>

        {state.message ? (
          <p
            className={`spotify-gate-message ${
              state.status === "error" ? "spotify-gate-error" : ""
            }`}
          >
            {state.message}
          </p>
        ) : null}

        <Link to="/website" className="spotify-gate-ghost-link">
          Ir a WebSite Oficial
        </Link>
      </section>
    </main>
  );
}

export default SpotifyGateLanding;
