"use client";

import Layout from "@/components/layout/Layout";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftVectorIcon from "@/asset/image/img_left_vector.svg";
import RightVectorIcon from "@/asset/image/img_right_vector.svg";

import Exhibition1 from "@/asset/image/img_exhibitions_1.png";
import Exhibition2 from "@/asset/image/img_exhibitions_2.png";

import Construction1 from "@/asset/image/img_construction_1.png";
import Construction2 from "@/asset/image/img_construction_2.png";
import Construction3 from "@/asset/image/img_construction_3.png";

import Event1 from "@/asset/image/img_event_1.png";
import Event2 from "@/asset/image/img_event_2.png";
import Event3 from "@/asset/image/img_event_3.png";
import Event4 from "@/asset/image/img_event_4.png";
import Event5 from "@/asset/image/img_event_5.png";
import Event6 from "@/asset/image/img_event_6.png";
import Event7 from "@/asset/image/img_event_7.png";

const CarouselSection = ({
  title,
  imgList,
  sectionIndex,
}: {
  title: string;
  imgList: StaticImageData[];
  sectionIndex: number;
}) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef?.current && (swiperRef?.current as any)?.swiper) {
      (swiperRef?.current as any)?.swiper?.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef?.current && (swiperRef.current as any)?.swiper) {
      (swiperRef?.current as any)?.swiper?.slideNext();
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]">
      <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] text-center leading-tight px-4">
        {title}
      </h1>

      <div className="w-full aspect-video lg:aspect-[21/9] rounded-[22px] overflow-hidden relative">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: `.custom-prev-${sectionIndex}`,
            nextEl: `.custom-next-${sectionIndex}`,
          }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {imgList?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {imgList.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`custom-prev-${sectionIndex} cursor-pointer absolute left-[26px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform`}
            >
              <Image
                src={LeftVectorIcon}
                alt="Previous"
                className="drop-shadow-lg"
              />
            </button>

            <button
              onClick={handleNext}
              className={`custom-next-${sectionIndex} cursor-pointer absolute right-[26px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform`}
            >
              <Image
                src={RightVectorIcon}
                alt="Next"
                className="drop-shadow-lg"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const page = () => {
  const sections = [
    {
      title: "Exhibitions",
      imgList: [Exhibition1, Exhibition2],
    },
    {
      title: "Event Activation",
      imgList: [Event1, Event2, Event3, Event4, Event5, Event6, Event7],
    },
    {
      title: "Design & Construction",
      imgList: [Construction1, Construction2, Construction3],
    },
  ];

  return (
    <Layout>
      <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px]">
        {sections.map((section, index) => (
          <CarouselSection
            key={index}
            title={section.title}
            imgList={section.imgList}
            sectionIndex={index}
          />
        ))}
      </div>
    </Layout>
  );
};

export default page;
