import Goin from "../iconComponents/Goin";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:px-40 md:px-20 px-10 space-y-4">
      <div className="flex w-full lg:w-1/3 md:text-4xl text-2xl font-bold text-white">
        <span className="md:h-15 h-10 border-b-4 text-nowrap">Experience</span>
      </div>

      <div className="w-full lg:w-2/3 text-gray-200 leading-relaxed space-y-8">
        <div className="flex md:flex-row flex-col">
          <div className=" text-nowrap">June 2024 - July 2024</div>
          <div className="md:ml-20 ml-0 flex flex-col space-y-2">
            <div className="font-bold text-white text-xl">
              Programmer - Ayodia
              <span className="ml-2 inline-block mix-w-32 text-center text-[16px] font-medium bg-blue3 text-white rounded-xl px-4">
                Internship
              </span>
            </div>

            <div className="">
              I developed the web platform using{" "}
              <span className="font-bold text-white">Angular</span> and the
              mobile application using{" "}
              <span className="font-bold text-white">Flutter</span>. My work
              focused on implementing{" "}
              <span className="font-bold text-white">
                Bluetooth auto-connection
              </span>
              , device communication, and real-time vital-sign data
              visualization. I also handled testing on real Android devices and
              optimized the workflow to ensure smooth interaction between the
              medical device and the app.
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className=" text-nowrap">June 2025 - July 2025</div>
          <div className="md:ml-20 ml-0 flex flex-col space-y-2">
            <div className="font-bold text-white text-xl">
              Data Scientist - Botnoi
              <span className="ml-2 inline-block mix-w-32 text-center text-[16px] font-medium bg-blue3 text-white rounded-xl px-4">
                Internship
              </span>
            </div>
            <div className="">
              I worked in <span className="font-bold">Google Analytics</span>,
              managing GTM tags and analyzing user behavior. I joined the{" "}
              <span className="font-bold">Bolt Hackathon</span>, researching PM
              apps, defining requirements, and presenting the “Nakumanager” app.
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mb-20">
          <Link
            className="flex flex-row items-center space-x-2 bg-white py-5 px-10 rounded-3xl md:text-xl text-lg text-blue1 font-semibold shadow-2xl hover:bg-gray-100 hover:scale-110 duration-150 cursor-pointer"
            href="/"
          >
            <Goin></Goin>
            <span>see my experience</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
