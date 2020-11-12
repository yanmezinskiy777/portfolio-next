import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import BasePage from "@/components/layouts/basePage";
import { useRouter } from "next/router";
import ProtfoliosApi from "../../lib/api/portfolios";
import PortfolioCard from "../../components/portfolioCard";
import { useGetUser } from "@/actions/user";
import { isAuthorize } from "@/utils/auth0";
import { useDeletePortfolio } from "@/actions/portfolios";
import Base from "@/components/layouts/base";

const Portfolio = ({ portfolios: initialPortfolios }) => {
 const [portfolios, setPortfolios] = useState(initialPortfolios);
  const { data, error, loading } = useGetUser();
  const [ deletePortfolioHandler, { delData, delError } ] = useDeletePortfolio();
  const router  = useRouter();

  const deletePortfolio = async (e, id) => {
    e.stopPropagation();
    const confirmDelete = confirm("Are you sure ?");
    if(confirmDelete){
      await deletePortfolioHandler(id);
      const filtredPortfolios = portfolios.filter(portfolio => portfolio._id !== id);
      setPortfolios(filtredPortfolios);
    } 
  }

  return (
    <Base transparent={true} header="header-bg">
      <BasePage className="page-bg">
        <div className="portfolio-page">
          <Row>
            {portfolios &&
              portfolios.map((portfolio) => (
                <Col key={portfolio._id} md="4" onClick={() => {router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)}}>
                  <PortfolioCard portfolio={portfolio}>
                  {isAuthorize(data, 'admin') &&  
                   <>
                      <Button color="warning" onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                        }}>edit</Button>
                      <Button onClick={(e) => deletePortfolio(e, portfolio._id)} color="danger ml-2">delete</Button>
                  </>}   
                  </PortfolioCard>
                </Col>
              ))}
          </Row>
        </div>
      </BasePage>
    </Base>
  );
};

export async function getStaticProps() {
  const result = await new ProtfoliosApi().get();
  const portfolios = result.data;
  return {
    props: { portfolios },
    revalidate: 1
  };
}

export default Portfolio;
