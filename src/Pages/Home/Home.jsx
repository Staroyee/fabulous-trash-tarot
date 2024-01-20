import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Tarot</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Click for a random tarot card!</p>
          </Col>
        </Row>
        <Row>
          <button>
            Card
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Home;
