import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../Auth/Auth";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";

const Header = () => {
  const style = { color: "white", borderColor: "white" };
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(true);
  };
  return (
    <>
      <Modal show={show} close={() => setShow(false)} >
        <Auth />
      </Modal>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            OUR-RESTAURANT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="Menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="Offers">
                Offers
              </Nav.Link>
              <Nav.Link as={Link} to="About">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button contentButton={"Start"} style={style} onClick={handleModal} />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
