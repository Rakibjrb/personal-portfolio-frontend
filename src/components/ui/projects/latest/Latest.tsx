"use client";

import Loading from "@/components/common/Loading";
import useLatestProjects from "@/hooks/projects/useLatestProjects";
import Image from "next/image";

type project = {
  _id: string;
  project_name: string;
  image: string;
};

export default function Latest() {
  const { data, isLoading } = useLatestProjects();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {data.map((project: project) => (
            <div key={project._id}>
              <Image
                className="w-full"
                src={project.image}
                width={300}
                height={200}
                alt={project.project_name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
