import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <span className="text-2xl md:text-3xl xl:text-[32px] font-semibold text-black">
        Contact me
      </span>

      <div className="flex flex-col gap-4 md:gap-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm md:text-base">First name</span>
            <input
              placeholder="Jane"
              type="text"
              className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm md:text-base">Last name</span>
            <input
              placeholder="Smitherton"
              type="text"
              className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium text-sm md:text-base">
            Email address
          </span>
          <input
            type="email"
            placeholder="email@janesfakedomain.net"
            className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium text-sm md:text-base">Your message</span>
          <textarea
            placeholder="Enter your question or message"
            className="px-3 md:px-4 py-2 md:py-3 h-32 md:h-40 xl:h-[162px] border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
          />
        </div>

        <button className="rounded-lg md:rounded-xl bg-black hover:bg-gray-800 text-white w-full h-12 md:h-14 xl:h-[62px] flex justify-center items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
