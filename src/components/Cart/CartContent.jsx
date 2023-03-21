import { Card, ListGroup, Table } from "react-bootstrap";

import Item from "./Item";
import Button from "../Button/Button";
import withGuard from "../../util/withGuard"

const CartContent = ({ items }) => {
  const cartItem =
    items.length !== 0 ? (
      items.map((item, index) => <Item item={item} key={index} />)
    ) : (
      <tr>
        <td>vide</td>
      </tr>
    );

  let res = 0;
  items.map((el) => (res = res + el.price * el.quantity));
  let discount = res >= 100 ? 12 : 0;

  return (
    <>
        <Table responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{cartItem}</tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <Card style={{ width: "18rem" }} className="rounded-0">
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontSize: "14px" }}>
                <div className="d-flex justify-content-between">
                  <div>Subtotal:</div>
                  <div>{res}TND</div>
                </div>
                <div className="d-flex justify-content-between text-danger">
                  <div>Discount:</div>
                  <div>- {discount}TND</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex justify-content-between fw-bold">
                  <div>GRAND TOTAL:</div>
                  <div>{res - discount}TND</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
            <Button contentButton={"PROCEED TO CHECKOUT"} />
          </Card>
        </div>
    </>
  );
};

export default withGuard(CartContent);
