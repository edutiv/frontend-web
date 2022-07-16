import React from "react";
import Image from "next/image";
import bgLogin from "../public/assets/img/bg-Login.png";
import {
  AcademicCapIcon,
  GiftIcon,
  KeyIcon,
  PencilAltIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export default function CardProfile() {
  return (
    <div className="max-w-[304px] md:content-center">
      <div className="grid px-2 py-4 border-[1px] border-[#C2C2C2] rounded-md ">
        {/* Picture of Profile */}
        <div>
          <div className="w-10 h-10 rounded-full overflow-hidden mx-auto">
            <Image src={bgLogin} alt="Course1" className="" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mt-4 content-center text-center">
          <div>
            <p className="text-md font-medium">Annete Black</p>
          </div>
          <p className=" text-xs mt-1">Full-Stack Developer</p>
        </div>
        {/* Menu Edit Profile */}
        <div className="mt-[48px] space-y-4 cursor-pointer w-full">
          <div className="bg-neutral-200 grid rounded-md hover:bg-[#43a89c63] cursor-pointer">
			<Link href="/profile/editProfile">
            <div className="flex p-1 font-medium ">
              <PencilAltIcon className="text-[#4A5568] w-5" />
              <p className="text-sm border-2 text-[#4A5568] border-transparent pl-2 ">
                Edit profile
              </p>
            </div>
			</Link>
          </div>
          <div className="bg-neutral-200 grid rounded-md hover:bg-[#43a89c63]">
            <div className="flex p-1 font-medium ">
              <KeyIcon className="text-[#4A5568] w-5" />
              <p className="text-sm border-2 text-[#4A5568] border-transparent pl-2 ">
                Change Password
              </p>
            </div>
          </div>
          <div className="bg-neutral-200 grid rounded-md hover:bg-[#43a89c63] cursor-pointer">
			<Link href="/profile/MyCourse">
            <div className="flex p-1 font-medium ">
              <AcademicCapIcon className="text-[#4A5568] w-5" />
              <p className="text-sm border-2 text-[#4A5568] border-transparent pl-2  ">
                My Course
              </p>
            </div>
			</Link>
          </div>
          <div className="bg-neutral-200 grid rounded-md hover:bg-[#43a89c63] ">
			<Link href="/profile/ProgresCourse">
            <div className="flex p-1 font-medium ">
              <PresentationChartLineIcon className="text-[#4A5568] w-5 " />
              <p className="text-sm border-2 text-[#4A5568] border-transparent pl-2 ">
                Progress Course
              </p>
            </div>
			</Link>
          </div>
          <div className="bg-neutral-200 grid rounded-md hover:bg-[#43a89c63] text-[#126E64]">
            <div className="flex p-1 font-medium ">
              <GiftIcon className="text-[#4A5568] w-5" />
              <p className="text-sm border-2 text-[#4A5568] border-transparent pl-2 ">
                Centificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
