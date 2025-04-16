import React from "react";

export default function Card({
  total,
  title,
}: {
  total: number;
  title: string;
}) {
  return (
    <div className="rounded-lg py-10 px-6 flex flex-col justify-center items-center gap-4 bg-white shadow-2xl">
      <h1
        className={`text-3xl md:text-4xl font-bold text-center text-color-secondery`}
      >
        {total}+
      </h1>
      <h2 className={`text-2xl text-center`}>{title}</h2>
    </div>
  );
}
