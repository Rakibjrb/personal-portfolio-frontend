"use client";

import Motion from "@/components/common/Motion";
import useProfileLinks from "@/hooks/useProfileLinks";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const { data, isLoading } = useProfileLinks();

  return (
    <div>
      <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="lg:w-1/3">
          <Motion
            initial={{ opacity: 0, x: -50 }}
            inView={{ opacity: 1, x: 0 }}
          >
            <Image
              width={500}
              height={250}
              className="rounded-xl w-3/4 md:w-3/5 lg:w-auto mx-auto"
              src={"/mypic2.jpg"}
              alt="Rakibul Hasan | web developer, frontend developer, react developer"
            />
          </Motion>
        </div>
        <div className="lg:w-2/3">
          <Motion initial={{ opacity: 0, x: 50 }} inView={{ opacity: 1, x: 0 }}>
            <h2 className="text-center md:text-left text-5xl mb-2">
              About <span className="text-color-secondery">Me</span>
            </h2>
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
            </div>

            <p className="text-xl text-justify xl:text-left">
              Hello, I am Rakibul Hasan, a passionate Front End and MERN stack
              web developer with a keen eye for design and a love for crafting
              seamless user experiences. With a strong foundation in HTML, CSS,
              and JavaScript, I specialize in building dynamic and responsive
              web applications using the MERN (MongoDB, Express.js, React,
              Node.js) stack.
            </p>

            <div className="my-10 flex flex-wrap gap-6">
              <div>
                <h3 className="text-xl mb-1.5 font-semibold uppercase">Age</h3>
                <h4>20+ Years</h4>
              </div>
              <div>
                <h3 className="text-xl mb-1.5 font-semibold uppercase">
                  Born In
                </h3>
                <h4>Bogura, Bangladesh</h4>
              </div>
              <div>
                <h3 className="text-xl mb-1.5 font-semibold uppercase">
                  Email
                </h3>
                <h4>rakibul572157@gmail.com</h4>
              </div>
            </div>

            {isLoading ? (
              ""
            ) : (
              <div className="flex gap-3">
                <Link
                  href={data[3].link || "/"}
                  target="blank"
                  className="border bg-[#52dde2] hover:bg-transparent py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl transition-all duration-300"
                >
                  Download Resume
                </Link>
                <Link
                  href={"/educations"}
                  className="border hover:bg-[#52dde2] py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl transition-all duration-300"
                >
                  Education
                </Link>
              </div>
            )}
          </Motion>
        </div>
      </div>
    </div>
  );
}
