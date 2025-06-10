import React from "react";
import Layout from "../layout/Layout";

const SkeletonLoading = () => {
  return (
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
  );
};

export default SkeletonLoading;
