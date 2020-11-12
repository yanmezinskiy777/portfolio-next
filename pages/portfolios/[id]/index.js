import React from "react";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import PortfolioApi from "@/lib/api/portfolios";



const PortfolioPage = ({ portfolio }) => {

  return (
    <Base transparent={true} header="header-bg">
      <BasePage className="page-bg">
        <div>
          <h1>Portfolio single page</h1>
           {
             JSON.stringify(portfolio)
           }
        </div>
      </BasePage>
    </Base>
  );
};

// export async function getServerSideProps ({ query }) {
//   const result = await new PortfolioApi().getPortfolioById(query.id);
//   const portfolio = result.data;
//   return { props : { portfolio }}
// }

export async function getStaticPaths () {
  const result = await new PortfolioApi().get();
  const portfolios = result.data;
  const paths = portfolios.map(potrfolio => {
    return { params: {id: potrfolio._id} }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const result = await new PortfolioApi().getById(params.id);
  const portfolio = result.data;
  return { props : { portfolio }}
}

export default PortfolioPage;
