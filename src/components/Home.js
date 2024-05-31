import { Container, Row, Col} from "react-bootstrap";
import React from "react";
import Visualizer from "./home/Visualizer";
import News from "./home/News";
import Releases from "./home/Releases";
import Bio from "./home/Bio";
import "../App.css";
function Home() {
  return (
    <div className="Gallery fade-in">
      <Container fluid>
        <Row className="mb-5 pb-5">
          {/* Noticias */}
          <Col lg={{ span: 3, order: 1 }} xs={{ span: 12, order: 2 }}>
           <News/>
          </Col>
          {/* Carousel */}
          <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <Visualizer/>
          {/* Bio */}
            <Bio/>
          </Col>
          {/* Lanzamientos */}
          <Col lg={{ span: 3, order: 3 }} xs={{ span: 12, order: 3 }}>
            <Releases/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
