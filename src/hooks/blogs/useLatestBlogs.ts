import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../axiosPublic";

export default function useLatestBlogs() {
  const latestBlogs = useQuery({
    queryKey: ["latest-blogs"],
    queryFn: async () => {
      const res = await axiosPublic().get("/blogs/latest");
      return res.data.data;
    },
  });

  return latestBlogs;
}
