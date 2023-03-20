import React from "react";
import { Nav } from "react-bootstrap";

const NavComponent = ({ items, handleMenu }) => {
  const navItems = items.map((item) => (
    <Nav.Item key={item.id}>
      <Nav.Link
        onClick={() => handleMenu(item.name)}
        eventKey={`link-${item.id}`}
      >
        {item.name}
      </Nav.Link>
    </Nav.Item>
  ));

  return (
    <Nav
      variant="pills"
      defaultActiveKey="link-1"
      className="mb-3 d-flex justify-content-center"
    >
      {navItems}
    </Nav>
  );
};

export default NavComponent;
