"use client";

import {
  Grid3x3,
  Home,
  FolderKanban,
  FileText,
  BrainCircuit,
  GraduationCap,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import * as clickAnimation from "motion/react-client";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [menu, setMenu] = useState<boolean>(false);
  const path = usePathname();

  return (
    <div className="z-30 overflow-hidden">
      <div
        className={`bg-white shadow-2xl fixed bottom-3 md:bottom-6 transform left-1/2 -translate-x-1/2 z-40 rounded-t-full ${
          menu ? "w-[300px] h-[150px] md:w-[700px] md:h-[350px]" : "w-[0px] h-0"
        } transition-all duration-700 overflow-hidden`}
      >
        <div className="h-full relative">
          <Link
            href={"/"}
            className={`absolute bottom-[10px] left-[20px] md:bottom-[20px] md:left-[80px] ${
              path === "/" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <Home size={30} />
              <span className="uppercase text-center hidden md:block">
                Home
              </span>
            </clickAnimation.div>
          </Link>
          <Link
            href={"/projects"}
            className={`absolute bottom-[60px] left-[40px] md:bottom-[130px] md:left-[120px] ${
              path === "/projects" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <FolderKanban size={30} />
              <span className="uppercase text-center hidden md:block">
                Projects
              </span>
            </clickAnimation.div>
          </Link>
          <Link
            href={"/skills"}
            className={`absolute bottom-[90px] left-[90px] md:top-[90px] md:left-[220px] ${
              path === "/skills" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <BrainCircuit size={30} />
              <span className="uppercase text-center hidden md:block">
                Skills
              </span>
            </clickAnimation.div>
          </Link>
          <Link
            href={"/educations"}
            className={`absolute bottom-[90px] right-[90px] md:top-[70px] md:right-[260px] ${
              path === "/educations" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <GraduationCap size={30} />
              <span className="uppercase text-center hidden md:block">
                Educations
              </span>
            </clickAnimation.div>
          </Link>
          <Link
            href={"/blogs"}
            className={`absolute bottom-[60px] right-[40px] md:bottom-[130px] md:right-[120px] ${
              path === "/blogs" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <FileText size={30} />
              <span className="uppercase text-center hidden md:block">
                Blogs
              </span>
            </clickAnimation.div>
          </Link>
          <Link
            href={"/contact"}
            className={`absolute bottom-[10px] right-[20px] md:bottom-[20px] md:right-[80px] ${
              path === "/contact" ? "text-color-secondery" : ""
            }`}
          >
            <clickAnimation.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="menu-links-style"
            >
              <Mail size={30} />
              <span className="uppercase text-center hidden md:block">
                Contact
              </span>
            </clickAnimation.div>
          </Link>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onClick={() => setMenu(!menu)}
        className="fixed transform left-1/2 -translate-x-1/2 bottom-3 md:bottom-6 z-50 bg-[#52dde2] p-2 rounded-xl hover:bg-[#8bd1d6] hover:shadow-2xl transition-all duration-300"
      >
        <clickAnimation.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Grid3x3 className="hidden md:block" size={50} />
          <Grid3x3 className="md:hidden" size={30} />
        </clickAnimation.div>
      </motion.button>
    </div>
  );
}
