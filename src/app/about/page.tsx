"use client";
import React, { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ResultBase from "@/asset/image/img_big_result_base_logo.svg";
import ContactForm from "@/components/ui/ContactForm";
import FormDialog from "@/components/ui/FormDialog";

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
    <Suspense fallback={<div>Loading page...</div>}>
      <Layout>
        <div className="pt-4 md:pt-[35px] flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[64px] items-start">
          <div className="w-full lg:min-w-[624px] flex flex-col pt-4 md:pt-[40px] gap-8 md:gap-12 xl:gap-[57px]">
            <div className="flex flex-col gap-4">
              {/* Title skeleton */}
              <div className="h-12 sm:h-14 md:h-16 xl:h-[64px] w-32 bg-gray-300 rounded animate-pulse"></div>

              {/* Subtitle skeleton */}
              <div className="h-6 sm:h-7 md:h-8 xl:h-[24px] w-48 bg-gray-200 rounded animate-pulse"></div>

              {/* Content paragraphs skeleton */}
              <div className="space-y-4 md:space-y-6">
                {/* First paragraph */}
                <div className="space-y-2">
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>

                {/* Second paragraph */}
                <div className="space-y-2">
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>

                {/* Third paragraph */}
                <div className="space-y-2">
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-4/5"></div>
                </div>

                {/* Fourth paragraph */}
                <div className="space-y-2">
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-5 sm:h-6 md:h-7 xl:h-[20px] bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Contact form skeleton */}
            <div className="space-y-6">
              <div className="h-8 w-40 bg-gray-300 rounded animate-pulse"></div>
              <div className="space-y-4">
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Image skeleton */}
          <div className="hidden xl:flex xl:w-auto justify-center xl:justify-start flex-shrink-0">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-none h-96 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </Layout>
      {/* <AboutPageContent /> */}
    </Suspense>
  );
};

export default page;
