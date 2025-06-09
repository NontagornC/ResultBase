import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormDialog from "../ui/FormDialog";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <FormDialog />
      <Navbar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-[65px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
