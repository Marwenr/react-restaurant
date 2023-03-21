import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Auth from "../../Auth/Auth";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import Cart from "../../Cart/Cart";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const style = {
    color: "white",
    borderColor: "white",
    marginLeft: "auto",
    marginRight: "10px",
  };
  const styleLogOut = {
    color: "white",
    borderColor: "red",
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "10px",
  };

  const [show, setShow] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleModal = () => {
    setShow(true);
  };

  const logOut = () => {
    dispatch(signIn(false));
  };

  return (
    <>
      <Modal show={show} close={() => setShow(false)}>
        <Auth close={() => setShow(false)} />
      </Modal>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            OUR-RESTAURANT
          </Navbar.Brand>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button
            contentButton={isLoggedIn ? "LogOut" : "start"}
            style={isLoggedIn ? styleLogOut : style}
            onClick={isLoggedIn ? logOut : handleModal}
          />
          <Cart />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
