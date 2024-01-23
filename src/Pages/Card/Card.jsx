import { useState } from "react";

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
                  className="card-image"
                  onClick={handleCardClick}
                />
              </div>
            </Col>
            <Col>
              <motion.div
                initial={{ x: -280, rotateY: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                animate={{ x: 0, rotateY: 180 }}
                className="card2"
                onAnimationComplete={() => setAnimationComplete(true)}
              >
                <motion.div
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {isAnimationComplete ? (
                    <motion.img
                    initial={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: .5 }}
                    animate={{ opacity: 100 }}
                      src={randomCard}
                      alt="front-of-tarot-card"
                      className="card-image"
                    />
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
