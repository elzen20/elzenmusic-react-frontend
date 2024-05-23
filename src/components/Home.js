import { Carousel, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="Gallery">
      <Container fluid>
        <Row>
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
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
          <a href="https://soundbetter.com/profiles/609948-elzen" rel="noopener noreferrer" target="_blank" title="Elzen profile on SoundBetter" ><img alt="Elzen, Electric Guitar on SoundBetter" src="https://d2p6ecj15pyavq.cloudfront.net/assets/SoundBetterBadge-c84cb3e75c4267f5bee41f7f617a81d9.svg"  /></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
