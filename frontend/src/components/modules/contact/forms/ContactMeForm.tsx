"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import * as z from "zod";

import { Motion } from "@/components/common/utils";
import { sendMessage } from "@/services";

const Schema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  email: z.string().email("This is not a valid email."),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof Schema>;

export const ContactMeForm = () => {
  const notify = (message: string, type: "success" | "error" = "success") => {
    toast(message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      type: type,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await sendMessage(data);

    if (result.success) {
      notify("Message sent successfully!");
      reset();
    } else {
      notify("Failed to send message. Please try again", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-8 select-none md:w-2/3 lg:w-1/2"
    >
      <div>
        <label htmlFor="subject" className="block pb-2 text-white">
          Subject
        </label>
        <input
          {...register("subject")}
          tabIndex={1}
          type="text"
          id="subject"
          className={`w-full border-b p-2 outline-none focus:border-white ${
            errors.subject ? "border-red-500" : "border-gray-500"
          }`}
        />
        <div className="h-5">
          {errors.subject && (
            <p className="text-sm text-red-500 transition-opacity duration-200">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block pb-2 text-white">
          Email
        </label>
        <input
          {...register("email")}
          tabIndex={2}
          type="email"
          id="email"
          className={`w-full border-b p-2 outline-none focus:border-white ${
            errors.email ? "border-red-500" : "border-gray-500"
          }`}
        />
        <div className="h-5">
          {errors.email && (
            <p className="text-sm text-red-500 transition-opacity duration-200">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block pb-2 text-white">
          Message
        </label>
        <textarea
          {...register("message")}
          tabIndex={3}
          rows={3}
          id="message"
          className={`w-full border-b p-2 outline-none focus:border-white ${
            errors.message ? "border-red-500" : "border-gray-500"
          }`}
        />
        <div className="h-5">
          {errors.message && (
            <p className="text-sm text-red-500 transition-opacity duration-200">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <Motion whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
        <button
          tabIndex={4}
          type="submit"
          disabled={isSubmitting}
          className="text-shine glow-up cursor-pointer border-b border-gray-500 p-2 text-center outline-none select-none hover:border-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </Motion>

      <ToastContainer />
    </form>
  );
};
