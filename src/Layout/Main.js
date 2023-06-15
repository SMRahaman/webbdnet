import React from "react";
import Header from "../ShareComponents/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ShareComponents/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
