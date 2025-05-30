"use client";

import BlogCard from "@/components/common/BlogCard";
import Loading from "@/components/common/Loading";
import useBlogs from "@/hooks/blogs/useBlogs";

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

export default function Blogs() {
  const { data, isLoading } = useBlogs();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {!data ? (
            "No content available"
          ) : (
            <div>
              <div className="shadow-xl rounded-xl">
                <BlogCard data={data[5]} />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((blog: blog) => (
                  <div key={blog._id} className="shadow-xl rounded-xl">
                    <BlogCard data={blog} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
