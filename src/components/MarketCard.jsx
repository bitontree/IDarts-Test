import React from "react";
import { Row, Col, Progress } from "reactstrap";

const MarketCard = ({ price, qty, portfolioPercent }) => {
  const marketValue = price * qty;
  return (
    <div className="card justify-content-around">
      <Row className="mx-0 my-1">
        <Col className="col-7">
          <p className="mb-0 market-label">
            <strong>Market Value</strong>
          </p>
        </Col>
        <Col className="col-5">
          <p className="mb-0 text-right market-value">
            <strong>${marketValue}</strong>
          </p>
        </Col>
      </Row>
      <Row className="mx-0 my-1">
        <Col className="col-8">
          <p className="mb-0 portfolio-per-label">% of portfolio value</p>
        </Col>
        <Col className="col-4">
          <p className="mb-0 text-right portfolio-per-value">
            <strong>{portfolioPercent}%</strong>
          </p>
        </Col>
      </Row>
      <Row className="mx-0 my-1" style={{ justifyContent: "center" }}>
        <Col className="col-11">
          <Progress value={portfolioPercent} color="success" />
        </Col>
      </Row>
    </div>
  );
};

export default MarketCard;
