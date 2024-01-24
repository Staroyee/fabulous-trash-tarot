import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import CardBack from "../../assets/images/card-back.png";
import CardBack2 from "../../assets/images/card-back-2.png";
import CardBack3 from "../../assets/images/card-back-3.png";
import "./card.css";

const Card = () => {
  const cardArray = [
    {
      card: CardBack,
      link: "https://www.fabuloustrash.com.au/",
    },
    {
      card: CardBack2,
      link: "https://www.fabuloustrash.com.au/shop",
    },
    {
      card: CardBack3,
      link: "https://www.fabuloustrash.com.au/about",
    },
  ];

  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardArray.length);
    return cardArray[randomIndex];
  }

  const handleCardClick = () => {
    window.location.reload();
  };

  const [isAnimationComplete, setAnimationComplete] = useState(false);
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
                className="card-deck"
                onClick={handleCardClick}
              />
            </div>
          </Col>
          <Col>
            <motion.div
              initial={{ x: -280, y: 0, rotateY: 0 }} // Set initial y to 0
              transition={{ ease: "easeOut", duration: 1 }}
              animate={{ x: 0, y: [0, -20, 0], rotateY: 180 }} // Animate from 0 to 10 and back to 0
              className="card2"
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              <motion.div
                transition={{ ease: "easeOut", duration: 0.4 }}
                whileHover={{ scale: 1.04 }}
              >
                {isAnimationComplete ? (
                  <Link
                    to={randomCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      initial={{ opacity: 0 }}
                      transition={{ ease: "easeOut", duration: 0.5 }}
                      animate={{ opacity: 100 }}
                      src={randomCard.card}
                      alt="front-of-tarot-card"
                      className="card-image"
                    />
                  </Link>
                ) : (
                  <img
                    src={CardBack}
                    alt="back-of-tarot-card"
                    className="card-image"
                    onClick={handleCardClick}
                  />
                )}
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
