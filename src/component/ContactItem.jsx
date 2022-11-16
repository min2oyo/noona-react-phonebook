import { Col, Row } from "react-bootstrap";

const ContactItem = () => {

  // 출력
  return (
    <>
      <Row>
        <Col lg={1}>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" />
        </Col>
        <Col lg={11}>
          <div>ina</div>
          <div>01000001111</div>
        </Col>
      </Row>
    </>
  );

};

export default ContactItem;