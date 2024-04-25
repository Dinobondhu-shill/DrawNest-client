import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


const Root = () => {
  return (
    <div className="px-24">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <head>this is root</head>
    </div>
  );
};

export default Root;