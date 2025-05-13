/* eslint-disable @next/next/no-img-element */
"use client";

import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import useProject from "@/hooks/projects/useProject";
import { SquareCheckBig } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DetailsSection() {
  // get the project id from the url
  const id = useParams().id;

  // get project data based on url project id
  const { data: project, isLoading, error } = useProject(`${id}`);

  return (
    <div>
      {error ? (
        <Error />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="space-y-8 lg:shadow-xl rounded-xl lg:px-4 lg:pb-12">
              <img
                className="w-full rounded-xl shadow-xl"
                src={project.image}
                alt={project.project_name}
              />
              <div className="lg:flex justify-between items-center">
                <h1 className="text-3xl font-bold">{project.project_name}</h1>
                <span className="uppercase font-bold">{project.category}</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Details</h3>
                <p className="lg:text-xl">{project.details}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Features</h3>
                <div className="pl-5 space-y-1.5">
                  {project.features.map((feature: string) => (
                    <p key={feature} className="flex items-start gap-2">
                      <SquareCheckBig className="text-3xl text-green-600" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Used Technologies
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.techstacks.map((techstack: string) => (
                    <p
                      key={techstack}
                      className="px-5 py-2 rounded-xl shadow-xl uppercase bg-gray-100"
                    >
                      {techstack}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Additional Links
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={project.live_link}
                    target="blank"
                    className="px-5 py-2 rounded-xl shadow-xl uppercase bg-gray-200 hover-primary"
                  >
                    Live Link
                  </Link>
                  <Link
                    href={project.client_code}
                    target="blank"
                    className="px-5 py-2 rounded-xl shadow-xl uppercase bg-gray-200 hover-primary"
                  >
                    Clinet Side Code Link
                  </Link>
                  {project.server_code != "none" && (
                    <Link
                      href={project.server_code}
                      target="blank"
                      className="px-5 py-2 rounded-xl shadow-xl uppercase bg-gray-200 hover-primary"
                    >
                      Server Side Code Link
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// const data = {
//   recected: 1,
//   server_code: "none",
// };
