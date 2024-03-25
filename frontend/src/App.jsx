import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "20px auto" }}>
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
