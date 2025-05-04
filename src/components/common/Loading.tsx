import { TbFidgetSpinner } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <TbFidgetSpinner className="animate-spin text-5xl text-color-secondery" />
        <div className="text-xs uppercase mt-4 animate-pulse font-bold">
          Loading Please Wait
        </div>
      </div>
    </div>
  );
}
