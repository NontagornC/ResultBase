import React from "react";
import Image from "next/image";
import RBLogo from "@/asset/image/img_rb_logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-[157px] py-6 flex items-center px-[169px] justify-between shadow-xl">
      <div className="flex justify-center items-center">
        <Image src={RBLogo} alt="RB Logo" />
      </div>
      <div className="flex items-center gap-12">
        <span className="text-[20px] font-semibold text-black">About us</span>
        <span className="text-[20px] font-semibold text-black">Exhibition</span>
        <span className="text-[20px] font-semibold text-black">Portfolio</span>
        <div className="flex items-center justify-center bg-[#1B2B58] text-[#FFFFFF] w-[110px] h-[52px] rounded-xl font-medium text-[16px]">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
