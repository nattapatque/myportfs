import HotelvisCard from "@/src/components/projectsComponents/HotelvisCard";

export default function Page() {
  return (
    <div className="flex flex-col py-30 md:px-20 px-10 space-y-20">
      <div className="flex md:text-6xl text-4xl text-blue1 font-bold md:w-[400px] md:h-[100px] h-[62px] w-[250px] md:border-b-5 border-b-4">
        Projects
      </div>

      <HotelvisCard></HotelvisCard>
    </div>
  );
}
