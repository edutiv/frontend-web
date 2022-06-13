import Image from "next/image";

const CardCategory = ({ image, name, desc }) => {
   return (
      <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
         <div className="grid h-full grid-cols-1 px-6 py-6 place-content-center">
            <div className="grid overflow-hidden rounded-full place-content-center">
               <Image
                  src={image}
                  alt="Course1"
                  className="object-scale-down rounded-full"
               />
            </div>
            <div className="mt-3 text-center ">
               <h1>{name}</h1>
               <p className="text-xs text-slate-300 ">
                  {desc}
               </p>
            </div>
         </div>
      </div>
   );
}

export default CardCategory;