import React from "react";
import Redirect from "../components/shared/Redirect";
import { useGetUser } from "../actions/user";
import { isAuthorize } from "../utils/auth0";

const WithAuth = (Component) => (role) => {
  return (props) => {
    const { data, error, loading } = useGetUser();
    if (loading) {
      return <p>loading...</p>;
    }

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />;
    } else {
      if (role && !isAuthorize(data, role)) {
        return <Redirect ssr to="/api/v1/login" />;
      }
    }
    return <Component data={data} loading={loading} {...props} />;
  };
};

export default WithAuth;
