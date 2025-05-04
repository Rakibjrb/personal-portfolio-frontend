import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../axiosPublic";

export default function useProjects(category: string) {
  const res = useQuery({
    queryKey: ["get-project-by-category", category],
    queryFn: async () => {
      const res = await axiosPublic().get(`/projects/category/${category}`);
      return res.data.data;
    },
  });

  return res;
}
