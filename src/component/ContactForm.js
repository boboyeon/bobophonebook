import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); // 새로고침을 막아줌
    dispatch({
      type: "ADD_CONTACT",
      //payload: { name: name, phoneNumber: phoneNumber }, -> 기본형
      payload: { name, phoneNumber }, // 이름과 값이 같은 경우 기본형에서 축약하여 사용 가능, ES6 최신 문법
    });
  };
  // Form의 특징 - 버튼을 누르면 페이지를 새로고침함

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {/* button의 type이 "submit"인 경우 onClick 이벤트 대신 onSubmit 이벤트 사용, 특히 Form 안에 있는 경우 onSubmit으로 동작 */}
          연락처 추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
