import React from "react";
import { Row, Col } from "reactstrap";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import { withAuth } from "@/utils/auth0";
import auth0 from "@/utils/auth0";
import Masthead from "@/components/shared/Masterhead";
import BlogApi from "@/lib/api/blogs";

const Dashboard = ({ blogs }) => {
  console.log(blogs);
  return (
    <Base>
    <Masthead imagePath="/images/bg-image.jpg" />
    <BasePage>
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
          </Col>
        </Row>
      </BasePage>
    </Base>
  );
};


export const getServerSideProps = withAuth(async ({req, res}) => {
  const { accessToken } = await auth0.getSession(req);
  const json = await new BlogApi(accessToken).getByUser();
  return { blogs: json.data }
})('admin');

export default Dashboard;
