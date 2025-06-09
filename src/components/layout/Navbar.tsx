"use client"; // เพิ่มบรรทัดนี้
import React from "react";
import Image from "next/image";
import RBLogo from "@/asset/image/img_rb_logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `text-[20px] cursor-pointer font-semibold ${
      isActive ? "text-[#0056C7]" : "text-black"
    } transition-colors`;
  };

  return (
    <div className="w-full h-[157px] py-6 flex items-center px-[169px] justify-between shadow-xl">
      <Link
        href={"/"}
        className="flex justify-center items-center cursor-pointer"
      >
        <Image src={RBLogo} alt="RB Logo" />
      </Link>
      <div className="flex items-center gap-12">
        <Link href={"/about"} className={getLinkClass("/about")}>
          About us
        </Link>
        <Link href={"/"} className={getLinkClass("/")}>
          Exhibition
        </Link>
        <Link href={"/portfolio"} className={getLinkClass("/portfolio")}>
          Portfolio
        </Link>
        <div className="flex items-center justify-center bg-[#1B2B58] text-[#FFFFFF] w-[110px] h-[52px] rounded-xl font-medium text-[16px]">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
