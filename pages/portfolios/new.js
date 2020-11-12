import React from "react";
import { Row, Col, Alert } from "reactstrap";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import PortfolioForm from "../../components/portfolioForm";
import WithAuth from "../../hoc/withAuth";
import { useSendProtfolio } from "../../actions/portfolios";
import Redirect from "../../components/shared/Redirect";

const PortfolioNew = () => {

  const [ potfolioHandler , { data, error, loading } ] = useSendProtfolio();
  
  const createPortfolio = (data) => {
    potfolioHandler(data)
  }

   if(data) { return <Redirect to="/portfolios" /> }

  return (
    <Base transparent={true} header="header-bg">
      <BasePage className="page-bg">
        <div>
          <h1>Create portfolio</h1>
        </div>
        <Row>
            <Col md="8">
               <PortfolioForm onSubmit={createPortfolio} />
            </Col>
            {error && <Alert color="danger" className="mt-3">{error}</Alert>}
        </Row>
      </BasePage>
    </Base>
  );
};

export default WithAuth(PortfolioNew)('admin');
