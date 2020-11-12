import React from "react";
import { useRouter } from "next/router";
import { Row, Col, Alert } from "reactstrap";
import { toast } from 'react-toastify';
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import WithAuth from "@/hoc/withAuth.js"
import { useGetPortfolioById, useUpdateProtfolio } from "@/actions/portfolios";
import PortfolioForm from "@/components/portfolioForm";


const EditPortfolio = () => {
    const router = useRouter();
    const { data: initialData } = useGetPortfolioById(router.query.id);
    const [ updatePortfolio, { data, error, loading } ] = useUpdateProtfolio();

    const _updatePortfolio = async (data) => {
      try{
        await updatePortfolio(router.query.id, data);
        toast.success('Portfolio was updated successfly!', { autoClose: 2000 });
      } catch (e) {
        console.error(e.message);
      }
    }

  return (
    <Base transparent={true} header="header-bg">
      <BasePage className="page-bg">
        <div>
          <h1>Edit portfolio</h1>
          <Row>
             <Col md="8">
                {initialData && <PortfolioForm initialData={initialData} onSubmit={_updatePortfolio} />}
                {error && <Alert color="danger" className="mt-3">{error}</Alert>}
             </Col>
          </Row>
        </div>
      </BasePage>
    </Base>
  );
};

export default WithAuth(EditPortfolio)('admin');
