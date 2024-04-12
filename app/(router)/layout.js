import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
      </div>
      <div className="sm:ml-64">{children}</div>
    </div>
  );
};

export default Layout;
