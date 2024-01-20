import { Navbar, Container } from "react-bootstrap";
import "./header.css"

const Header = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container className="container">
          <h1 className="title">Fabulous Trash</h1>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
