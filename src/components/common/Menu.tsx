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
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="z-30 overflow-hidden">
      <div
        className={`bg-white shadow-2xl fixed bottom-8 transform left-1/2 -translate-x-1/2 z-40 rounded-t-full ${
          menu ? "w-[700px] h-[350px]" : "w-[0px] h-0"
        } transition-all duration-700 overflow-hidden`}
      >
        <div className="h-full relative">
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[20px] left-[80px]">
            <Home size={30} />
            <span className="uppercase text-center">Home</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[130px] left-[120px]">
            <FolderKanban size={30} />
            <span className="uppercase text-center">Projects</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute top-[90px] left-[220px]">
            <BrainCircuit size={30} />
            <span className="uppercase text-center">Skills</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute top-[70px] right-[270px]">
            <GraduationCap size={30} />
            <span className="uppercase text-center">Educations</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[130px] right-[120px]">
            <FileText size={30} />
            <span className="uppercase text-center">Blogs</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[60px] absolute bottom-[20px] right-[80px]">
            <Mail size={30} />
            <span className="uppercase text-center">Contacts</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setMenu(!menu)}
        className="fixed transform left-1/2 -translate-x-1/2 bottom-8 z-50 bg-[#52dde2] p-2 rounded-xl hover:bg-white hover:shadow-2xl transition-all duration-300"
      >
        <Grid3x3 size={50} />
      </button>
    </div>
  );
}
