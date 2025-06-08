"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Image from "next/image";
import SmallIcon from "@/asset/image/img_small_circle.svg";
import BigIcon from "@/asset/image/img_big_circle.svg";

const FormDialog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({});

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog
      onClose={() => {}}
      open={true}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
        },
      }}
    >
      <div className="w-[598px] h-[1692px] flex flex-col bg-[#1E2E5A] overflow-hidden">
        {/* Fixed Header */}
        <div className="flex max-h-[189px] h-[189px] w-full px-[45px] flex-col items-start flex-shrink-0 relative">
          <span className="text-[48px] font-bold text-white z-10">
            Register
          </span>
          <span className="text-[48px] font-bold text-white z-10">
            For Exhibitors
          </span>
          <Image
            src={SmallIcon}
            alt="small icon"
            className="absolute left-0 -bottom-[40px] z-0"
          />
          <Image
            src={BigIcon}
            alt="big icon"
            className="absolute right-0 z-0"
          />
        </div>

        {/* Scrollable Form Container */}
        <div className="bg-white rounded-t-xl overflow-hidden max-h-[1010px] overflow-y-auto z-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full px-[45px] pt-[60px] pb-[60px]"
          >
            <div className="flex flex-col gap-[36px]">
              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Company ( ชื่อบริษัท )
                </span>
                <input
                  type="text"
                  {...register("companyName")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Your Company"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Department ( แผนก )
                </span>
                <input
                  type="text"
                  {...register("department")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="department"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Position ( ตำแหน่ง )
                </span>
                <input
                  type="text"
                  {...register("position")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="position"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">Name-Lastname</span>
                <input
                  type="text"
                  {...register("fullname")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Your name"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Country ( ประเทศของคุณ )
                </span>
                <input
                  type="text"
                  {...register("country")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="country"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Phone Number ( หมายเลขโทรศัพท์ )
                </span>
                <input
                  type="tel"
                  {...register("phone")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="+66-XXX-XXXXXX"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  E-mail ( อีเมลของคุณ )​
                </span>
                <input
                  type="email"
                  {...register("email")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Email"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  E-mail (Confirm) ( ยืนยันอีเมลอีกครั้ง )
                </span>
                <input
                  type="email"
                  {...register("confirmEmail")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Re-type your Email"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  URL ( เว็บไซต์บริษัท )
                </span>
                <input
                  type="url"
                  {...register("url")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="URL"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Your company's product/service ( สินค้าหรือบริการของบริษัท )
                </span>
                <input
                  type="text"
                  {...register("companyProduct")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Your company's product/service"
                />
              </FormInputWrapper>

              <FormInputWrapper>
                <span className="text-[18px] font-bold">
                  Inquiry contents ( เนื้อหาการติดต่อ/สอบถาม ){" "}
                </span>
                <input
                  type="text"
                  {...register("content")}
                  className="text-[#ADADAD] font-light text-[15px] w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A]"
                  placeholder="Inquiry contents"
                />
              </FormInputWrapper>

              <div className="flex flex-col gap-1">
                <span className="text-[18px] font-bold">Company Address</span>
                <textarea
                  name="company address"
                  id="company-address"
                  className="w-[313px] h-[92px] rounded-xl border-[2px] border-[#D9D9D9]"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-start min-h-[102px] h-[102px] items-center bg-white px-[45px]">
          <button className="flex items-center justify-center bg-black text-[#FFFFFF] w-[100px] h-[46px] font-bold rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default FormDialog;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
