import Motion from "@/components/common/Motion";
import { Palette, Code, BarChart2 } from "lucide-react";

const icon = [
  { icon: <Palette className="text-color-secondery service-icon" size={70} /> },
  { icon: <Code className="text-color-secondery service-icon" size={70} /> },
  {
    icon: <BarChart2 className="text-color-secondery service-icon" size={70} />,
  },
];

const services = [
  {
    id: 1111,
    title: "Design",
    details:
      "Web desgin and development have been my bread and buffer for more than 2 years. During that time I've discovered that I can help startups and companies with the following services.",
  },
  {
    id: 1112,
    title: "Development",
    details:
      "I can code my own designs or even the customer's design as base. My focus is to generate clean code that's well structured for reliability.",
  },
  {
    id: 1113,
    title: "Basic SEO",
    details:
      "I can setup your project to use basic SEO principles which will push your project to the start page on search engines and save you ads money.",
  },
];

export default function Services() {
  return (
    <div>
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-10">
          <h2 className="text-5xl mb-2">
            My <span className="text-color-secondery">Services</span>
          </h2>
          <div className="mb-3 flex justify-center">
            <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
          </div>
          <h3 className="mt-4 px-2 md:px-10 lg:px-0 lg:w-2/4 mx-auto">
            Web desgin and development have been my bread and buffer for more
            than 2 years. During that time {"I've"} discovered that I can help
            startups and companies with the following services.
          </h3>
        </div>
      </Motion>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {services.map((service, index) => (
          <div
            className="space-y-4 shadow-xl p-6 xl:p-10 rounded-lg hover-primary service-card"
            key={service.id}
          >
            <Motion
              initial={{ opacity: 0, x: -50 }}
              inView={{ opacity: 1, x: 0 }}
            >
              {icon[index].icon}
              <h4 className="text-xl font-semibold uppercase my-2">
                {service.title}
              </h4>
              <p className="text-justify">{service.details}</p>
            </Motion>
          </div>
        ))}
      </div>
    </div>
  );
}
