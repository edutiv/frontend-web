import Image from "next/image";

const CardProgres = ({image, course, category, progress}) => {

   return (
      <div className="flex flex-row gap-3 bg-[#f5f5f5] rounded-md py-4 px-6">
         <div className="w-40 max-w-[150px] h-24 max-h-[90px]">
            <Image src={image} alt="backend-course" layout="responsive" quality={100} />
         </div>
         <div className="flex flex-col w-full gap-1">
            <h5 className="text-xl">{course}</h5>
            <p className="m-0 text-sm text-slate-400">{category}</p>
            <div className="flex gap-2">
               <div className="w-full h-1 mt-3 bg-gray-200">
                  <div className="h-1 bg-blue-600 rounded" style={{ width: `${progress * 100}%` }}></div>
               </div>
               <p className="text-sm">{Math.floor(progress * 100)}%</p>
            </div>
         </div>
      </div>
   );
}

export default CardProgres;