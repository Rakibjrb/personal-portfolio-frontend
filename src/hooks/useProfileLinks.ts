import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./axiosPublic";

export default function useProfileLinks() {
  const res = useQuery({
    queryKey: ["personal-profile-links"],
    queryFn: async () => {
      const res = await axiosPublic().get("/links/get");
      return res.data.data;
    },
  });

  return res;
}
