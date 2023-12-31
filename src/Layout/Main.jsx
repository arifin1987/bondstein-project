import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="m-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
