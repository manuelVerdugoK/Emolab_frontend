import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import './Global.css';

const Layout = () => {
  return (
    <>
      <div className="main">
        <Navbar />

        <Outlet />
      </div>
    </>
  )
};

export default Layout;