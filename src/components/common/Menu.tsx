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
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <div className="z-30 overflow-hidden">
      <div
        className={`bg-white shadow-2xl fixed bottom-3 md:bottom-6 transform left-1/2 -translate-x-1/2 z-40 rounded-t-full ${
          menu ? "w-[300px] h-[150px] md:w-[700px] md:h-[350px]" : "w-[0px] h-0"
        } transition-all duration-700 overflow-hidden`}
      >
        <div className="h-full relative">
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[10px] left-[20px] md:bottom-[20px] md:left-[80px]">
            <Home size={30} />
            <span className="uppercase text-center hidden md:block">Home</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[60px] left-[40px] md:bottom-[130px] md:left-[120px]">
            <FolderKanban size={30} />
            <span className="uppercase text-center hidden md:block">
              Projects
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[90px] left-[90px] md:-top-[10px] md:left-[220px]">
            <BrainCircuit size={30} />
            <span className="uppercase text-center hidden md:block">
              Skills
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[90px] right-[90px] md:-top-[40px] md:right-[270px]">
            <GraduationCap size={30} />
            <span className="uppercase text-center hidden md:block">
              Educations
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[60px] right-[40px] md:bottom-[130px] md:right-[120px]">
            <FileText size={30} />
            <span className="uppercase text-center hidden md:block">Blogs</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[10px] right-[20px] md:bottom-[20px] md:right-[80px]">
            <Mail size={30} />
            <span className="uppercase text-center hidden md:block">
              Contact
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setMenu(!menu)}
        className="fixed transform left-1/2 -translate-x-1/2 bottom-3 md:bottom-6 z-50 bg-[#52dde2] p-2 rounded-xl hover:bg-[#8bd1d6] hover:shadow-2xl transition-all duration-300"
      >
        <Grid3x3 className="hidden md:block" size={50} />
        <Grid3x3 className="md:hidden" size={30} />
      </button>
    </div>
  );
}
