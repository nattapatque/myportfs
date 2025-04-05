import X from "../iconComponents/X";

type SlidePageProps = {
    isOpen: boolean;
    onClose: () => void;
  };

export default function Slidepage({isOpen, onClose}: SlidePageProps){
    return(
        <div className={`fixed top-0 left-0 w-full h-full bg-blue1 z-31 transition-transform duration-500 ease-in-out text-white 
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="h-[90px] w-full flex justify-end px-20">
                <button 
                    className="hover:scale-150 duration-150 cursor-pointer"
                    onClick={onClose}
                >
                    <X/>
                </button>
            </div>
            <div className="p-6 md:flex-row flex-col flex w-full gap-15">
                
                <div className="flex flex-col flex-1 items-center space-y-10">
                    <div className="text-xl font-semibold">Nattapat <br />Daengkongkaew</div>
                    <div className="bg-gradient-to-r from-blue3 to-blue2 text-white hover:scale-110 font-semibold px-5 py-3 cursor-pointer shadow-lg duration-150">Download CV</div>
                </div>
                <div className="flex flex-3 flex-col gap-10 md:text-8xl text-6xl font-bold md:items-start items-center">
                    <div className="hover:scale-110 duration-150 cursor-pointer">Experience</div>
                    <div className="hover:scale-110 duration-150 cursor-pointer">About Me</div>
                    <div className="hover:scale-110 duration-150 cursor-pointer">Contact</div>
                </div>
                
            </div>
        </div>
    );
}  