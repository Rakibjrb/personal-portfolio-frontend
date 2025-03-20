"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Typewriter from "@/utils/type_writter";

export default function Banner() {
  useEffect(() => {
    const bannerTitle = document.getElementById("writing-effect");
    new Typewriter(bannerTitle, {
      strings: ["Web Developer", "Front End Developer"],
      autoStart: true,
      loop: true,
      delay: 75,
    });
  }, []);

  return (
    <div className="banner w-full h-screen flex items-center text-color-primary">
      <div className="w-[85%] md:w-[70%] mx-auto">
        <h1 className="text-5xl md:text-7xl my-0">Rakibul Hasan</h1>
        <h2 className="text-xl md:text-3xl mt-3 mb-5">
          {"I'm"} a{" "}
          <span className="" id="writing-effect">
            Developer
          </span>
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
