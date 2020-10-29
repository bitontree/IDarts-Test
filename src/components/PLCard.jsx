import React from "react";
import { Row, Col, Progress } from "reactstrap";

const PLCard = ({ pl, returnPercentage }) => {
  return (
    <div className="card justify-content-around">
      <Row className="mx-0 my-1">
        <Col md="6" sm="6" xs="6">
          <p className="mb-0 pl-label">
            <strong>Unrealized P/L</strong>
          </p>
        </Col>
        <Col md="6" sm="6" xs="6">
          <p className="mb-0 text-right pl-value">
            <strong>
              {pl >= 0 ? "$" : "-$"}
              {Math.abs(pl)}
            </strong>
          </p>
        </Col>
      </Row>
      <Row className="mx-0 my-1">
        <Col md="6" sm="6" xs="6">
          <p className="mb-0 retrun-label">% Return</p>
        </Col>
        <Col md="6" sm="6" xs="6">
          {returnPercentage > 0 && (
            <p className="mb-0 text-right return-value">
              <i className="fa fa-caret-up return-up" aria-hidden="true"></i>
              <strong>{Math.abs(returnPercentage)}%</strong>
            </p>
          )}
          {returnPercentage < 0 && (
            <p className="mb-0 text-right return-value">
              <i
                className="fa fa-caret-down return-down"
                aria-hidden="true"
              ></i>
              <strong>{Math.abs(returnPercentage)}%</strong>
            </p>
          )}
        </Col>
      </Row>
      <Row className="mx-0 my-1" style={{ justifyContent: "center" }}>
        <Col md="11" sm="11" xs="11">
          <Progress
            max={200}
            value={Math.abs(returnPercentage)}
            color={returnPercentage >= 0 ? "success" : "danger"}
            style={
              returnPercentage >= 0
                ? { marginLeft: "50%" }
                : { marginLeft: `${50 - Math.abs(returnPercentage) / 2}%` }
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default PLCard;
