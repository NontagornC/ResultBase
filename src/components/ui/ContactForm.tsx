import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "./Loading";

interface IContactFormType {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const url = "/api/submit-contact";
  const { register, handleSubmit, reset, watch } = useForm<IContactFormType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const watchedFields = watch(["firstName", "lastName", "email", "message"]);
  const [firstName, lastName, email, message] = watchedFields;
  const isFormValid = firstName && lastName && email && message;

  const onSubmit = async (data: IContactFormType) => {
    if (!isFormValid) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
      } else {
        toast.error(`Failed to send message: ${result.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <Loading open={isSubmitting} />
      {/* Title */}
      <span className="text-2xl md:text-3xl xl:text-[32px] font-semibold text-black">
        Contact me
      </span>

      {/* Form Fields */}
      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm md:text-base">
              First name <span className="text-red-600">*</span>
            </span>
            <input
              placeholder="Jane"
              {...register("firstName", { required: true })}
              type="text"
              className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm md:text-base">
              Last name <span className="text-red-600">*</span>
            </span>
            <input
              {...register("lastName", { required: true })}
              placeholder="Smitherton"
              type="text"
              className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <span className="font-medium text-sm md:text-base">
            Email address <span className="text-red-600">*</span>
          </span>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email@janesfakedomain.net"
            className="px-3 md:px-4 py-2 md:py-3 border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <span className="font-medium text-sm md:text-base">
            Your message <span className="text-red-600">*</span>
          </span>
          <textarea
            {...register("message", { required: true })}
            placeholder="Enter your question or message"
            className="px-3 md:px-4 py-2 md:py-3 h-32 md:h-40 xl:h-[162px] border border-[#E0E0E0] placeholder:text-[#828282] font-medium text-sm md:text-[16px] rounded-lg md:rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#0056C7] focus:border-transparent transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={handleSubmit(onSubmit)}
          className={`rounded-lg md:rounded-xl w-full h-12 md:h-14 xl:h-[62px] flex justify-center items-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isFormValid
              ? "bg-black hover:bg-gray-800 text-white cursor-pointer focus:ring-gray-500"
              : "bg-gray-300 text-gray-100 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
