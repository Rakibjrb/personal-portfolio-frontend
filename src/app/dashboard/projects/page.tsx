"use client";

import { axiosPublic } from "@/hooks/axiosPublic";
import uploadImage from "@/utils/uploadImage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type formValues = {
  image: FileList;
  project_name: string;
  details: string;
  features: string;
  techstacks: string;
  type: string;
  category: string;
  live_link: string;
  client_code: string;
  server_code?: string;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<formValues>();

  const onSubmit = async (data: formValues): Promise<void> => {
    setLoading(true);
    const features = data.features.split(",");
    const techstacks = data.techstacks.split(",");

    const imgbb = await uploadImage(data.image[0]);

    const project = {
      image: imgbb.url,
      image_delete: imgbb.delete_url,
      project_name: data.project_name,
      details: data.details,
      features,
      recected: 1,
      techstacks,
      type: "latest",
      category: data.category,
      live_link: data.live_link,
      client_code: data.client_code,
      server_code: data.server_code || "none",
    };

    axiosPublic()
      .post("/projects/post", project)
      .then(() => {
        toast.success("Poject Uploaded");
        reset();
      })
      .catch(() => toast.error("Something went wrong"));

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image URL */}
        <div>
          <label>Image URL</label>
          <input
            type="file"
            {...register("image")}
            className="border p-1 w-full"
          />
        </div>

        {/* Project Name */}
        <div>
          <label>Project Name</label>
          <input {...register("project_name")} className="border p-1 w-full" />
        </div>

        {/* Details */}
        <div>
          <label>Details</label>
          <textarea {...register("details")} className="border p-1 w-full" />
        </div>

        {/* Features (Comma-separated) */}
        <div>
          <label>Features</label>
          <input {...register("features")} className="border p-1 w-full" />
        </div>

        {/* Tech Stacks (Comma-separated) */}
        <div>
          <label>Tech Stacks</label>
          <input {...register("techstacks")} className="border p-1 w-full" />
        </div>

        {/* Type */}
        <div>
          <label>Type</label>
          <input {...register("type")} className="border p-1 w-full" />
        </div>

        {/* Category */}
        <div>
          <label>Category</label>
          <input {...register("category")} className="border p-1 w-full" />
        </div>

        {/* Live Link */}
        <div>
          <label>Live Link</label>
          <input
            type="url"
            {...register("live_link")}
            className="border p-1 w-full"
          />
        </div>

        {/* Client Code Link */}
        <div>
          <label>Client Code URL</label>
          <input
            type="text"
            {...register("client_code")}
            className="border p-1 w-full"
          />
        </div>

        {/* Server Code Link */}
        <div>
          <label>Server Code URL</label>
          <input
            type="text"
            {...register("server_code")}
            className="border p-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Upload Now"}
        </button>
      </form>
    </div>
  );
}
