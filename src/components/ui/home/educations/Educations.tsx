import Image from "next/image";

const educations = [
  {
    img: "/educations/kella-high-school.jpeg",
    title: "Secondery School Certificate - SSC",
    name: "Kella High School",
    details:
      "Gathered knowledge about different subjects, including mathematics, physics, chemistry, and more.",
  },
  {
    img: "/educations/bpi-logo.jpeg",
    title: "Diploma in Engineering - CST",
    name: "Bogura Polytechnic Institute",
    details:
      "Learned about computer science and technology, algorithms, data structures, and more.",
  },
];

export default function Educations() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-5xl mb-2">Educations</h2>

      <div className="mb-3 flex justify-center">
        <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
      </div>

      <div className="space-y-5">
        {educations.map((edu) => (
          <div
            key={edu.img}
            className="bg-white shadow-lg rounded-xl p-5 md:flex items-center gap-6"
          >
            <Image
              className="w-[150px] h-[150px]"
              src={edu.img}
              width={150}
              height={150}
              alt={edu.title}
            />
            <div className="mt-3 md:mt-0 space-y-1">
              <h3 className="text-2xl font-bold">{edu.title}</h3>
              <h4 className="text-xl">{edu.name}</h4>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
