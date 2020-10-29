import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Col, Row, Input } from "reactstrap";

const PortfolioChart = ({ symbols }) => {
  const chartData = useMemo(() => {
    const symbolAggregate = symbols.reduce((obj, { price, qty, investmentType }) => {
      obj[investmentType] = (obj[investmentType] || 0) + price * qty;
      return obj;
    }, {});

    const keys = Object.keys(symbolAggregate);
    const total = Object.values(symbolAggregate).reduce((a, b) => a + b, 0);
    const value = keys.map((investmentType) =>
      ((symbolAggregate[investmentType] / total) * 100).toFixed(2)
    );
    return {
      datasets: [
        {
          data: value,
          backgroundColor: ["skyblue", "orange"],
          borderWidth: [0, 0],
        },
      ],
      labels: keys,
    };
  }, [symbols]);

  const options = {
    rotation: 135,
    cutoutPercentage: 70,
  };

  const legend = {
    position: "right",
    onClick: null,
    fullWidth: false,
    labels: {
      boxWidth: 10,
    },
  };

  return (
    <div className="bg-white p-2 graph">
      <Row>
        <Col md="4" sm="4" xs="4">
          <p>
            <strong>Portfolio</strong>
          </p>
        </Col>
        <Col md="8" sm="8" xs="8">
          <Input type="select" bsSize="sm" className="assets-select">
            <option value="">Asset-wise</option>
          </Input>
        </Col>
      </Row>
      <Row>
        <Col md="12" sm="12" xs="12">
          <Doughnut data={chartData} legend={legend} options={options} />
        </Col>
      </Row>
    </div>
  );
};

export default PortfolioChart;
