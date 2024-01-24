import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container className="container">
          <Link to="/">
            <h1 className="title">Fabulous Spells</h1>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
