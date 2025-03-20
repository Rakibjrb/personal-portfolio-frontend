"use client";

import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div className="banner w-full h-screen flex items-center text-color-primary">
      <div className="w-[85%] md:w-[70%] mx-auto">
        <h1 className="text-5xl md:text-7xl my-0">Rakibul Hasan</h1>
        <h2 className="text-xl md:text-3xl mt-3 mb-5">
          {"I'm"} a{" "}
          <TypeAnimation
            sequence={["Web Developer", 2000, "Front End Developer", 2000]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "26px", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex gap-4">
          <Link href={""}>
            <FaFacebookSquare className="text-3xl" />
          </Link>
          <Link href={""}>
            <FaGithubSquare className="text-3xl" />
          </Link>
          <Link href={""}>
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
