import React from "react";
import BasePage from "@/components/layouts/basePage";
import { useGetUser } from "../actions/user";
import Redirect from "../components/shared/Redirect";
import WithAuth from "../hoc/withAuth";

const Secret = ({ data, loading }) => {
  return (
    <BasePage>
      <div>
        <h1>Secret - {data.nickname}</h1>
      </div>
    </BasePage>
  );
};

export default WithAuth(Secret)();
