import React from "react";
import Image from "next/image";
import MailIcon from "@/asset/image/img_email.svg";
import FBIcon from "@/asset/image/img_fb.svg";
import LineIcon from "@/asset/image/img_line.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-auto min-h-[200px] md:min-h-[269px] bg-[#1B2B58] px-4 sm:px-8 md:px-16 lg:px-[80px] py-8 md:py-0 flex flex-col md:flex-row items-center justify-between rounded-tr-[30px] md:rounded-tr-[50px] rounded-tl-[30px] md:rounded-tl-[50px] gap-6 md:gap-0">
      {/* Social Media Section */}
      <div className="flex flex-col gap-4 w-full md:w-auto text-center md:text-left">
        <h3 className="text-lg md:text-[20px] text-[#FFFFFF] font-bold">
          Join us on Social Media
        </h3>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <a
            href="mailto:prinkproy.mnw@results-base.com"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src={MailIcon}
              alt="Mail Logo"
              className="w-6 h-6 md:w-auto md:h-auto"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576568222207"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src={FBIcon}
              alt="Facebook Logo"
              className="w-6 h-6 md:w-auto md:h-auto"
            />
          </a>
          <a
            href="https://lin.ee/dkYo13A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src={LineIcon}
              alt="Line Logo"
              className="w-6 h-6 md:w-auto md:h-auto"
            />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-3 md:gap-2 w-full md:w-[331px] text-center md:text-left">
        <Link
          href="/about"
          className="bg-[#DB2C37] hover:bg-[#c02329] w-full md:w-[110px] h-[45px] md:h-[52px] flex justify-center items-center rounded-xl text-white font-medium transition-colors mx-auto md:mx-0"
        >
          Contact
        </Link>

        <div className="flex flex-col text-white text-sm md:text-base space-y-1">
          <a
            href="mailto:projects@results-base.com"
            className="hover:underline cursor-pointer break-all"
          >
            projects@results-base.com​
          </a>
          <a
            href="mailto:prinkproy.mnw@results-base.com"
            className="hover:underline cursor-pointer break-all"
          >
            prinkproy.mnw@results-base.com
          </a>
          <a
            href="https://line.me/ti/p/@848pxphc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Line @848pxphc​
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
