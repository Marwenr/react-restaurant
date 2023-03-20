import { Navbar } from "react-bootstrap";

const Footer = () => {
  let date =  new Date().getFullYear();
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
      <Navbar.Brand>© {date} Copyright: Marwen Rhim</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
