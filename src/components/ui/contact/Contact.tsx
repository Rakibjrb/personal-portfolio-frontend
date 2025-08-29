"use client";

import { useForm } from "react-hook-form";
import { Mail, User, MessageSquareText, Pencil } from "lucide-react";
import { TbFidgetSpinner } from "react-icons/tb";
import Motion from "@/components/common/Motion";
import { axiosPublic } from "@/hooks/axiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [loading, isLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    isLoading(true);
    axiosPublic()
      .post("/contacts/post", data)
      .then(() => {
        toast.success("Send Successfull");
      })
      .catch(() => {
        toast.error("Send Failed");
      })
      .finally(() => {
        isLoading(false);
        reset();
      });
  };

  return (
    <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center text-color-primary">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-900">
              <User className="text-color-secondery mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="bg-transparent w-full outline-none text-color-primary"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 ml-2">{errors.name.message}</p>
            )}

            {/* Email */}
            <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-900">
              <Mail className="text-color-secondery mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-transparent w-full outline-none text-color-primary"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 ml-2">
                {errors.email.message}
              </p>
            )}

            {/* Subject */}
            <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-900">
              <Pencil className="text-color-secondery mr-3" />
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="bg-transparent w-full outline-none text-color-primary"
              />
            </div>
            {errors.subject && (
              <p className="text-sm text-red-500 ml-2">
                {errors.subject.message}
              </p>
            )}

            {/* Message */}
            <div className="flex items-start border rounded-xl px-4 py-2 bg-gray-900">
              <MessageSquareText className="text-color-secondery mr-3 mt-1" />
              <textarea
                rows={5}
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="bg-transparent w-full outline-none resize-none text-color-primary"
              />
            </div>
            {errors.message && (
              <p className="text-sm text-red-500 ml-2">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#52dde2a2] hover:bg-[#89fbff9d] text-black font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer">
              {loading ? (
                <div className="flex justify-center">
                  <TbFidgetSpinner className="text-xl animate-spin" />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </Motion>
  );
}
