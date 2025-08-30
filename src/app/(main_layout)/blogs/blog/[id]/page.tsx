"use client";

import Loading from "@/components/common/Loading";
import useBlogs from "@/hooks/blogs/useBlogs";
import { useParams } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function BlogDetailsPage() {
  const blogID = String(useParams().id);
  const { data: blog, isLoading } = useBlogs(blogID);

  return (
    <div className="text-color-primary">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-gray-800 rounded-2xl">
          <div className=" w-full h-[200px] md:h-[240px] lg:h-[340px] xl:h-[400px] mb-8 xl:mb-10">
            <img
              src={blog?.thumbnail_image}
              alt={blog?.title}
              className="w-full h-full rounded-t-2xl"
            />
          </div>

          <div className="px-4 xl:px-10 pb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-color-primary mb-10">
              {blog?.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  {blog?.author?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-semibold">{blog?.author?.name}</p>
                  <p className="text-xs text-gray-300">
                    Published on {blog?.author?.published_date}
                  </p>
                </div>
              </div>
              {blog?.type && (
                <span className="px-4 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  {blog?.type}
                </span>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-justify leading-relaxed text-color-primary lg:text-lg">
              {blog?.description}
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-gray-300"></div>

            {/* Share Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Share this post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition">
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1DA1F2] hover:opacity-80 transition">
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#0077B5] hover:opacity-80 transition">
                  <FaLinkedinIn className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
