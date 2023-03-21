import React from "react";
import { Card } from "react-bootstrap";

import Button from "../Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { order } from "../../store/cartSlice";

const CardComponent = ({ item }) => {
  const imageSrc = require(`../../assets/imgs/${item.image}.png`);
  const style = { width: "100%", borderRadius: "30px" };

  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const handleOrder = () => {
    if (items.find((el) => el.name === item.name) === undefined) {
      item.quantity = 1;
      dispatch(order(item));
    }
  };

  console.log(items);

  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={imageSrc} className="p-4" />
      <Card.Body className="text-center">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button
          contentButton={"Add To Basket"}
          style={style}
          onClick={handleOrder}
        />
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
