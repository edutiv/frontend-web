import React from "react";

export default function CardProgressCourse() {
  return (
    <div>
      <div className=" h-[122px] border grid grid-cols-12 p-3 gap-5 bg-[#F5F5F5] rounded-sm">
        <div className=" col-span-3 border rounded-md">
          {/* <img
                  src={image}
                  alt={title + "-" + courseId}
                  className="max-h-[240px] md:min-h-[119px] md:max-h-[120px] w-full object-cover object-center"
                /> */}
        </div>
        <div className=" col-span-9">
          <h1>Fundamental Backend Engineer</h1>
          <p className="text-sm text-[#126E64] mt-1">Backend Engineer</p>
          <div className="flex mt-5">
            <div className="grid w-full align-middle py-2.5 mr-2">
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div className="bg-gray-600 h-1.5 rounded-full dark:bg-gray-300 w-[45%]"></div>
              </div>
            </div>
            <div>
              <p>14/26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
