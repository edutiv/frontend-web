import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Navbar from "../../components/Navbar";

export default function Request() {
  return (
    <div className=" h-[100vh] mb-48">
      <header>
        <Navbar />
      </header>
      <main className=" mx-20 h-full ">
        <div className="grid grid-cols-12 h-full ">
            
          {/* title request */}
          <div className=" col-span-5 grid grid-cols-1 place-content-center h-full">
            <h1 className=" text-[39px]">
              Request form for additional courses or others
            </h1>
            <p className=" text-[#9E9E9E] my-6">
              You can request additional learning to support all your learning
              on this platform
            </p>
            <div>
              <ul>
                <li className="flex ">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Consulting with experienced mentors
                </li>
                <li className="flex my-4">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Adding learning courses
                </li>
                <li className="flex">
                  <CheckCircleIcon className="w-4 mr-3" />
                  Learning material you want
                </li>
              </ul>
            </div>
          </div>

          {/* request form */}
          <div className=" col-span-7 px-19 w-full h-full grid place-content-center">
            <div>
              <form className=" w-full h-fit">
                <div className=" mb-5">
                  <label className=" text-sm">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="jacobjones@gmail.com"
                    className=" w-full h-7 rounded-md border-blue-300"
                  />
                </div>

                <div className="grid gap-7 grid-cols-2 mb-5">
                  <div>
                    <label className=" text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="jacob"
                      className=" w-full h-7 rounded-md border-blue-300"
                    />
                  </div>
                  <div>
                    <label className=" text-sm">First Name</label>
                    <input
                      type="text"
                      name="LastName"
                      placeholder="jones"
                      className=" w-full h-7 rounded-md border-blue-300"
                    />
                  </div>
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="ex. Master Prototype Figma "
                    className=" w-full h-7 rounded-md border-blue-300"
                  />
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Categories</label>
                  <select
                    name="categories"
                    className=" w-full text-sm h-[36px] rounded-md px-2"
                    placeholder="choose categories"
                  >
                    <option value="latest">Latest</option>
                    <option value="pupuler">Populer</option>
                    <option value="new">New</option>
                  </select>
                </div>

                <div className=" mb-5">
                  <label className=" text-sm">Type Request</label>
                  <select
                    name="typeRequest"
                    className=" w-full text-sm h-[36px] rounded-md px-2"
                    placeholder="choose type request"
                  >
                    <option value="latest">Latest</option>
                    <option value="pupuler">Populer</option>
                    <option value="new">New</option>
                  </select>
                </div>

                <button className=" w-full h-[29px] bg-[#126E64] rounded-md text-white text-sm">
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
