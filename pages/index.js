import Navbar from "../components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* get started */}
        <div className="pl-20 pr-20 grid content-center h-[440px] mt-56 md:mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
            {/* title */}
            <div className="grid content-center">
              <div>
                <p className=" text-[3.063rem] text-center md:text-left" ><strong className=" text-[#126E64]">Grow</strong> Your Skills to <br/> Advace <br/>Your  <strong className="text-[#126E64]">Career Path </strong></p>
                <p className=" text-[#9E9E9E] pt-1">
                  Learn from expert professionals and join the largest online
                  community <br/> for creatives
                </p>
              </div>
              <div className=" flex mt-[48px]">
                <button className=" w-[112px] h-[41px] bg-[#126E64] mr-2 rounded-md text-white text-[11px]">GET STARTED</button>
                <button className=" w-[112px] h-[41px] text-[#126E64] rounded-md border-[1px] border-[#126E64] text-[11px]">CATALOG COURSE</button>
              </div>
            </div>
            {/* image */}
            <div>
              <img className=" w-full" src="/assets/img/head-title.png" alt='titleImage'/>
            </div>

          </div>
        </div>
        {/* get started */}
      </main>

      <footer></footer>
    </>
  );
}
