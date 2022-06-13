/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalRating from "../components/ModalRating";


export default function succesCourse() {
  return (
    <div>
      <div className="grid place-content-center w-full">
        <div className="flex justify-center">
          <img className="h-[400px]" src="/assets/img/head-title.png" />
        </div>
        <h1 className=" text-center text-3xl">What A Day!</h1>
        <p className=" text-center text-md mt-3">
          Finally you have completed the Introduction to UI/UX Designer course
          very well.
        </p>
        <div className="flex flex-col justify-center mt-3">
          <button className=" mb-1 px-5 py-3 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md" >download Certificate</button>
          <ModalRating />
        </div>
      </div>
    </div>
  );
}
