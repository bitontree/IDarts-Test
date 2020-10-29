import React from 'react'
import { Row, Col } from 'reactstrap';

const StatisticsCard = ({ qty, averageCost, investedAmt }) => {
  return (
    <div className="card justify-content-around">
      <Row>
        <Col className="col-7">
          <p className="mb-0 qty-label"><i className="fa fa-cube" aria-hidden="true"></i>Quantity</p>
        </Col>
        <Col className="col-5">
          <p className="mb-0 qty-value"><strong>{qty}</strong></p>
        </Col>
      </Row>
      <Row>
        <Col className="col-7">
          <p className="mb-0 qty-label"><i className="fa fa-at" aria-hidden="true"></i>Avg. Cost</p>
        </Col>
        <Col className="col-5">
          <p className="mb-0 qty-value"><strong>${averageCost}</strong></p>
        </Col>
      </Row>
      <Row>
        <Col className="col-7">
          <p className="mb-0 qty-label"><i className="fa fa-money" aria-hidden="true"></i>Invested Amt</p>
        </Col>
        <Col className="col-5">
          <p className="mb-0 qty-value"><strong>${investedAmt}</strong></p>
        </Col>
      </Row>
    </div>
  )
}

export default StatisticsCard
