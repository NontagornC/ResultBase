"use client";
import Layout from "@/components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftVectorIcon from "@/asset/image/img_left_vector.svg";
import RightVectorIcon from "@/asset/image/img_right_vector.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import VideoContent from "@/components/ui/VideoContent";
import FormDialog from "@/components/ui/FormDialog";
import { useRef, Suspense } from "react";

// * Image Carousel
import SportecImage from "@/asset/image/img_sportec.png";
import CafeRefJapan from "@/asset/image/img_cafe_res_japan.png";
import WellnessTokyo from "@/asset/image/img_wellness_tokyo.png";
import LeisureJapan from "@/asset/image/img_leisure_japan.png";
import JapanFoods from "@/asset/image/img_japan_foods.png";
import SkeletonLoading from "@/components/ui/SkeletonLoading";

const HomeContent = () => {
  const swiperRef = useRef<null>(null);
  const router = useRouter();

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
    <Layout>
      <div className="flex flex-col">
        <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
                <Image
                  src={SportecImage}
                  alt="Sportec Background"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=sportec");
                  }}
                  className="w-[121px] cursor-pointer absolute bottom-[80px] h-[68px] left-[50%] transform -translate-x-1/2 rounded-xl text-white flex justify-center items-center text-[24px] font-medium bg-black"
                >
                  JOIN
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
                <Image
                  src={CafeRefJapan}
                  alt="CafeRefJapan"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=caferefjapan");
                  }}
                  className="w-[121px] cursor-pointer absolute bottom-[80px] h-[68px] left-[50%] transform -translate-x-1/2 rounded-xl text-white flex justify-center items-center text-[24px] font-medium bg-black"
                >
                  JOIN
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
                <Image
                  src={WellnessTokyo}
                  alt="WellnessTokyo"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=wellnesstokyo");
                  }}
                  className="w-[121px] cursor-pointer absolute bottom-[80px] h-[68px] left-[50%] transform -translate-x-1/2 rounded-xl text-white flex justify-center items-center text-[24px] font-medium bg-black"
                >
                  JOIN
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
                <Image
                  src={LeisureJapan}
                  alt="LeisureJapan"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=leisurejapan");
                  }}
                  className="w-[121px] cursor-pointer absolute bottom-[80px] h-[68px] left-[50%] transform -translate-x-1/2 rounded-xl text-white flex justify-center items-center text-[24px] font-medium bg-black"
                >
                  JOIN
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[574px] rounded-[22px] overflow-hidden relative">
                <Image
                  src={JapanFoods}
                  alt="JapanFoods"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=japanfoods");
                  }}
                  className="w-[121px] cursor-pointer absolute bottom-[80px] h-[68px] left-[50%] transform -translate-x-1/2 rounded-xl text-white flex justify-center items-center text-[24px] font-medium bg-black"
                >
                  JOIN
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            onClick={handlePrev}
            className="custom-prev cursor-pointer absolute left-[26px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
          >
            <Image
              src={LeftVectorIcon}
              alt="Previous"
              className="drop-shadow-lg"
            />
          </button>

          <button
            onClick={handleNext}
            className="custom-next cursor-pointer absolute right-[26px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
          >
            <Image
              src={RightVectorIcon}
              alt="Next"
              className="drop-shadow-lg"
            />
          </button>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-[56px] flex flex-col lg:flex-row gap-8 lg:gap-12 xl:justify-between">
          <div className="flex flex-col w-full lg:w-[48%] xl:w-[595px] 2xl:w-full gap-3 sm:gap-4 md:gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight">
              Exhibitions
            </h2>
            <div className="text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
              <span className="font-semibold">Result Base Co., Ltd. </span>
              is the Exclusive Sales Representative in Thailand for a series of
              international exhibitions organized by TSO International. We
              support Thai businesses in accessing global opportunities through
              participation in leading trade shows across health, wellness,
              sports, leisure, and food industries.
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[48%] xl:w-[595px] gap-3 sm:gap-4 2xl:w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight">
              งานนิทรรศการแสดงสินค้า
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold">
                บริษัท รีซัลท์ เบส จำกัด (Result Base Co., Ltd.)
              </span>
              <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
                เป็นตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย
                สำหรับงานแสดงสินค้านานาชาติที่จัดโดย TSO International
                ประเทศญี่ปุ่น
                เราสนับสนุนผู้ประกอบการไทยให้เข้าถึงโอกาสทางธุรกิจระดับโลก
                ผ่านการเข้าร่วมงานแสดงสินค้าชั้นนำในอุตสาหกรรมสุขภาพ กีฬา เวลเนส
                ไลฟ์สไตล์ และอาหาร​
              </span>
            </div>
          </div>
        </div>
        <div className="xl:mt-[160px] lg:mt-[100px] mt-[20px]">
          <VideoContent />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <FormDialog />
        </Suspense>
      </div>
    </Layout>
  );
};

export default function Home() {
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <HomeContent />
    </Suspense>
  );
}
