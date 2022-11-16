import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {

  // 출력
  return (
    <>
      <Row>
        <Col lg={1}>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" />
        </Col>
        <Col lg={11}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </>
  );

};

export default ContactItem;