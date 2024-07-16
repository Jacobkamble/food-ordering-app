import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
