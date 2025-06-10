"use client";

import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import Image from "next/image";
import SmallIcon from "@/asset/image/img_small_circle.svg";
import BigIcon from "@/asset/image/img_big_circle.svg";
import { useRouter, useSearchParams } from "next/navigation";

const FormDialog = () => {
  const url = "/api/submit-form";
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get("register") === "true";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      companyName: "",
      department: "",
      position: "",
      fullname: "",
      country: "",
      phone: "",
      email: "",
      confirmEmail: "",
      url: "",
      companyProduct: "",
      content: "",
      address: "",
    },
  });

  const watchedFields = watch([
    "companyName",
    "fullname",
    "phone",
    "email",
    "confirmEmail",
    "content",
  ]);
  const [companyName, fullname, phone, email, confirmEmail, content] =
    watchedFields;

  useEffect(() => {
    console.log(watchedFields, "watchedFields");
  }, [watchedFields]);

  const isRequiredFieldsComplete =
    companyName && fullname && phone && email && content;
  const isEmailMatching = email && confirmEmail && email === confirmEmail;
  const isFormValid = isRequiredFieldsComplete && isEmailMatching;

  const onSubmit = async (data: any) => {
    if (!isFormValid) {
      return;
    }
    try {
      const actionId = searchParams?.get("actionId") || "default";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          actionId: actionId,
          companyName: data?.companyName,
          department: data?.department,
          position: data?.position,
          fullname: data?.fullname,
          country: data?.country,
          phone: data?.phone,
          email: data?.email,
          url: data?.url,
          companyProduct: data?.companyProduct,
          inqueryContents: data?.content,
          address: data?.address,
        }),
      });

      const result = await response?.json();

      if (result.success) {
        alert("ส่งข้อมูลสำเร็จ!");
        reset();
      } else {
        alert("เกิดข้อผิดพลาด: " + result?.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  };

  const handleClose = () => {
    const currentUrl = new URL(window?.location?.href);
    currentUrl?.searchParams.delete("register");
    currentUrl?.searchParams.delete("actionId");
    router.push(currentUrl?.pathname + currentUrl?.search);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth={false}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          margin: { xs: "16px", sm: "32px" },
          maxHeight: { xs: "calc(100vh - 32px)", sm: "calc(100vh - 64px)" },
          width: { xs: "calc(100vw - 32px)", sm: "598px" },
          maxWidth: { xs: "calc(100vw - 32px)", sm: "598px" },
        },
      }}
    >
      <div className="w-full h-auto max-h-[80vh] flex flex-col bg-[#1E2E5A] overflow-hidden">
        {/* Fixed Header */}
        <div className="flex h-auto sm:max-h-[189px] sm:h-[189px] w-full px-4 sm:px-[45px] py-6 sm:py-0 flex-col items-start justify-center flex-shrink-0 relative">
          <span className="text-2xl sm:text-3xl md:text-[48px] font-bold text-white z-10 leading-tight">
            Register
          </span>
          <span className="text-2xl sm:text-3xl md:text-[48px] font-bold text-white z-10 leading-tight">
            For Exhibitors
          </span>
          <Image
            src={SmallIcon}
            alt="small icon"
            className="absolute left-0 -bottom-[20px] sm:-bottom-[40px] z-0 w-8 h-8 sm:w-auto sm:h-auto"
          />
          <Image
            src={BigIcon}
            alt="big icon"
            className="absolute right-0 z-0 w-12 h-12 hidden lg:block sm:w-auto sm:h-auto"
          />
        </div>

        {/* Scrollable Form Container */}
        <div className="bg-white rounded-t-xl overflow-hidden flex-1 sm:max-h-[1010px] overflow-y-auto z-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full px-4 sm:px-[45px] pt-8 sm:pt-[60px] pb-8 sm:pb-[60px]"
          >
            <div className="flex flex-col gap-6 sm:gap-[36px]">
              {/* Company Name */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Company ( ชื่อบริษัท ) <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  {...register("companyName", { required: true })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Your Company"
                />
                {errors.companyName && (
                  <span className="text-red-500 text-sm">
                    Company name is required
                  </span>
                )}
              </div>

              {/* Department */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Department ( แผนก )
                </span>
                <input
                  type="text"
                  {...register("department")}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="department"
                />
              </div>

              {/* Position */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Position ( ตำแหน่ง )
                </span>
                <input
                  type="text"
                  {...register("position")}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="position"
                />
              </div>

              {/* Name */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Name-Lastname <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Your name"
                />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>

              {/* Country */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Country ( ประเทศของคุณ )
                </span>
                <input
                  type="text"
                  {...register("country")}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="country"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Phone Number ( หมายเลขโทรศัพท์ ){" "}
                  <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  {...register("phone", {
                    required: true,
                  })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="+66-XXX-XXXXXX"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  E-mail ( อีเมลของคุณ )​{" "}
                  <span className="text-red-600">*</span>
                </span>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Valid email is required
                  </span>
                )}
              </div>

              {/* Confirm Email */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  E-mail (Confirm) ( ยืนยันอีเมลอีกครั้ง ){" "}
                  <span className="text-red-600">*</span>
                </span>
                <input
                  type="email"
                  {...register("confirmEmail", {
                    required: true,
                  })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Re-type your Email"
                />
              </div>

              {/* URL */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  URL ( เว็บไซต์บริษัท )
                </span>
                <input
                  type="url"
                  {...register("url")}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="URL"
                />
              </div>

              {/* Company Product */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Your company's product/service ( สินค้าหรือบริการของบริษัท )
                </span>
                <input
                  type="text"
                  {...register("companyProduct")}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Your company's product/service"
                />
              </div>

              {/* Inquiry Contents */}
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <span className="text-base sm:text-[18px] font-bold">
                  Inquiry contents ( เนื้อหาการติดต่อ/สอบถาม ){" "}
                  <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  {...register("content", {
                    required: true,
                  })}
                  className="text-black placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] w-full sm:w-[320px] border-b-[2px] border-[#adadad7f] pb-2 focus:outline-none focus:border-[#1E2E5A] transition-colors"
                  placeholder="Inquiry contents"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-3 sm:gap-1">
                <span className="text-base sm:text-[18px] font-bold">
                  Company Address
                </span>
                <textarea
                  {...register("address")}
                  className="w-full sm:w-[313px] text-black  h-20 sm:h-[92px] rounded-xl border-[2px] border-[#D9D9D9] p-3 focus:outline-none focus:border-[#1E2E5A] placeholder:text-[#ADADAD] font-light text-sm sm:text-[15px] transition-colors resize-none"
                  placeholder="Your company address"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Submit Button Section */}
        <div className="flex justify-start h-auto sm:min-h-[102px] sm:h-[102px] items-center bg-white px-4 sm:px-[45px] py-4 sm:py-0">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!isFormValid}
            className={`flex items-center justify-center w-full sm:w-[100px] h-[46px] font-bold rounded-xl transition-all duration-300 ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-800 cursor-pointer"
                : "bg-gray-300 text-gray-100 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default FormDialog;
