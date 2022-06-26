/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import mentor from "../public/assets/img/mentor.png";


export default function ReviewCard({comment, name, rating }) {

  return (
    <div className=" p-3 h-fit grid grid-cols-1 border place-content-center drop-shadow-lg rounded-md">
      <div className=" w-full rounded-full">
        <div className=" w-10 h-10 rounded-full mx-auto">
          <Image
            src={mentor}
            alt="Course1"
            className="object-cover rounded-full "
          />
        </div>
        <p className=" text-[10px] text-center">{name}</p>
      </div>
      <div className=" w-full my-1 flex justify-center">
        {
          Array.from(Array(rating), (e, i) => {
            return <StarIcon key={i} className="w-3 text-yellow-400" />
          })
        }
      </div>
      <div className=" w-full">
        <blockquote>
          <p className=" mx-auto text-center text-[10px]">
            {
              `“${comment}.”`
            }
          </p>
        </blockquote>
      </div>
    </div>
  );
}
