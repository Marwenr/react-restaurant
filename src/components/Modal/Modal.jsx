import React, { Fragment } from "react";
import PortalReactDOM from "react-dom";
import styles from "./styles.module.css";
import { CloseButton } from "react-bootstrap";

const Backdrop = ({ show, close }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.show : ""}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ children, show, close }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOvr : ""}`}>
      <CloseButton aria-label="Hide" style={{ position: "absolute", right: "13px" }} onClick={close} />
      {children}
    </div>
  );
};

const modal = ({ children, show, close }) => {
  return (
    <Fragment>
      {PortalReactDOM.createPortal(
        <Fragment>
          <Backdrop close={close} show={show} />
          <Overlay show={show} close={close}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default modal;
