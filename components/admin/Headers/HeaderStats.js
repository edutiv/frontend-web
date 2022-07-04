import React from "react";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats({ course, material }) {

  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-32 bg-darkGreen md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Members"
                  statTitle="100"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Course"
                  statTitle={course.toString()}
                  statIconName="fas fa-book-open"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Materials"
                  statTitle={material.toString()}
                  statIconName="fas fa-book-open"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Request"
                  statTitle="24"
                  statIconName="fas fa-file-invoice-dollar"
                  statIconColor="bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
