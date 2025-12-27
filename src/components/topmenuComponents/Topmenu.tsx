"use client"

export default function Topmenu() {
    return(
        <div className="absolute top-0 flex items-center justify-center space-x-6 bg-linear-to-b from-purple-1 to-purple-1/0 w-full h-[80px] ">
            <div className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer">Home</div>
            <div className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer">Skills</div>
            <div className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer">Experience</div>
            <div className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer">Projects</div>
            <div className="px-6 py-3 button-small text-white rounded-lg hover:text-yellow-1 hover:scale-130 duration-150 cursor-pointer">Contact</div>
        </div>
    );
}