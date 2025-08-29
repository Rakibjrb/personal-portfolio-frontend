import Image from "next/image";
import Link from "next/link";

type project = {
  _id: string;
  image: string;
  project_name: string;
  type: string;
  category: string;
};

export default function ProjectCard({ project }: { project: project }) {
  return (
    <div className="project_card relative overflow-hidden">
      <div className="absolute top-2 left-0 px-2 w-full flex justify-between items-center">
        <div className="bg-red-500 rounded-md px-3 py-1 uppercase text-white z-20 text-xs">
          {project.type}
        </div>
        <div className="bg-[#0dced4] rounded-md px-3 py-1 capitalize text-black z-20 text-xs">
          {project.category} Project
        </div>
      </div>
      <Image
        width={300}
        height={350}
        loading="lazy"
        className="rounded-xl w-full h-[200px] lg:h-[250px]"
        src={project.image}
        alt={
          `Rakibul Hasan portfolio project ${project.project_name}` ||
          "project image"
        }
        unoptimized
      />
      <div className="project_card_text_container absolute -bottom-[300px] left-0 w-full h-full bg-[#000000b0] flex justify-center items-center rounded-xl transition-all duration-700">
        <Link
          href={`/projects/details/${project._id}`}
          className="text-xl text-center text-color-secondery font-bold">
          {project.project_name}
        </Link>
      </div>
    </div>
  );
}
