import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../axiosPublic";

export default function useProject(id: string) {
  const res = useQuery({
    queryKey: ["get-project-by-id", id],
    queryFn: async () => {
      const res = await axiosPublic().get(`/projects/project/${id}`);
      return res.data.data;
    },
  });

  return res;
}
