import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="p-[65px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
