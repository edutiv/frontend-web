import Image from "next/image";
import Link from "next/link";

const LearnTools = ({tools}) => {
   return (
      <div key={tools.id} className="bg-white md:max-w-[280px] w-full border-[1px] border-[#C2C2C2] rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
         <Link href={tools.tool_url} >
            <a target="_blank" rel='noreferrer'>
               <div className="grid h-full grid-cols-1 px-6 py-6 place-content-center">
                  <div className="grid overflow-hidden rounded-full place-content-center max-h-[60px]">
                     <Image
                        src={tools.tool_icon}
                        alt="Course1"
                        quality={100}
                        className="relative object-scale-down rounded-full"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div className="mt-3 text-center ">
                     <h1>{tools.tool_name}</h1>
                     <p className="text-xs text-slate-400 ">
                        Click to Download
                     </p>
                  </div>
               </div>
            </a>
         </Link>
      </div>
   );
}

export default LearnTools;