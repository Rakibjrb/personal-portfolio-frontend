"use client";

import Motion from "@/components/common/Motion";
import useProfileLinks from "@/hooks/useProfileLinks";
import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import * as clickAnimation from "motion/react-client";

export default function Banner() {
  const { data, isLoading } = useProfileLinks();

  return (
    <div className="banner w-full min-h-screen flex items-center text-color-primary">
      <div className="container mx-auto px-4 xl:px-0">
        <Motion initial={{ opacity: 0, y: -50 }} inView={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl my-0">Rakibul Hasan</h1>
          <h2 className="text-xl md:text-3xl mt-3 mb-5">
            {"I'm"} a{" "}
            <span className="text-color-secondery">
              <TypeAnimation
                sequence={["Web Developer", 2000, "Front End Developer", 2000]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "26px", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h2>

          {isLoading ? (
            "..."
          ) : (
            <div className="flex gap-4">
              <Link
                href={data[0].link}
                target="blank"
                aria-label="Rakibul Hasan | GitHub profile">
                <clickAnimation.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}>
                  <FaGithubSquare className="text-3xl" />
                </clickAnimation.div>
              </Link>
              <Link
                href={data[2].link}
                target="blank"
                aria-label="Rakibul Hasan | Facebook profile">
                <clickAnimation.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}>
                  <FaFacebookSquare className="text-3xl" />
                </clickAnimation.div>
              </Link>
              <Link
                href={data[1].link}
                target="blank"
                aria-label="Rakibul Hasan | LinkedIn profile">
                <clickAnimation.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}>
                  <FaLinkedin className="text-3xl" />
                </clickAnimation.div>
              </Link>
            </div>
          )}
        </Motion>
      </div>
    </div>
  );
}
