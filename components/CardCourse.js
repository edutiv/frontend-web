/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ClockIcon, VideoCameraIcon, StarIcon } from "@heroicons/react/solid";

export default function CardCourse({image, mentor, title, mentorName, courseId}) {
  return (
    <div className="">
      <div className="px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md">
        <div className="mb-4">
          <img src={image} alt={title+'-'+courseId} className="object-cover"/>
        </div>
        <div className="pt-2">
          <h1 className="mb-4 text-base font-bold ">{title}</h1>
          <div className="grid content-center mb-4 ">

            <div className="flex">
              <div className="w-5 h-5 rounded-full">
                <Image
                  src={mentor}
                  alt="Course1"
                  className="object-cover border-2 rounded-full"
                />
              </div>
              <p className="my-1 ml-2 text-xs text-slate-300">{mentorName}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-4 gap-2 ">
            <div className="  h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <ClockIcon className="text-[#4A5568] w-4 sm:w-5" /> <p className="text-[10px] sm:text-xs border-2 border-transparent ">1h 5m</p>
              </div>
            </div>

            <div className="  h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <VideoCameraIcon className="text-[#4A5568] w-4 sm:w-5" /> <p className="text-[10px] sm:text-xs border-2 border-transparent ">8 Video</p>
              </div>
            </div>

            <div className=" h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <StarIcon className="text-[#4A5568] w-4 sm:w-5" /> <p className="text-[10px] sm:text-xs border-2 border-transparent ">4.6</p>
              </div>
            </div>
          </div>
          <Link href={`/courses/${courseId}`}>
            <button className=" border-2 w-full bg-[#126E64] rounded-md text-white py-1 hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">See More</button>
          </Link>
          <Link href={`/learns/${courseId}`}>
            <button className=" border-2 w-full bg-[#126E64] rounded-md text-white py-1 hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">Start Learning</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
