import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import "./home.css"

const Home = () => {
  return (
    <>
      <Container className="home-container">
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
          <Link to="/card">
          <button>
            Card
          </button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Home;
