import IG from "../components/iconComponents/IG";
import Phone from "../components/iconComponents/Phone";
import Github from "../components/iconComponents/Github";
import Linkedin from "../components/iconComponents/Linkedin";

export default function Home() {
  return (
    <div className="flex flex-col bg-blue2">
      {/* banner */}
      <div className="flex flex-col w-full h-screen">
        
        <div className="flex flex-wrap w-full h-full bg-white px-20">

          <div className="flex flex-1 items-center justify-center">
            <div className="font-bold text-gray-900 border-l-7 p-5 border-blue1 leading-17">
              <span className="text-3xl">Hello! I'm </span>
              <br /><span className="text-5xl text-blue1">Nattapat Daengkongkaew</span>
              <br /><span className="text-3xl text-gray-500"> Frontend Developer</span>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="relative w-100 h-100 overflow-hidden rounded-4xl shadow-2xl bg-blue3">
              <img 
                className="absolute top-10 left-0 w-full"
                src="/images/Me/norway1.png" 
                alt="QUE" 
              />
            </div>          
          </div>
        </div>

        <div className="bg-white pb-10 px-20 w-full flex flex-col justify-end gap-5">
          <div className="text-blue2 text-xl flex justify-end">
            nattapat.daengkongkaew@gmail.com
          </div>
          <div className="text-blue1 flex flex-row justify-end gap-5">
            <IG></IG>
            <Phone></Phone>
            <Github></Github>
            <Linkedin></Linkedin>
          </div>
        </div>

      </div>
    </div>
  ); 
}
