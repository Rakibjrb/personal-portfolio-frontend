import Motion from "@/components/common/Motion";
import React from "react";

export default function Card({
  total,
  title,
}: {
  total: number;
  title: string;
}) {
  return (
    <div className=" rounded-xl py-10 px-6 flex flex-col justify-center items-center gap-4 text-black bg-[#abfbffdb] hover:bg-[#52dde2db] shadow-lg transition-all duration-300">
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <div className={` text-3xl md:text-4xl font-bold text-center`}>
          {total}+
        </div>
        <h2 className={`text-2xl text-center`}>{title}</h2>
      </Motion>
    </div>
  );
}
