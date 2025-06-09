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

// Event data
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
  // สร้าง responsive opts สำหรับ YouTube
  const getResponsiveOpts = () => {
    return {
      ...opts,
      height: "auto", // ให้ YouTube ปรับตาม container
      width: "100%",
    };
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row w-full gap-4 lg:gap-4 h-fit">
      {/* Video Player */}
      <div className="w-full lg:w-auto flex justify-center lg:items-end lg:flex-shrink-0">
        {/* Mobile/Tablet: Responsive container */}
        <div className="w-full lg:w-auto">
          <div className="lg:hidden relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
            <YouTube
              videoId={event.videoId}
              opts={{
                ...opts,
                width: "100%",
                height: "100%",
              }}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div className="hidden lg:block pt-[80px]">
            <YouTube
              videoId={event.videoId}
              opts={opts}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* Event Information */}
      <div className="h-full flex flex-col gap-2 sm:gap-3 lg:gap-4 flex-1">
        {/* Logo */}
        <Image
          src={event.logo}
          alt={`${event.title} Logo`}
          className="self-center object-contain sm:h-[100px] sm:w-[200px] lg:h-[80px] lg:w-fit"
        />

        {/* Content */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h2 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-gray-900 text-center lg:text-left">
            {event.title}
          </h2>

          <p className="text-sm sm:text-base lg:text-[22px] font-light text-gray-700 leading-relaxed text-center lg:text-left">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg text-gray-700">
              <li className="flex items-start justify-center lg:justify-start">
                <span className="mr-2 mt-1 lg:mt-0">•</span>
                <span className="text-center lg:text-left">
                  <span className="font-medium">วันที่จัดงาน:</span>{" "}
                  <span className="block sm:inline lg:inline">
                    {event.date}
                  </span>
                </span>
              </li>

              <li className="flex items-start justify-center lg:justify-start">
                <span className="mr-2 mt-1 lg:mt-0">•</span>
                <span className="text-center lg:text-left">
                  <span className="font-medium">สถานที่จัดงาน:</span>{" "}
                  <span className="block sm:inline lg:inline">
                    {event.location}
                  </span>
                </span>
              </li>
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
