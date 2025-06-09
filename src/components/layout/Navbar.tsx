"use client";
import React, { useState } from "react";
import Image from "next/image";
import RBLogo from "@/asset/image/img_rb_logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `text-lg md:text-[20px] cursor-pointer font-semibold ${
      isActive ? "text-[#0056C7]" : "text-black hover:text-[#0056C7]"
    } transition-colors`;
  };

  const navItems = [
    { href: "/about", label: "About us" },
    { href: "/", label: "Exhibition" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="w-full h-auto min-h-[80px] md:min-h-[120px] lg:h-[157px] py-4 md:py-6 flex items-center px-4 sm:px-8 md:px-16 lg:px-[169px] justify-between shadow-xl bg-white relative z-50">
      {/* Logo */}
      <Link
        href={"/"}
        className="flex justify-center items-center cursor-pointer flex-shrink-0"
      >
        <Image
          src={RBLogo}
          alt="RB Logo"
          className="h-auto w-auto max-h-[50px] md:max-h-[70px] lg:max-h-full"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={getLinkClass(item.href)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="?register=true"
          className="flex cursor-pointer items-center justify-center bg-[#1B2B58] hover:bg-[#243a6b] text-[#FFFFFF] w-[100px] md:w-[110px] h-[45px] md:h-[52px] rounded-xl font-medium text-sm md:text-[16px] transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 text-black hover:text-[#0056C7] transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t lg:hidden z-40">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getLinkClass(item.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="?register=true"
              className="flex cursor-pointer items-center justify-center bg-[#1B2B58] hover:bg-[#243a6b] text-[#FFFFFF] w-full h-[45px] rounded-xl font-medium text-sm transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
