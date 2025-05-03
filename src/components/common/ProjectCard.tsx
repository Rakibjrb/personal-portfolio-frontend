import Link from "next/link";

type project = {
  _id: string;
  image: string;
  project_name: string;
};

export default function ProjectCard({ project }: { project: project }) {
  return (
    <div className="project_card relative overflow-hidden">
      {/* eslint-disable-next-line */}
      <img
        className="w-full h-[200px] xl:h-[250px] rounded-xl"
        src={project.image}
        alt={project.project_name || "this is image title"}
      />
      <div className="project_card_text_container absolute -bottom-[300px] left-0 w-full h-full bg-[#00000084] flex justify-center items-center rounded-xl transition-all duration-700">
        <Link
          href={`/project/details/${project._id}`}
          className="text-xl text-center text-white font-bold"
        >
          {project.project_name}
        </Link>
      </div>
    </div>
  );
}
