import { Col, Row } from "react-bootstrap";
import CardComponent from "../../components/Card/Card";

const Articles = ({ menuItems }) => {
  const cards = menuItems.map((el) => (
    <Col lg="6" key={el.id} className="mb-3">
      <CardComponent
        item={el}
      />
    </Col>
  ));
  return (
    <>
      <Row>{cards}</Row>
    </>
  );
};

export default Articles;
