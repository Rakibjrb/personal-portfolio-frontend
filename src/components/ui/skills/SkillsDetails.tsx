import Motion from "@/components/common/Motion";
import { skills } from "../home/Skills";

export default function SkillsDetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 xl:px-0">
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <h2 className="text-color-primary text-center text-5xl mb-2">Skills</h2>
        <div className="mb-3 flex justify-center">
          <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
        </div>
      </Motion>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-10">
        {skills.map((skill) => (
          <Motion
            initial={{ opacity: 0, x: 50 }}
            inView={{ opacity: 1, x: 0 }}
            key={skill.id}>
            <div className="bg-gray-800 hover:bg-transparent transition-all duration-300 rounded-xl p-5 md:flex items-center gap-6">
              <div className="w-full h-[150px] lg:w-[150px] flex items-center justify-center">
                <div className="animate-bounce">{skill.icon}</div>
              </div>
              <div className="text-color-primary mt-3 md:mt-0 space-y-1">
                <h3 className="text-2xl font-bold">{skill.name}</h3>
                <p>{skill.details}</p>
              </div>
            </div>
          </Motion>
        ))}
      </div>
    </div>
  );
}
