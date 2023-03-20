import React from "react";
import {Button} from "react-bootstrap"
import styles from "./styles.module.css"

const ButtonMain = ({contentButton, style, onClick}) => {
  const { colorbtn } = styles
  return (
    <Button variant="outline-danger" className={colorbtn} style={style} onClick={onClick}>
      {contentButton}
    </Button>
  );
};

export default ButtonMain;
