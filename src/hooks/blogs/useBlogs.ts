import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../axiosPublic";

export default function useBlogs(id: string = "all") {
  const blogs = useQuery({
    queryKey: ["get-blogs-by-id", id],
    queryFn: async () => {
      const res = await axiosPublic().get(`/blogs/blog/${id}`);
      return res.data.data;
    },
  });

  return blogs;
}
