import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const numberFormatter = new Intl.NumberFormat("es-MX");

const videos = [
  { id: "_P0CvgcVjUc", title: "Morning Coffee" },
  { id: "IuxXDzrA6Yo", title: "Becoming Insane — cover" },
  { id: "J0pw48AoSM8", title: "Yuanfen" },
  { id: "7vM2PO3mJTo", title: "Una de Bossa — con Karen López" },
];

function YouTubeVideos() {
  const [statistics, setStatistics] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;
    let requestController;

    if (!YOUTUBE_API_KEY) {
      console.error(
        "YouTube statistics are unavailable. Set REACT_APP_YOUTUBE_API_KEY to enable them."
      );
      setHasError(true);
      return () => {
        active = false;
      };
    }

    const fetchStatistics = async () => {
      requestController = new AbortController();
      const params = new URLSearchParams({
        part: "statistics",
        id: videos.map((video) => video.id).join(","),
        key: YOUTUBE_API_KEY,
      });

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?${params}`,
          { signal: requestController.signal }
        );
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error?.message || "YouTube Data API request failed.");
        }

        if (!active) return;

        const nextStatistics = {};
        result.items.forEach((item) => {
          nextStatistics[item.id] = item.statistics;
        });
        setStatistics(nextStatistics);
        setLastUpdated(new Date());
        setHasError(false);
      } catch (error) {
        if (!active || error.name === "AbortError") return;
        console.error("Unable to load YouTube video statistics.", error);
        setHasError(true);
      }
    };

    fetchStatistics();
    const intervalId = window.setInterval(fetchStatistics, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
      requestController?.abort();
    };
  }, []);

  const formatCount = (value) =>
    value === undefined ? "No disponible" : numberFormatter.format(Number(value));

  return (
    <section aria-labelledby="featured-videos-heading">
      <h2
        id="featured-videos-heading"
        className="text-gold fantasy mt-5 mb-4"
      >
        Videos destacados
      </h2>
      <Row className="g-4">
        {videos.map((video) => {
          const videoStatistics = statistics[video.id];

          return (
            <Col key={video.id} lg={6} xs={12}>
              <h3 className="text-gold fantasy mb-3">{video.title}</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`${video.title} de Elzen en YouTube`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-white mt-3 mb-1">
                Reproducciones: {formatCount(videoStatistics?.viewCount)}
                <br />
                Me gusta: {formatCount(videoStatistics?.likeCount)}
              </p>
              <a
                className="text-gold"
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en YouTube
              </a>
            </Col>
          );
        })}
      </Row>
      <p className="text-white mt-3" aria-live="polite">
        {hasError
          ? "Las estadísticas de YouTube no están disponibles en este momento."
          : lastUpdated
            ? `Estadísticas actualizadas: ${lastUpdated.toLocaleTimeString("es-MX")}. Se consultan cada 5 minutos; YouTube puede tardar en reflejar cambios.`
            : "Cargando estadísticas de YouTube..."}
      </p>
    </section>
  );
}

export default YouTubeVideos;
