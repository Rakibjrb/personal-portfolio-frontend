import Image, { StaticImageData } from "next/image";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div key={"education-photo-gallery" + index}>
          <Image
            className="w-full h-full rounded-md"
            src={image}
            width={800}
            height={450}
            alt="photo gallery image"
          />
        </div>
      ))}
    </div>
  );
}
