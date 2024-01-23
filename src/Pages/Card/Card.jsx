import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import CardBack from "../../assets/images/card-back.png";
import CardBack2 from "../../assets/images/card-back-2.png";
import CardBack3 from "../../assets/images/card-back-3.png";
import "./card.css";

const Card = () => {
  const cardArray = [CardBack, CardBack2, CardBack3];

  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
  }

  const handleCardClick = () => {
    window.location.reload();
  };

  const randomCard = getRandomCard();
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
                onClick={handleCardClick}
              >
                <img
                  src={randomCard}
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
