import React, { useContext } from "react";
import { CounterContext } from "../../../layouts/Admin.js";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {

  const counterValue = useContext(CounterContext);
  const course = counterValue?.course;
  const material = counterValue?.material;
  const member = counterValue?.member;
  const request = counterValue?.request;
  // console.log(member);

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
                  statTitle={member?.toString()}
                  // statTitle="100"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Course"
                  statTitle={course?.toString()}
                  // statTitle="1"
                  statIconName="fas fa-book-open"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Materials"
                  statTitle={material?.toString()}
                  // statTitle="1"
                  statIconName="fas fa-book-open"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Request"
                  statTitle={request?.toString()}
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
