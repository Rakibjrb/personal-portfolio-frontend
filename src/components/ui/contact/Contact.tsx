// app/contact/page.tsx or pages/contact.tsx

"use client"; // only if using App Router

import { useForm } from "react-hook-form";
import { Mail, User, MessageSquareText, Pencil } from "lucide-react";
import { TbFidgetSpinner } from "react-icons/tb";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Submitted Data:", data);
    // handle sending the data to your API here
    reset(); // optional: clear form after submit
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-50">
            <User className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="bg-transparent w-full outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500 ml-2">{errors.name.message}</p>
          )}

          {/* Email */}
          <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-50">
            <Mail className="text-gray-500 mr-3" />
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
              className="bg-transparent w-full outline-none"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500 ml-2">{errors.email.message}</p>
          )}

          {/* Subject */}
          <div className="flex items-center border rounded-xl px-4 py-2 bg-gray-50">
            <Pencil className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="bg-transparent w-full outline-none"
            />
          </div>
          {errors.subject && (
            <p className="text-sm text-red-500 ml-2">
              {errors.subject.message}
            </p>
          )}

          {/* Message */}
          <div className="flex items-start border rounded-xl px-4 py-2 bg-gray-50">
            <MessageSquareText className="text-gray-500 mr-3 mt-1" />
            <textarea
              rows={5}
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="bg-transparent w-full outline-none resize-none"
            />
          </div>
          {errors.message && (
            <p className="text-sm text-red-500 ml-2">
              {errors.message.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {isSubmitting ? (
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
  );
}
