import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Container className="footer-background">
        <Row>
          <Col>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.fabuloustrash.com.au/"
            >
              Shop
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.fabuloustrash.com.au/about"
            >
              About
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.fabuloustrash.com.au/contact"
            >
              Contact Us
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.fabuloustrash.com.au/faq"
            >
              FAQ
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.fabuloustrash.com.au/wholesale"
            >
              Wholesale
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
