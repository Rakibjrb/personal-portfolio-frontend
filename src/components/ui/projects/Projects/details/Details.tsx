"use client";

import Loading from "@/components/common/Loading";
import Motion from "@/components/common/Motion";
import ProjectCard from "@/components/common/ProjectCard";
import useLatestProjects from "@/hooks/projects/useLatestProjects";
import DetailsSection from "./DetailsSection";
import Error from "@/components/common/Error";

type project = {
  _id: string;
  image: string;
  project_name: string;
  type: string;
  category: string;
};

export default function Details() {
  const { data, isLoading, error } = useLatestProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 lg:gap-4">
      <div className="md:col-span-2 lg:col-span-3 xl:col-span-6">
        <DetailsSection />
      </div>
      <div className="md:col-span-1 lg:col-span-1 xl:col-span-2">
        {error ? (
          <Error />
        ) : (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold">Latest Projects</h2>
                {data.map((project: project) => (
                  <div className="shadow-xl rounded-xl" key={project._id}>
                    <Motion
                      initial={{ opacity: 0, x: 50 }}
                      inView={{ opacity: 1, x: 0 }}
                    >
                      <ProjectCard project={project} />
                    </Motion>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
