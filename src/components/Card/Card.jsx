import React from "react";
import { Card } from "react-bootstrap";
import Button from "../Button/Button"

const CardComponent = ({ title, description, image }) => {
  const imageSrc = require(`../../assets/imgs/${image}.png`);
  const style = {width: "100%", borderRadius: "30px"}
  return (
    <Card style={{height: "100%"}}>
      <Card.Img variant="top" src={imageSrc} className="p-4" />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button contentButton={"Add To Basket"} style={style}/>
      </Card.Body>
    </Card>
  );
};


export default CardComponent;
