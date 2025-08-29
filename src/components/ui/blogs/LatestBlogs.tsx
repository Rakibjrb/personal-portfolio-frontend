"use client";

import BlogCard from "@/components/common/BlogCard";
import Loading from "@/components/common/Loading";
import useLatestBlogs from "@/hooks/blogs/useLatestBlogs";

type blog = {
  _id: string;
  title: string;
  description: string;
  author: {
    name: string;
    published_date: string;
  };
  thumbnail_image: string;
  type: string;
};

export default function LatestBlogs({ home }: { home: boolean }) {
  const { data, isLoading } = useLatestBlogs();

  return (
    <div className="sticky top-0">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {!data ? (
            "No content available"
          ) : (
            <div
              className={`${
                home
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "space-y-4"
              }`}>
              {data.map((blog: blog) => (
                <div
                  key={blog._id}
                  className="bg-gray-800 hover:bg-transparent transition-all duration-300 rounded-xl">
                  <BlogCard data={blog} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
