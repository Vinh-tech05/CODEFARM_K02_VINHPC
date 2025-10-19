import React from "react";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
