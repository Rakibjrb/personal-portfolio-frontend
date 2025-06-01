"use client";

import Link from "next/link";
import * as clickAnimation from "motion/react-client";
import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Motion from "@/components/common/Motion";
import ProjectCard from "@/components/common/ProjectCard";
import useLatestProjects from "@/hooks/projects/useLatestProjects";

type project = {
  _id: string;
  image: string;
  project_name: string;
  type: string;
  category: string;
};

export default function Latest() {
  const { data, isLoading, error } = useLatestProjects();

  return (
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

      <Motion initial={{ opacity: 0, x: 50 }} inView={{ opacity: 1, x: 0 }}>
        <div className="flex justify-center items-center mt-8">
          <Link
            href={"/projects"}
            className="py-2 px-7 rounded-xl bg-[#52dde2] uppercase"
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              More Projects
            </clickAnimation.div>
          </Link>
        </div>
      </Motion>
    </div>
  );
}
