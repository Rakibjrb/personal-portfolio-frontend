"use client";

import { useState } from "react";
import Motion from "@/components/common/Motion";
import Image from "next/image";
import { bpi_images, kella_images } from "@/utils/data/educationImages";
import Gallery from "./Gallery";

const educations = [
  {
    _id: "lksadjflfasldfkj",
    img: "/educations/bpi-logo.jpeg",
    title: "Diploma in Engineering - CST",
    name: "Bogura Polytechnic Institute",
    details:
      "Learned about computer science and technology, algorithms, data structures, and more.",
    image_gallery: bpi_images,
  },
  {
    _id: "dlkfjaskldfjagdfg",
    img: "/educations/kella-high-school.jpeg",
    title: "Secondery School Certificate - SSC",
    name: "Kella High School",
    details:
      "Gathered knowledge about different subjects, including mathematics, physics, chemistry, and more.",
    image_gallery: kella_images,
  },
];

export default function Educations() {
  const [showByID, setShowByID] = useState(educations[0]._id);

  return (
    <div className="max-w-7xl mx-auto">
      <Motion initial={{ opacity: 0, y: 50 }} inView={{ opacity: 1, y: 0 }}>
        <h1 className="text-color-primary text-center text-5xl mb-2">
          Educations
        </h1>
        <div className="mb-3 flex justify-center">
          <div className="w-[100px] h-[6px] rounded-xl bg-[#52dde2]"></div>
        </div>
      </Motion>

      <div className="space-y-5 mt-10">
        {educations.map((edu) => (
          <Motion
            initial={{ opacity: 0, x: 50 }}
            inView={{ opacity: 1, x: 0 }}
            key={edu._id}>
            <div onClick={() => setShowByID(edu._id)}>
              <div className="bg-white shadow-lg rounded-xl p-5 md:flex items-center gap-6 hover-primary cursor-pointer z-30">
                <Image
                  className="w-[150px] h-[150px]"
                  src={edu.img}
                  width={150}
                  height={150}
                  alt={edu.title}
                />
                <div className="mt-3 md:mt-0 space-y-1">
                  <h3 className="text-2xl font-bold">{edu.title}</h3>
                  <h4 className="text-xl">{edu.name}</h4>
                  <p>{edu.details}</p>
                </div>
              </div>

              <div
                className={`${
                  showByID === edu._id
                    ? "w-full h-auto mt-5 opacity-100"
                    : "mt-0 h-0 w-full opacity-0 hidden"
                } transition-all duration-300 shadow-lg rounded-xl md:flex items-center gap-6 cursor-pointer z-0`}>
                {!edu.image_gallery ? (
                  <div className="w-full text-center text-2xl">
                    No Content available right now
                  </div>
                ) : (
                  <div>
                    {edu._id === showByID && (
                      <Gallery images={edu.image_gallery} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </Motion>
        ))}
      </div>
    </div>
  );
}
