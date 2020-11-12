import React from "react";
import "@/styles/main.scss";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
