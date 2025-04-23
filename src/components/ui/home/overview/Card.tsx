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
    <div className="overview-card rounded-xl py-10 px-6 flex flex-col justify-center items-center gap-4 bg-white shadow-lg hover-primary">
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <h1
          className={`overview-count text-3xl md:text-4xl font-bold text-center text-color-secondery`}
        >
          {total}+
        </h1>
        <h2 className={`text-2xl text-center`}>{title}</h2>
      </Motion>
    </div>
  );
}
