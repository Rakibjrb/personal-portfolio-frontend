"use client";

import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import useProject from "@/hooks/projects/useProject";
import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DetailsSection() {
  const id = useParams().id;

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
              <Image
                width={300}
                height={350}
                loading="lazy"
                className="rounded-xl w-full h-full"
                src={project.image}
                alt={
                  `Rakibul Hasan portfolio project ${project.project_name}` ||
                  "project image"
                }
                unoptimized
              />
              <h1 className="text-3xl lg:text-4xl font-bold">
                {project.project_name}
              </h1>
              <div className="flex gap-3">
                <div className="bg-[#0dced4] rounded-md px-3 py-1 uppercase text-black">
                  {project.type}
                </div>
                <div className="bg-[#0dced4] rounded-md px-3 py-1 uppercase text-black">
                  {project.category} Project
                </div>
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
                    className="px-5 py-2 rounded-xl shadow-xl uppercase text-white hover:text-black bg-red-500 hover-primary transition-all duration-300"
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
