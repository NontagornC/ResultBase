"use client";

import Layout from "@/components/layout/Layout";
import React from "react";
import Image from "next/image";
import ExhibitionsImg from "@/asset/image/img_exhibitions.png";
import EventImg from "@/asset/image/img_event.png";
import ConstructionImg from "@/asset/image/img_construction.png";

const page = () => {
  const sections = [
    {
      title: "Exhibitions",
      image: ExhibitionsImg,
      alt: "ExhibitionsImg",
    },
    {
      title: "Event Activation",
      image: EventImg,
      alt: "EventImg",
    },
    {
      title: "Design & Construction",
      image: ConstructionImg,
      alt: "ConstructionImg",
    },
  ];

  return (
    <Layout>
      <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]"
          >
            <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] text-center leading-tight px-4">
              {section.title}
            </h1>

            <div className="w-full flex justify-center">
              <Image
                src={section.image}
                alt={section.alt}
                className="w-full max-w-full h-auto object-cover rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default page;
