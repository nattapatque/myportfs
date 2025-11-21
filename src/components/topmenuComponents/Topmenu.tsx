"use client"
import Burger from "../iconComponents/Burger";

type TopmenuProps = {
    onBurgerClick: () => void;
  };

export default function Topmenu({onBurgerClick}:TopmenuProps) {
    return(
        <div className="flex justify-between items-center md:px-20 px-10 h-[90px] text-blue2 fixed top-0 left-0 right-0 z-30">
            <div className="font-bold hover:text-blue1">
                
            </div>
            <div className="flex">
                <div className="hover:text-blue1 cursor-pointer hover:scale-150 duration-150" onClick={onBurgerClick}>
                    <Burger></Burger>  
                </div>
            </div>
        </div>
    );
}