import Motion from "@/components/common/Motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    id: "01",
    icon: <FaHtml5 className="text-orange-500 text-6xl" />,
    name: "HTML",
    details:
      "Create web pages using HTML. Learned about the structure of web pages.",
  },
  {
    id: "02",
    icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
    name: "CSS",
    details:
      "Style web pages using CSS. Learned about the design of web pages and also learned about responsive design.",
  },
  {
    id: "022",
    icon: <SiTailwindcss className="text-cyan-500 text-6xl" />,
    name: "Tailwind CSS",
    details:
      "Style web pages using CSS. Learned about the design of web pages and also learned about responsive design.",
  },
  {
    id: "03",
    icon: <FaJsSquare className="text-yellow-400 text-6xl" />,
    name: "JavaScript",
    details:
      "Implemented interactive elements on web pages using JavaScript and learned about DOM manipulation.",
  },
  {
    id: "033",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
    name: "TypeScript",
    details:
      "Implemented interactive elements on web pages using JavaScript and learned about DOM manipulation.",
  },
  {
    id: "04",
    icon: <SiReact className="text-cyan-400 text-6xl" />,
    name: "ReactJS",
    details:
      "Built user interfaces using React. Learned about reusable components.",
  },
  {
    id: "044",
    icon: <SiNextdotjs className="text-black dark:text-white text-6xl" />,
    name: "NextJS",
    details:
      "Built user interfaces using React. Learned about reusable components.",
  },
  {
    id: "05",
    icon: <FaNodeJs className="text-green-600 text-6xl" />,
    name: "NodeJS",
    details:
      "Built server-side applications using Node.js. Learned about how a web server side working and handling client side request.",
  },
  {
    id: "06",
    icon: <SiExpress className="text-gray-600 dark:text-gray-300 text-6xl" />,
    name: "ExpressJS",
    details:
      "Built server-side applications using Express.js. Learned about APIs and http request handling.",
  },
  {
    id: "07",
    icon: <SiMongodb className="text-green-500 text-6xl" />,
    name: "MongoDB",
    details: "Learned about no-SQL databases and how database works.",
  },
  {
    id: "08",
    icon: <FaGitAlt className="text-red-600 text-6xl" />,
    name: "Git",
    details: "Learned about version control.",
  },
  {
    id: "09",
    icon: <FaFigma className="text-pink-500 text-6xl" />,
    name: "Figma",
    details: "Create website UI designs in Figma.",
  },
];

export default function Skills() {
  return (
    <div>
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-10">
          <h2 className="text-5xl mb-2">Skills</h2>
          <div className="mb-3 flex justify-center">
            <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
          </div>
        </div>
      </Motion>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-8 rounded-lg shadow-xl hover-primary"
          >
            <Motion
              initial={{ opacity: 0, x: -50 }}
              inView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-col justify-center items-center text-center gap-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            </Motion>
          </div>
        ))}
      </div>
    </div>
  );
}
