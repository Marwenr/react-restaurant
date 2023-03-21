import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Articles from "../components/Articles/Articles";
import Nav from "../components/Nav/Nav";

import { menuItems } from "../data/data";

const Menu = () => {
  const image = require(`../assets/imgs/women.png`);

  const [active, setActive] = useState(menuItems[0].name);
  const [menuCategory] = menuItems.filter((menu) => menu.name === active);

  const handleMenu = (item) => {
    setActive(item);
  };

  return (
    <div
      className="bg-dark"
      style={{ minHeight: "calc(100vh - (56px + 56px)" }}
    >
      <Container className="pt-5 pb-5">
        <Row className="d-flex align-items-center">
          <Col lg="4">
            <img src={image} style={{ width: "100%" }} alt="bg" />
          </Col>
          <Col lg="7" className="border p-5 bg-white cardContent">
            <Nav items={menuItems} handleMenu={handleMenu} />
            <Articles menuItems={menuCategory.articles} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
