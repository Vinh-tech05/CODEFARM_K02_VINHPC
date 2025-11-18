import { ToastContainer } from "react-toastify";
import AppRouter from "./routes/index.js";

const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
