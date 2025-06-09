import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormDialog from "../ui/FormDialog";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col">
      <FormDialog />
      <Navbar />
      <div className="p-[65px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
