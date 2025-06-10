"use client";
import React from "react";
import YouTube from "react-youtube";
import Image, { StaticImageData } from "next/image";

// * Logo images
import SportecLogo from "@/asset/image/img_sportec_icon.svg";
import CafeResJapanLogo from "@/asset/image/img_cafe_res_japan_icon.svg";
import WellnessTokyLogo from "@/asset/image/img_wellness_tokyo_icon.svg";
import LeisureOutdoorJapanLogo from "@/asset/image/img_eisure_spots_icon.svg";
import JapanFoodsWeekLogo from "@/asset/image/img_japan_foods_icon.svg";

interface EventData {
  id: string;
  videoId: string;
  logo: StaticImageData;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface VideoItemProps {
  event: EventData;
  opts: {
    height: string;
    width: string;
    playerVars: {
      autoplay: number;
      controls: number;
      rel: number;
      modestbranding: number;
      fs: number;
    };
  };
}

const YOUTUBE_OPTS = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
    modestbranding: 1,
    fs: 1,
  },
};

const event_data: EventData[] = [
  {
    id: "sportec",
    videoId: "ixyfwrInOOI",
    logo: SportecLogo,
    title: "SPORTEC",
    description:
      "คืองานแสดงสินค้านานาชาติด้านกีฬาและสุขภาพที่ใหญ่ที่สุดในญี่ปุ่น รวบรวมบริษัทชั้นนำจากทั่วโลกมาจัดแสดงอุปกรณ์กีฬา เครื่องออกกำลังกาย ผลิตภัณฑ์เพื่อสุขภาพและความงาม ตลอดจนบริการและเทคโนโลยีที่เกี่ยวข้องกับสถานออกกำลังกาย เปิดโอกาสให้ภาครัฐ เอกชน และสมาคมต่าง ๆ ได้แลกเปลี่ยนแนวคิดและสร้างเครือข่ายธุรกิจร่วมกัน​",
    date: "30 กรกฎาคม (พุธ) – 1 สิงหาคม (ศุกร์) 2568​",
    location: "Tokyo Big Sight, อาคารแสดงสินค้าโซนตะวันออก",
  },
  {
    id: "caferes-japan",
    videoId: "TsnV3mQ3dl8",
    logo: CafeResJapanLogo,
    title: "CAFERES JAPAN",
    description:
      "เป็นหนึ่งในงานแสดงสินค้าขนาดใหญ่ที่สุดของอุตสาหกรรมคาเฟ่ เบเกอรี่ และร้านอาหารในญี่ปุ่น ครอบคลุมสินค้าและบริการหลากหลาย เช่น กาแฟ ชา ขนม เครื่องมือเดลิเวอรี่ การออกแบบร้าน และสื่อส่งเสริมการขาย​",
    date: "16 กรกฎาคม (พุธ) – 18 กรกฎาคม (ศุกร์) 2568​",
    location: "Tokyo Big Sight, อาคารแสดงสินค้าโซนใต้​",
  },
  {
    id: "wellness-tokyo",
    videoId: "e_91wPVy-rM",
    logo: WellnessTokyLogo,
    title: "Wellness Tokyo",
    description:
      "เป็นงานแสดงสินค้าด้านสุขภาพแบบองค์รวมที่ใหญ่ที่สุดแห่งหนึ่งของญี่ปุ่น นำเสนอสินค้าและบริการเพื่อส่งเสริมสุขภาพทั้งกายและใจ อาทิ อาหารเพื่อสุขภาพ วัตถุดิบฟังก์ชันนัล และเทคโนโลยีที่เกี่ยวข้องกับการดูแลสุขภาพ​",
    date: "26 พฤศจิกายน (พุธ) – 28 พฤศจิกายน (ศุกร์) 2568​",
    location: "Tokyo Big Sight, อาคารแสดงสินค้าโซนตะวันออก​",
  },
  {
    id: "leisure-outdoor-japan",
    videoId: "F2d6uMJPi7I",
    logo: LeisureOutdoorJapanLogo,
    title: "Leisure & Outdoor Japan",
    description:
      "งานแสดงสินค้าสำหรับอุตสาหกรรมกิจกรรมกลางแจ้ง แหล่งท่องเที่ยว และความบันเทิง รวมถึงธุรกิจสวนสนุกและรีสอร์ตต่าง ๆ เหมาะสำหรับผู้ที่ต้องการทำตลาดในอุตสาหกรรมท่องเที่ยวและไลฟ์สไตล์ที่เติบโตอย่างรวดเร็วในญี่ปุ่น​​",
    date: "26 พฤศจิกายน (พุธ) – 28 พฤศจิกายน (ศุกร์) 2568​​",
    location: "Tokyo Big Sight, อาคารแสดงสินค้าโซนตะวันออก​",
  },
  {
    id: "japan-foods-week",
    videoId: "wG7oy4kOi1Y",
    logo: JapanFoodsWeekLogo,
    title: "Japan food week",
    description:
      "กลุ่มงานแสดงสินค้าระดับนานาชาติที่รวบรวม 3 งานหลักในอุตสาหกรรมอาหารของญี่ปุ่นไว้ในหนึ่งเดียวมุ่งส่งเสริมวัตถุดิบองค์ความรู้และนวัตกรรมด้านอาหารของญี่ปุ่นสู่ตลาดโลก​ ประกอบด้วย​ FERMEX JAPAN งานแสดงสินค้าอุตสาหกรรมอาหารหมักดองและการต้มกลั่น​ RICEEXPO งานแสดงสินค้าอุตสาหกรรมข้าวและผลิตภัณฑ์จากข้าว NOODLE SHOW งานแสดงสินค้าอุตสาหกรรมบะหมี่ แบบครบวงจร​​​",
    date: "16 กรกฎาคม (พุธ) – 18 กรกฎาคม (ศุกร์) 2568​​",
    location: "Tokyo Big Sight, อาคารแสดงสินค้าโซนตะวันออก​",
  },
];

const VideoItem: React.FC<VideoItemProps> = ({ event, opts }) => {
  return (
    <div className="flex flex-col-reverse xl:flex-row w-full xl:gap-8 2xl:gap-10 gap-4 lg:gap-4 h-fit">
      <div className="w-full lg:w-full 2xl:w-1/2 flex justify-center lg:items-end">
        <div className="w-full md:max-w-[740px] xl:max-w-none">
          <div className="xl:hidden relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
            <YouTube
              videoId={event?.videoId}
              opts={{
                ...opts,
                width: "100%",
                height: "100%",
              }}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div className="hidden xl:block pt-[80px]">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <YouTube
                videoId={event?.videoId}
                opts={{
                  ...opts,
                  width: "100%",
                  height: "100%",
                }}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col gap-2 sm:gap-3 lg:gap-4 xl:flex-1 xl:min-w-[524px] xl:w-[524px] 2xl:w-full">
        <Image
          src={event?.logo}
          alt={`${event?.title} Logo`}
          className="self-center object-contain sm:h-[100px] sm:w-[200px] lg:h-[80px] lg:w-fit"
        />

        <div className="flex flex-col gap-1 sm:gap-2">
          <h2 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-gray-900 text-center lg:text-left">
            {event?.title}
          </h2>

          <div className="flex flex-col">
            <p className="text-sm sm:text-base lg:text-[22px] font-light text-gray-700 leading-[1.5] text-center lg:text-left">
              {event?.description}
            </p>

            <ul className="text-sm sm:text-base lg:text-lg text-gray-700">
              <div className="flex items-start justify-center lg:justify-start text-sm sm:text-base lg:text-[22px] text-gray-700 text-center">
                <span className="mr-2 mt-1 lg:mt-0 hidden sm:block">•</span>
                <span className="text-center lg:text-left">
                  <span className="font-normal">วันที่จัดงาน:</span>{" "}
                  <span className="block sm:inline lg:inline font-light">
                    {event?.date}
                  </span>
                </span>
              </div>

              <div className="flex items-start justify-center lg:justify-start text-sm sm:text-base lg:text-[22px] text-gray-700  text-center">
                <span className="mr-2 mt-1 lg:mt-0 hidden sm:block">•</span>
                <span className="text-center lg:text-left">
                  <span className="font-normal">สถานที่จัดงาน:</span>{" "}
                  <span className="block sm:inline lg:inline font-light">
                    {event?.location}
                  </span>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-8 sm:gap-12 lg:gap-[65px]">
      {event_data?.map((event) => (
        <VideoItem key={event.id} event={event} opts={YOUTUBE_OPTS} />
      ))}
    </div>
  );
};

export default VideoContent;
