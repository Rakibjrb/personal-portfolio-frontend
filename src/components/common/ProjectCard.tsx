import Image from "next/image";
import Link from "next/link";

type project = {
  _id: string;
  image: string;
  project_name: string;
};

export default function ProjectCard({ project }: { project: project }) {
  return (
    <div className="project_card relative overflow-hidden">
      <Image
        width={300}
        height={350}
        loading="lazy"
        className="rounded-xl w-full h-[250px]"
        src={project.image}
        alt={
          `Rakibul Hasan portfolio project ${project.project_name}` ||
          "project image"
        }
        unoptimized
      />
      <div className="project_card_text_container absolute -bottom-[300px] left-0 w-full h-full bg-[#00000084] flex justify-center items-center rounded-xl transition-all duration-700">
        <Link
          href={`/projects/details/${project._id}`}
          className="text-xl text-center text-white font-bold"
        >
          {project.project_name}
        </Link>
      </div>
    </div>
  );
}
