/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ClockIcon,
  VideoCameraIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

export default function CardCourse({
  image,
  mentor,
  title,
  mentorName,
  courseId,
  totaltimes,
  totalvideo,
  totalRating,
}) {
  return (
    <div className="">
      <div className="px-4 py-4 border-[1px] border-[#C2C2C2] rounded-md md:min-h-[300px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
        <div className="mb-3">
          <img
            src={image}
            alt={title + "-" + courseId}
            className="max-h-[240px] md:min-h-[119px] md:max-h-[120px] w-full object-cover object-center"
          />
        </div>
        <div className="pt-2 h-full">
          <h1 className="mb-4 text-base font-bold ">{title}</h1>
          <div className="grid content-center mb-4 ">
            {mentor ? (
              <div className="flex">
                <div className="w-5 h-5 rounded-full">
                  <img
                  src="/assets/img/mentor.png"
                  alt="Course1"
                  className="object-cover border-2 rounded-full"
                />
                </div>
                <p className="my-1 ml-2 text-xs text-slate-300">{mentorName}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          {totalvideo ? (
            <div className="grid grid-cols-3 gap-2 mb-4 ">
              <div className="  h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                <div className="flex">
                  <ClockIcon className="text-[#4A5568] w-4 sm:w-5" />{" "}
                  <p className="text-[10px] sm:text-xs border-2 border-transparent ">
                    {totaltimes}
                  </p>
                </div>
              </div>

              <div className="  h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                <div className="flex">
                  <VideoCameraIcon className="text-[#4A5568] w-4 sm:w-5" />{" "}
                  <p className="text-[10px] sm:text-[11px] border-2 border-transparent ">
                    {totalvideo} Video
                  </p>
                </div>
              </div>

              <div className=" h-[25px] bg-[#126E6433] grid place-content-center rounded-sm">
                <div className="flex">
                  <StarIcon className="text-[#4A5568] w-4 sm:w-5" />{" "}
                  <p className="text-[10px] sm:text-xs border-2 border-transparent ">
                    {totalRating}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <Link href={`/courses/${courseId}`}>
            <div className="flex mt-12">
              <button className=" h-full  w-fit py-1 text-md text-[#126E64] focus:outline-0">
                See More
              </button>
              <ArrowRightIcon className="w-4 ml-1 text-[#126E64] " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
