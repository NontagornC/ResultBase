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
import SportecImageThailand from "@/asset/image/img_sportec_thailand.png";
import JapanFood2026 from "@/asset/image/img_japan_foods_2026.png";
import Caferesjapan2026 from "@/asset/image/img_caferes_japan_2026.png";
import FoodExpo2026 from "@/asset/image/img_food_expo_2026.png";
import WellnessTokyo from "@/asset/image/img_wellness_tokyo.png";
import LeisureJapan from "@/asset/image/img_leisure_japan.png";
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
        <div className="w-full aspect-video lg:aspect-[21/9] rounded-[22px] overflow-hidden relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            className="h-full"
          >
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={SportecImageThailand}
                  alt="Sportec Background"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=sportecthailand");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={SportecImage}
                  alt="Sportec Background"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=sportec");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={WellnessTokyo}
                  alt="WellnessTokyo"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=wellnesstokyo");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={LeisureJapan}
                  alt="LeisureJapan"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=leisurejapan");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={JapanFood2026}
                  alt="japanfoods"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=japanfoods");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={Caferesjapan2026}
                  alt="Caferesjapan2026"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=caferesjapan");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                <Image
                  src={FoodExpo2026}
                  alt="foodexpo2026"
                  fill
                  className="lg:object-contain 2xl:object-cover object-cover"
                />
                <div
                  onClick={() => {
                    router.push("?register=true&actionId=foodexpo2026");
                  }}
                  className="
                            absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 z-10
                            flex justify-center items-center rounded-xl 
                            bg-black text-white font-medium cursor-pointer
                            w-[180px]  h-[40px] text-[13px]  md:text-[16px] lg:text-[20px] xl:text-[24px]  
                            sm:w-[220px] sm:h-[50px] sm:text-sm  
                            md:w-[260px] md:h-[60px] md:text-base 
                            lg:w-[315px] lg:h-[70px] lg:text-xl"
                >
                  Inquires for Exhibitors
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            onClick={handlePrev}
            className="custom-prev cursor-pointer absolute left-[25px] sm:left-[50px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
          >
            <Image
              src={LeftVectorIcon}
              alt="Previous"
              className="drop-shadow-lg"
            />
          </button>

          <button
            onClick={handleNext}
            className="custom-next cursor-pointer absolute right-[25px] sm:right-[50px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
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
              บริษัท รีซัลท์ เบส จำกัด (Result Base Co., Ltd.)
            </h2>
            <div className="text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
              เป็นตัวแทนอย่างเป็นทางการในประเทศไทยสำหรับงานแสดงสินค้านานาชาติที่จัดโดย
              <strong className="font-semibold">TSO International</strong>{" "}
              ประเทศญี่ปุ่นโดยมีพันธกิจในการสนับสนุน
              ผู้ประกอบการไทยให้เข้าถึงโอกาสทางธุรกิจระดับโลกผ่านการเข้าร่วม
              งานแสดงสินค้าชั้นนำในอุตสาหกรรม{" "}
              <strong className="font-semibold">
                สุขภาพ กีฬา เวลเนส ไลฟ์สไตล์ และอาหาร​{" "}
              </strong>
              ทั้งนี้ บริษัทฯ ยังได้รับเกียรติให้ทำหน้าที่เป็น{" "}
              <strong className="font-semibold">
                ผู้จัดงาน SPORTEC Thailand 2026 อย่างเป็นทางการ
              </strong>{" "}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[48%] xl:w-[595px] gap-3 sm:gap-4 2xl:w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight">
              Result Base Co., Ltd.​
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
                is the official representative in Thailand for international
                trade exhibitions organized by{" "}
                <strong className="font-semibold">TSO International</strong>,
                Japan. Our mission is to support Thai entrepreneurs in accessing
                global business opportunities through participation in leading
                exhibitions across the{" "}
                <strong className="font-semibold">
                  health sports, wellness, lifestyle, and food
                </strong>
                , industries.​ In addition, we are honored to serve as the
                official{" "}
                <strong className="font-semibold">
                  organizer of SPORTEC Thailand 2026.​
                </strong>
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
