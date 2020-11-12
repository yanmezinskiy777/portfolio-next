import React from "react";
import BasePage from "@/components/layouts/basePage";
import auth0 from "../utils/auth0";
import { authUser, withAuth } from "../utils/auth0";

const OnlyeAdminSsr = ({ user, loading = false }) => {
  return (
    <BasePage>
      <div>
        <h1>Secret SSR - {user && user.nickname}</h1>
      </div>
    </BasePage>
  );
};

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authUser(req, res);
//   return { props: { user } };
// };

export const getServerSideProps = withAuth()("admin");

export default OnlyeAdminSsr;
