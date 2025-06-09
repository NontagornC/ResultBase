import React from "react";
import Image from "next/image";
import MailIcon from "@/asset/image/img_email.svg";
import FBIcon from "@/asset/image/img_fb.svg";
import LineIcon from "@/asset/image/img_line.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[269px] bg-[#1B2B58] px-[80px] flex items-center justify-between rounded-tr-[50px] rounded-tl-[50px]">
      <div className="flex flex-col gap-4 w-full">
        <span className="text-[20px] text-[#FFFFFF] font-bold">
          Join us on Social Media
        </span>
        <div className="flex items-center gap-4">
          <Image src={MailIcon} alt="Mail Logo" />
          <Image src={FBIcon} alt="Facebook Logo" />
          <Image src={LineIcon} alt="line Logo" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[331px]">
        <Link
          href={"/about"}
          className="bg-[#DB2C37] w-[110px] h-[52px] flex justify-center items-center rounded-xl text-white"
        >
          Contact
        </Link>
        <div className="flex flex-col text-white truncate">
          <span className="w-full break-words line-clamp-1">
            projects@results-base.com​
          </span>
          <span className="w-full break-words line-clamp-1">
            prinkproy.mnw@results-base.com
          </span>
          <span className="w-full break-words line-clamp-1">
            Line @848pxphc​
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
