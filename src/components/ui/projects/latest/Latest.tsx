"use client";

import Loading from "@/components/common/Loading";
import ProjectCard from "@/components/common/ProjectCard";
import useLatestProjects from "@/hooks/projects/useLatestProjects";

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
            <div key={project._id} className="shadow-xl rounded-xl">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
