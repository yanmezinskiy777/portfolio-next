import React from "react";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";

const Blogs = () => {
  return (
    <Base transparent={true} header="header-bg">
      <BasePage className="page-bg">
        <div>
          <h1>Blogs</h1>
        </div>
      </BasePage>
    </Base>
  );
};

export default Blogs;
