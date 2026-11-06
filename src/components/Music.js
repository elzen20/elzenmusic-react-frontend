import { Container, Row, Col } from "react-bootstrap";
import YouTubeVideos from "./YouTubeVideos";
import "../App.css";
function Music() {
  return (
    <div className="text-align pb-5 mb-5 fade-in">
      <Container>
        <h1 className="text-gold fantasy mt-5 mb-3">Music/Videos</h1>
        <Row className="mb-5 pb-5">
          <Col lg={{ span: 6 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy my-5">Albums</h2>
            <iframe
              data-spotify-id="spotify:album:0PRQqqpwGG6UYQAHCHoBvt"
              title="Dual"
              src="https://open.spotify.com/embed/album/0PRQqqpwGG6UYQAHCHoBvt?utm_source=generator"
              width="100%"
              height="84%"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <h3 className="text-gold fantasy mt-4 mb-3">Dual completo en YouTube</h3>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/kfVKejPLbxo"
                title="Álbum completo Dual de Elzen en YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <a
              className="text-gold d-inline-block mt-2"
              href="https://www.youtube.com/watch?v=kfVKejPLbxo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir álbum completo en YouTube
            </a>
          </Col>
          <Col lg={{ span: 6 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy my-5">Sencillos</h2>
            <Row className="pb-3">
              <Col>
                <iframe
                  data-spotify-id="spotify:album:6pABdrwRwRfTHQYPWwxUSX"
                  title="Dancing with the wind"
                  src="https://open.spotify.com/embed/album/6pABdrwRwRfTHQYPWwxUSX?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
              <Col>
                <iframe
                  data-spotify-id="spotify:album:69GttmpEOfMib2GtoG6IyV"
                  title="Sabores Tropicales"
                  src="https://open.spotify.com/embed/album/69GttmpEOfMib2GtoG6IyV?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <iframe
                  data-spotify-id="spotify:album:6fVTD5jVP8XBdFMfKV7rGj"
                  title="Red Ocean"
                  src="https://open.spotify.com/embed/album/6fVTD5jVP8XBdFMfKV7rGj?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
              <Col>
                <iframe
                  data-spotify-id="spotify:track:338noVqm0UeBF1JfepZK1o"
                  title="Yuanfen"
                  src="https://open.spotify.com/embed/track/338noVqm0UeBF1JfepZK1o?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <iframe
                  data-spotify-id="spotify:album:6QBUSoP6rYS9pal3OhVzIv"
                  title="Kaleidoscope"
                  src="https://open.spotify.com/embed/album/6QBUSoP6rYS9pal3OhVzIv?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
              <Col>
                <iframe
                  data-spotify-id="spotify:album:43XXyRUBMv3SRAZ9YrpMxT"
                  title="Magical Music"
                  src="https://open.spotify.com/embed/album/43XXyRUBMv3SRAZ9YrpMxT?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>
            <h2 className="text-gold fantasy">EPs</h2>
            <iframe
              data-spotify-id="spotify:album:3V8Z33aqb77D6KM5ETyknO"
              title="Magical Music"
              src="https://open.spotify.com/embed/album/3V8Z33aqb77D6KM5ETyknO?utm_source=generator"
              width="100%"
              height="25%"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <Row className="pb-lg-5 mb-lg-5 p-md-0 m-md-0">
          <Col lg={{ span: 12 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy mt-5 mb-4">Playlist de Flamenco Jazz</h2>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLGZ34gicjTY8"
                title="Playlist de Flamenco Jazz de Elzen en YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <a
              className="text-gold d-inline-block mt-2"
              href="https://youtube.com/playlist?list=PLGZ34gicjTY8&si=bZiWbx3YsMehmLLW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir playlist en YouTube
            </a>
          </Col>
        </Row>
        <Row className="pb-lg-5 mb-lg-5 p-md-0 m-md-0">
          <Col lg={{ span: 12 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy mb-lg-5 p-md-0 m-md-0">Videos Musicales</h2>
            <YouTubeVideos />
            <Row className="pb-lg-5 mb-lg-5 p-md-0 m-md-0">
              <Col>
              <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/videoseries?si=LJazzyicVwxkWCzm&amp;list=PLF6N0Iy5VM_QXOkXHPF9TH0RJknCQoF38"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pb-lg-5 mb-lg-5 p-md-0 m-md-0">
          <Col lg={{ span: 12 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy mt-5 ">Colaboraciones</h2>
            <Row className="pb-lg-5 mb-lg-5 p-md-0 m-md-0">
              <Col>
              <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/7vM2PO3mJTo?si=AY30GglzyaY9mA2M8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <Col lg={{ span: 12 }} xs={{ span: 12 }}>
            <h2 className="text-gold fantasy my-5">Detras de Cámaras</h2>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Music;
