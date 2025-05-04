"use client";

import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Motion from "@/components/common/Motion";
import ProjectCard from "@/components/common/ProjectCard";
import useProjects from "@/hooks/projects/useProjects";

type project = {
  _id: string;
  project_name: string;
  image: string;
};

export default function Tab({ selectedTab }: { selectedTab: string }) {
  const { isLoading, data, error } = useProjects(selectedTab);

  return (
    <div>
      <div>
        {error ? (
          <Error />
        ) : (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
                {data.map((project: project) => (
                  <div key={project._id} className="shadow-xl rounded-xl">
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
