import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={80}
            src="https://i.namu.wiki/i/oOw_ggGZrMtVtoMOBQL9tXtstal02F48mHuZTITXV_AEeHrsWePkQ9r_qxaIRslpgXgpMz72gvftMYjrbjdkuA.webp"
            alt="인물사진"
          />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
