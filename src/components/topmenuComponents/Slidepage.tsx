import X from "../iconComponents/X";
import Link from "next/link";

type SlidePageProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Slidepage({ isOpen, onClose }: SlidePageProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-blue1 z-31 transition-transform duration-500 ease-in-out text-white 
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="h-[90px] w-full flex justify-end px-20">
        <button
          className="hover:scale-150 duration-150 cursor-pointer"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <div className="p-6 md:flex-row flex-col flex w-full gap-15">
        <div className="flex flex-col flex-1 items-center space-y-10">
          <div className="text-xl font-semibold">
            Nattapat <br />
            Daengkongkaew
          </div>
          <div className="bg-gradient-to-r from-blue3 to-blue2 text-white hover:scale-110 font-semibold px-5 py-3 cursor-pointer shadow-lg duration-150">
            Download Resume
          </div>
        </div>
        <div className="flex flex-3 flex-col gap-10 lg:text-8xl md:text-6xl text-4xl font-bold md:items-start items-center">
          <Link
            className="hover:scale-110 duration-150 cursor-pointer"
            href="/"
            onClick={onClose}
          >
            <span className="lg:text-6xl md:text-4xl text-2xl text-gray-300">
              1.{" "}
            </span>{" "}
            Home
          </Link>
          <Link
            className="hover:scale-110 duration-150 cursor-pointer"
            href="/experience"
            onClick={onClose}
          >
            <span className="lg:text-6xl md:text-4xl text-2xl text-gray-300">
              2.{" "}
            </span>{" "}
            Experience
          </Link>
          <Link
            className="hover:scale-110 duration-150 cursor-pointer"
            href="/projects"
            onClick={onClose}
          >
            <span className="lg:text-6xl md:text-4xl text-2xl text-gray-300">
              3.{" "}
            </span>{" "}
            Projects
          </Link>
          <Link
            className="hover:scale-110 duration-150 cursor-pointer"
            href="/"
            onClick={onClose}
          >
            <span className="lg:text-6xl md:text-4xl text-2xl text-gray-300">
              4.{" "}
            </span>{" "}
            Activity
          </Link>
        </div>
      </div>
    </div>
  );
}
