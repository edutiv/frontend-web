/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CardProgressCourse({title, category , image, progress}) {
  return (
    <div>
      <div className=" h-[122px] border grid grid-cols-12 p-3 gap-5 bg-[#F5F5F5] rounded-sm">
        <div className=" col-span-3 rounded-md">
          <img
                  src={image}
                  alt={title + "-" + category}
                  className="w-full object-fit"
                />
        </div>
        <div className=" col-span-9">
          <h1 className="text-md">{title}</h1>
          <p className="text-sm text-[#126E64] mt-1">{category}</p>
          <div className="flex mt-5">
            <div className="grid w-full align-middle py-2.5 mr-2">
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div className={`bg-gray-600 h-1.5 rounded-full dark:bg-gray-300`} style={{width : `${progress}%`}}></div>
              </div>
            </div>
            <div>
              <p>{progress}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
