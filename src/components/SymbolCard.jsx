import React from "react";
import { Col, Row } from "reactstrap";

const SymbolCard = ({ name, price }) => {
  return (
    <div className="title-card d-flex">
      <Row className="d-flex align-items-center">
        <Col md="2" xs="2" sm="2">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Col>
        <Col md="3" xs="3" sm="3" className="align-content-center">
          <Row className="justify-content-center">
            <p style={{ lineHeight: 0 }} className="my-0 symbol-name">
              {name}
            </p>
          </Row>
          <Row className="justify-content-center">
            <div>
              <span className="symbol-currency">$</span>
              <span className="my-0 price-text">{price}</span>
            </div>
          </Row>
        </Col>
        <Col md="7" xs="7" sm="7">
          <div>
            <img
              src="/symbol.png"
              alt="logo"
              className="img-fluid img-thumbnail w-md-100 w-75 w-sm-50"
              width="100%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SymbolCard;
