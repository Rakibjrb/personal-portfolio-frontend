import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../axiosPublic";

export default function useLatestProjects() {
  const res = useQuery({
    queryKey: ["get-latest-projects"],
    queryFn: async () => {
      const res = await axiosPublic().get("/projects/latest");
      return res.data.data;
    },
  });

  return res;
}
