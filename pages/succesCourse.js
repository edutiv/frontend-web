/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ModalRating from "../components/ModalRating";


export default function succesCourse() {
  return (
    <div>
      <div className="grid w-full place-content-center">
        <div className="flex justify-center">
          <img className="h-[400px]" src="/assets/img/head-title.png" />
        </div>
        <h1 className="text-3xl text-center ">What A Day!</h1>
        <p className="mt-3 text-center text-md">
          Finally you have completed the Introduction to UI/UX Designer course
          very well.
        </p>
        <div className="flex flex-row items-center justify-center mt-3 align-middle">
          <button className="px-5 py-3 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md" >Download Certificate</button>
          <ModalRating />
          <Link href="/">
            <a>
              <button className="max-w-xs ml-2 px-5 py-3 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">Back to Course</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
