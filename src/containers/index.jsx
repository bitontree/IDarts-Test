import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import SymbolCard from "../components/SymbolCard";
import StatisticsCard from "../components/StatisticsCard";
import MarketCard from "../components/MarketCard";
import PLCard from "../components/PLCard";
import ActionButtons from "../components/ActionButtons";
import PortfolioChart from "../components/PortfolioChart";
import { getSymbol } from "../store/action/symbol";
import { useDispatch, useSelector } from "react-redux";

const MainContent = () => {
  const dispatch = useDispatch();
  const symbols = useSelector((state) => state.symbols.symbol);

  useEffect(() => {
    dispatch(getSymbol());
  }, [dispatch]);

  return (
    <div className="main-content py-md-3">
      <Container fluid={true}>
        <Row>
          <Col
            lg="9"
            md="12"
            xs="12"
            sm="12"
            className="col-12 col-sm-12 col-md-9"
          >
            {symbols.map((symbol, index) => (
              <Row key={index} className="symbols">
                <Col
                  className="d-flex align-items-center px-1 my-sm-2  my-2"
                  md="4"
                  sm="6"
                >
                  <SymbolCard name={symbol.symbolName} price={symbol.price} />
                </Col>
                <Col md="3" sm="6" xs="6" className="px-1 my-sm-2  my-2">
                  <StatisticsCard
                    investedAmt={symbol.investedAmt}
                    averageCost={symbol.averageCost}
                    qty={symbol.qty}
                  />
                </Col>
                <Col md="2" sm="5" xs="6" className="px-1 my-sm-2  my-2">
                  <MarketCard
                    price={symbol.price}
                    qty={symbol.qty}
                    portfolioPercent={symbol.portfolioPercent}
                  />
                </Col>
                <Col md="2" sm="5" xs="6" className="px-1 my-sm-2  my-2">
                  <PLCard
                    pl={symbol.pl}
                    returnPercentage={symbol.returnPercentage}
                  />
                </Col>
                <Col
                  md="1"
                  sm="2"
                  xs="6"
                  offset="1"
                  className="px-1 my-sm-2 my-2"
                >
                  <ActionButtons symbol={symbol} />
                </Col>
              </Row>
            ))}
          </Col>
          <Col lg="3" md="6" sm="12">
            <PortfolioChart symbols={symbols} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
