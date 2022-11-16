import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {

  // 변수
  const [name, setName] = useState(null);               // 이름
  const [phoneNumber, setPhoneNumber] = useState(null); // 전화번호

  // 출력
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={event => setName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContatct">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={event => setPhoneNumber(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </>
  );

};

export default ContactForm;