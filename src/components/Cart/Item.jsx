import { useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { sum } from "../../store/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinus = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const data = {
      item: item,
      quantity: quantity,
    };
    dispatch(sum(data));
  }, [dispatch, item, quantity]);

  return (
    <>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price} TND</td>
        <td>
          <AiFillMinusSquare
            className="fs-4 me-2"
            style={{ color: "#842029" }}
            onClick={handleMinus}
          />
          {quantity}
          <AiFillPlusSquare
            className="fs-4 ms-2"
            style={{ color: "#842029" }}
            onClick={handlePlus}
          />
        </td>
        <td>{item.price * quantity} TND</td>
      </tr>
    </>
  );
};

export default Item;
