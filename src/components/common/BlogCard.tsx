import Image from "next/image";
import Link from "next/link";

type blog = {
  _id: string;
  title: string;
  author: {
    name: string;
    published_date: string;
  };
  thumbnail_image: string;
  type: string;
};

export default function BlogCard({ data }: { data: blog }) {
  return (
    <div className="relative space-y-1.5 p-4 rounded-xl z-0">
      <div className="absolute top-8 left-6 bg-red-500 rounded-md px-3 py-1 uppercase text-white text-xs">
        {data.type}
      </div>
      <Image
        width={300}
        height={350}
        loading="lazy"
        src={data.thumbnail_image}
        className="w-full h-full rounded-xl z-0"
        alt={`Rakibul Hasan portfolio blog about ${data.title}`}
        unoptimized
      />
      <div>
        <Link
          href={`/blogs/blog/${data._id}`}
          className="text-[#c7c7c7] text-xl md:text-[16px] lg:text-2xl hover:text-blue-500 transition-colors duration-300">
          {data.title}
        </Link>
      </div>

      <div className="text-color-primary mt-4">
        <b>{data.author.name}</b>
        <div>{data.author.published_date}</div>
      </div>
    </div>
  );
}
