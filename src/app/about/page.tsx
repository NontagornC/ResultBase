"use client";
import React, { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ResultBase from "@/asset/image/img_big_result_base_logo.svg";
import ContactForm from "@/components/ui/ContactForm";
import FormDialog from "@/components/ui/FormDialog";
import SkeletonLoading from "@/components/ui/SkeletonLoading";

const AboutPageContent = () => {
  return (
    <Layout>
      <div className="pt-4 md:pt-[35px] flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[64px] items-start">
        <div className="w-full lg:min-w-[624px] flex flex-col pt-4 md:pt-[40px] gap-8 md:gap-12 xl:gap-[57px]">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[64px] text-black">
              About
            </span>

            <span className="text-lg sm:text-xl md:text-2xl xl:text-[24px] text-[#828282]">
              Result Base Co., Ltd.
            </span>

            <div className="text-base sm:text-lg md:text-xl xl:text-[20px] font-medium space-y-4 md:space-y-6">
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

        <div className="hidden xl:flex xl:w-auto justify-center xl:justify-start flex-shrink-0">
          <Image
            src={ResultBase}
            alt="Sportec Background"
            className="w-full max-w-md lg:max-w-lg xl:max-w-none h-auto"
          />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FormDialog />
      </Suspense>
    </Layout>
  );
};

const page = () => {
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <AboutPageContent />
    </Suspense>
  );
};

export default page;
