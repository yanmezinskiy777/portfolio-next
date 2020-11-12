import React from "react";
import BasePage from "@/components/layouts/basePage";
import WithAuth from "../hoc/withAuth";

const OnlyAdmin = ({ data, loading }) => {
  return (
    <BasePage>
      <div>
        <h1>Secret - {data.nickname}</h1>
      </div>
    </BasePage>
  );
};

export default WithAuth(OnlyAdmin)("admin");
