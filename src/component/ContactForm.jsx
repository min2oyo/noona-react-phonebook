import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {

  // 변수
  const dispatch = useDispatch();                    // 리덕스
  const [name, setName] = useState(null);               // 이름
  const [phoneNumber, setPhoneNumber] = useState(null); // 전화번호

  // 함수
  const addContact = event => { // 추가 클릭
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  // 출력
  return (
    <>
      <Form onSubmit={addContact}>
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