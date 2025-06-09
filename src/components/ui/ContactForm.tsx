import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <span className="text-[32px] font-semibold text-black">Contact me</span>
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-2 gap-8">
          <FormContainer>
            <span className="font-[500]">First name</span>
            <input
              placeholder="Jane"
              type="text"
              className="px-4 py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-[16px] rounded-xl"
            />
          </FormContainer>
          <FormContainer>
            <span className="font-[500]">Last name</span>
            <input
              placeholder="Smitherton"
              type="text"
              className="px-4 py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-[16px] rounded-xl"
            />
          </FormContainer>
        </div>
        <FormContainer>
          <span className="font-[500]">Email address</span>
          <input
            type="email"
            placeholder="email@janesfakedomain.net"
            className="px-4 py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-[16px] rounded-xl"
          />
        </FormContainer>
        <FormContainer>
          <span className="font-[500]">Your message</span>
          <textarea
            placeholder="Enter your question or message"
            className="px-4 h-[162px] py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-[16px] rounded-xl"
          />
        </FormContainer>
        <button className="rounded-xl bg-black text-white w-full h-[62px] flex justify-center items-center">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
