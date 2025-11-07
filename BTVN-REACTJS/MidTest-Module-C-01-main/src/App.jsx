import React from "react";
import AppRoute from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
};

export default App;
