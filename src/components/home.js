import { Carousel, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="Gallery">
      <Container>
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
      </Container>
    </div>
  );
}

export default Home;
