"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ResultBase from "@/asset/image/img_big_result_base_logo.svg";
import ContactForm from "@/components/ui/ContactForm";

const page = () => {
  return (
    <Layout>
      <div className="pt-[35px] flex gap-[64px] items-start">
        <div className="min-w-[624px] flex flex-col pt-[40px] gap-[57px]">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[64px] text-black">About</span>
            <span className="text-[24px] text-[#828282]">
              Result Base Co., Ltd.
            </span>
            <div className="text-[20px] font-medium space-y-4">
              <p>
                Result Base Co., Ltd. is a full-service event organizer
                specializing in exhibitions, conferences, seminars, media
                production, sports events, and strategic marketing consultancy.
                We deliver integrated solutions with creativity, precision, and
                professionalism.
              </p>

              <p>
                We proudly serve as the official sales representative in
                Thailand for TSO International (Japan), promoting
                internationally renowned exhibitions such as SPORTEC, Wellness
                Tokyo, and Japan Foods Week. Our goal is to connect Thai
                businesses with global platforms and industry-leading
                opportunities.
              </p>

              <p>
                In addition to event management, we also offer comprehensive
                construction and contracting services—including both temporary
                and permanent structures. Our team provides expert consultation
                and execution for interior and exterior design.
              </p>

              <p>
                We are committed to transforming your vision into reality with
                quality, reliability, and impact.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
        <Image src={ResultBase} alt="Sportec Background" />
      </div>
    </Layout>
  );
};

export default page;
