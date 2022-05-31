import React from "react";
import Image from "next/image";
import { ClockIcon, VideoCameraIcon, StarIcon } from "@heroicons/react/solid";

export default function CardCourse() {
  return (
    <div>
      <div className="container w-[304px] h-[374px] border-[1px] border-[#C2C2C2] rounded-md ">
        <div className=" m-4">
          <div className=" border-2 h-40 my-4">
              {/* <Image /> */}
          </div>
          <div>
            <h1 className=" mb-4 text-base font-bold">Bootstrap 5 - Membuat Landing Page</h1>
            <div className=" mb-4 grid content-center">
              <div className="flex">
              <div className=" w-5 h-5 rounded-full border-2">
                {/* <Image
                  src={codingCourse}
                  alt="Course1"
                  className="object-scale-down rounded-full"
                /> */}
              </div>
              <p className=" text-xs text-slate-300 my-1 ml-2 ">Bessie Cooper</p>
              </div>
            </div>
            <div className=" mb-4 grid grid-cols-3">
                <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                  <div className="flex">
                    <ClockIcon className="text-[#4A5568] w-5 border-2"/> <p className=" text-xs border-2">1h 5m</p>
                  </div>
                </div>

                <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                  <div className="flex">
                    <VideoCameraIcon className="text-[#4A5568] w-5 border-2"/> <p className=" text-xs border-2">8 Video</p>
                  </div>
                </div>

                <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                  <div className="flex">
                    <StarIcon className="text-[#4A5568] w-5 border-2"/> <p className=" text-xs border-2">4.6</p>
                  </div>
                </div>
            </div>
            <button className=" border-2 w-full bg-[#126E64] rounded-md text-white">see more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
