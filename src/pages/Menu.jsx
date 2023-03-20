import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Articles from "../components/Articles/Articles";
import Nav from "../components/Nav/Nav";

const Menu = () => {
  const image = require(`../assets/imgs/women.png`);

  const menuItems = [
    {
      id: 1,
      name: "LUNCH BOX",
      articles: [
        {
          id: 1,
          name: "Lamb Meat Burger Deluxe",
          image: "sandwich",
          description:
            "chargrilled lamb patty with tomato & lettuce topped with house special yogurt sauce and cheese with your choice of sides and a soft drink",
        },
        {
          id: 2,
          name: "Vegetarian Burger Deluxe",
          image: "sandwich2",
          description:
            "classic vegetarian burger with your choice of sides and soft drink",
        },
      ],
    },
    {
      id: 2,
      name: "PIZZAS - THE CLASSICS",
      articles: [
        {
          id: 1,
          name: "Margherita",
          image: "pizza1",
          description: "Classic Margherita Pizza",
        },
        {
          id: 2,
          name: "Veg Extravaganza",
          image: "pizza2",
          description:
            "Bell Pepper, Mushroom, Sweet Corn, Olives,Mozzarella, Onions, Eggplant & Tomato Sauce",
        },
      ],
    },
    {
      id: 3,
      name: "DRINKS",
      articles: [
        {
          id: 1,
          name: "Cola",
          image: "cola",
          description: "A soft drink of your choice",
        },
        {
          id: 2,
          name: "Water",
          image: "water",
          description: "Water Bottle",
        },
      ],
    },
  ];

  const [active, setActive] = useState(menuItems[0].name);

  const handleMenu = (item) => {
    setActive(item);
  };

  const [menuCategory] = menuItems.filter((menu) => menu.name === active);

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
