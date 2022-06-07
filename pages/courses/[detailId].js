import React from "react";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ButtonLearnNav from "../../components/ButtonLearnNav";
import { Tab } from "@headlessui/react";
import mentor from "../../public/assets/img/mentor.png";
import Image from "next/image";
import { DownloadIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail() {
  return (
    <div className=" mt-20">
      <div className=" text-center">
        <h1 className=" text-4xl">
          Introduction to Backend Enginner with Golang
        </h1>
      </div>
      <div className=" flex justify-center mt-6">
        <div className="flex-col justify-center">
          <h1 className="flex justify-center">Member</h1>
          <p>24 enrolled</p>
        </div>
        <div className=" mx-12 flex-col justify-center">
          <h1>Serifikat</h1>
          <i className="flex justify-center">
            <CheckCircleIcon className=" w-4" />
          </i>
        </div>
        <div>
          <h1>Quiz</h1>
          <i className="flex justify-center">
            <CheckCircleIcon className=" w-4" />
          </i>
        </div>
      </div>

      {/* contents video */}
      <div className="mx-20 grid grid-cols-12 gap-10 my-10 h-[424px]">
        {/* video */}
        <div className=" border-2 col-span-9 ">

          <iframe className=" w-full aspect-video" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />

        </div>
        {/* video */}

        {/* ennroll button */}
        <div className=" bg-[#F5F5F5] rounded-md col-span-3 p-6 grid">
          <h1 className=" font-bold mb-4 text-base">24 Video Lesson (1h 5m)</h1>

          <ButtonLearnNav
            className="mb-4"
            icon={"video"}
            title={"Introduction Golang"}
          />

          <button className=" h-[41px] bg-[#126E64] rounded-md w-full place-self-end text-white">
            ENROLL NOW
          </button>
        </div>
        {/* ennroll button */}
        
      </div>
      {/* contents video */}

      {/* content detail */}
      <div className=" grid grid-cols-12 gap-10 mx-20">

        {/* tabs content */}
        <div className=" col-span-9">
          <div className="w-full px-2 sm:px-0">
            <Tab.Group >
              <Tab.List className="flex space-x-1 rounded-xl p-1">
                <div className=" flex ">
                {/* ====== tab about ====== */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium  w-[71px]",
                      selected ? " border-b-2 border-black" : ""
                    )
                  }
                >
                  About
                </Tab>

                {/* ====== tab lesson ====== */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium  w-[71px]",
                      selected ? " border-b-2 border-black" : ""
                    )
                  }
                >
                  Lesson
                </Tab>

                {/* ====== tab Tools ====== */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium  w-[71px]",
                      selected ? " border-b-2 border-black" : ""
                    )
                  }
                >
                  Tools
                </Tab>

                {/* ====== tab Reviews ====== */}
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium  w-[71px]",
                      selected ? " border-b-2 border-black" : ""
                    )
                  }
                >
                  Reviews
                </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className=" mt-12 w-full ">
                {/* =================  tab about =================*/}
                <Tab.Panel>
                  <div>
                    <div className=" my-12">
                      <p>
                        Golang is a multifunctional programming language that is
                        widely used by large Indonesian companies such as
                        Tokopedia, Gojek and many more. Therefore, mastering the
                        Golang language and being able to create web
                        applications using this language is a very valuable
                        skill nowadays. In this class, we will learn the
                        fundamentals or basics of website programming using
                        Golang which can be used to create the website
                        application of your dreams!
                      </p>
                    </div>

                    <div className=" mb-12">
                      <h1>Learning Objective</h1>
                      <ul>
                        <li>Learn & Understand Basic Programming</li>
                        <li>Learn & Understand Basic Programming</li>
                      </ul>
                    </div>

                    <div className=" mb-12">
                      <h1>Advantages of using Golang</h1>
                      <ul>
                        <li>Golang produces applications with high performance, but the structure is quite simple.</li>
                        <li>Golang has been widely used by large companies, both in Indonesia and abroad.</li>
                      </ul>
                    </div>

                  </div>
                </Tab.Panel>

                {/* =================  tab lesson =================*/}
                <Tab.Panel>
                  <div>
                    <h1 className=" mb-3">Basic Programming</h1>

                    <ButtonLearnNav icon={"video"} title={"introduction programming"} time={"11 min"} />
                  </div>
                </Tab.Panel>

                {/* =================  tab Tools =================*/}
                <Tab.Panel>
                  <div className=" mb-12">
                    <h1>Tools</h1>
                    <p className=" text-[#9E9E9E]">Complete all the supports below before learning</p>
                  </div>
                  <div>
                    <div className=" w-[147px] h-[125px] bg-[#F5F5F5] p-2 text-center">
                      {/* <Image /> */}
                      <div className="flex-col">
                        <h1 className=" text-sm">Visual Studio Code</h1>
                        <p className="flex justify-center text-xs"> <DownloadIcon className=" w-3" /> <a>Download</a> </p>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>

                {/* =================  tab Reviews =================*/}
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    <li className="relative rounded-md  hover:bg-gray-100">
                      <h3 className="text-sm font-medium ">lesson</h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>lesson</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        {/* tabs content */}

        {/* mentor profil */}
                          
          <div className="grid col-span-3 border-2 h-[173px] p-3 content-center">
            <h1 className=" pb-4 font-bold">Mentor Expert</h1>
            <div className="flex">
              <div className=" w-10 rounded-full">
                <Image
                  src={mentor}
                  alt="Course1"
                  className="object-cover rounded-full border-2"
                />
              </div>
              <div>
              <p className=" text-sm my-1 ml-2 ">Bessie Cooper</p>
              <p className=" text-xs text-slate-300 my-1 ml-2 ">Fullstack Developer</p>
              </div>
            </div>

          </div>

        {/* mentor profil */}

      </div>

      {/* content detail */}
    </div>
  );
}
