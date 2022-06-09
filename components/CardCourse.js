import React from "react";
import Image from "next/image";
import { ClockIcon, VideoCameraIcon, StarIcon } from "@heroicons/react/solid";
import Link from 'next/link'

export default function CardCourse({image, mentor, title, mentorName, courseId}) {
  return (
    <div className="max-w-[304px]">
      <div className="container px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md">
        <div className="h-40 mb-4">
          <Image 
            src={image}
            alt="course1"
            quality={100}
          />
        </div>
        <div className="pt-2">
          <h1 className=" mb-4 text-base font-bold">{title}</h1>
          <div className=" mb-4 grid content-center">
            
            <div className="flex">
              <div className="w-5 h-5 rounded-full">
                <Image
                  src={mentor}
                  alt="Course1"
                  className="object-cover rounded-full border-2"
                />
              </div>
              <p className=" text-xs text-slate-300 my-1 ml-2 ">{mentorName}</p>
            </div>
          </div>
          <div className=" mb-4 grid grid-cols-3">
            <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <ClockIcon className="text-[#4A5568] w-5" /> <p className=" text-xs border-2 border-transparent">1h 5m</p>
              </div>
            </div>

            <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <VideoCameraIcon className="text-[#4A5568] w-5" /> <p className=" text-xs border-2 border-transparent">8 Video</p>
              </div>
            </div>

            <div className=" w-20 h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
              <div className="flex">
                <StarIcon className="text-[#4A5568] w-5" /> <p className=" text-xs border-2 border-transparent">4.6</p>
              </div>
            </div>
          </div>
          <Link href={`/courses/${courseId}`}>
          <button className=" border-2 w-full bg-[#126E64] rounded-md text-white py-1 hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
