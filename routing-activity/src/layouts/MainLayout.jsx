import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="safe-space">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;