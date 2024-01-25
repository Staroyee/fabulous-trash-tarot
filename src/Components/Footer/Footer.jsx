import { Container, Row, Col } from "react-bootstrap";
import FooterButton from "../FooterButton/FooterButton.jsx";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Container className="footer-background">
        <Row>
          <Col>
            <FooterButton
              className="footer-button"
              val="Shop"
              link="https://www.fabuloustrash.com.au"
            />
            <FooterButton
              className="footer-button"
              val="About"
              link="https://www.fabuloustrash.com.au/about"
            />
            <FooterButton
              className="footer-button"
              val="Contact Us"
              link="https://www.fabuloustrash.com.au/contact"
            />
            <FooterButton
              className="footer-button"
              val="Faq"
              link="https://www.fabuloustrash.com.au/faq"
            />
            <FooterButton
              className="footer-button"
              val="Wholesale"
              link="https://www.fabuloustrash.com.au/wholesale"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
