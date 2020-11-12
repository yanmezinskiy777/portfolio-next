import React from "react";
import Header from "../shared/Header";
import { useGetUser } from "../../actions/user";
import { ToastContainer } from 'react-toastify';

const Base = (props) => {
  const { data, error, loading } = useGetUser();
  return (
    <div className="layout-container">
      <Header user={data} className={props.header} loading={loading} />
      <main
        style={{ backgroundImage: `${props.transparent ? "none" : ""}` }}
        className={`cover ${props.className}`}
      >
        <div className="wrapper">{props.children}</div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Base;
