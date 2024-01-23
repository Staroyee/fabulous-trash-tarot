import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import CardBack from "../../assets/images/card-back.png";
import "./card.css";

const Card = () => {
  return (
    <>
      <Container>
        <Row className="container">
          <Col>
            <div className="card1">
              <img
                src={CardBack}
                alt="back-of-tarot-card"
                className="card-image"
              />
            </div>
          </Col>
          <Col>
            <motion.div
              initial={{ x: -280 }}
              transition={{ ease: "easeOut", duration: 1 }}
              animate={{ x: 0 }}
              className="card2"
            >
              <motion.div
                transition={{ ease: "easeOut", duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={CardBack}
                  alt="front-of-tarot-card"
                  className="card-image"
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
