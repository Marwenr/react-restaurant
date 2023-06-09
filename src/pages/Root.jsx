import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/Layout";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
