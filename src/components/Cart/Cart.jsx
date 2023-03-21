import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

import Modal from "../Modal/Modal";
import CartContent from "./CartContent";

const Cart = () => {
  const [show, setShow] = useState(false);
  const { items } = useSelector((state) => state.cart);
  return (
    <>
      <Modal show={show} close={() => setShow(false)}>
        <CartContent items={items} />
      </Modal>
      <div
        className="text-white position-relative"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <span className="cart">{items.length}</span>
        <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
      </div>
    </>
  );
};

export default Cart;
