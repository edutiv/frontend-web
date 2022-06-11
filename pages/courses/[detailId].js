import React from "react";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ButtonLearnNav from "../../components/ButtonLearnNav";
import { Tab } from "@headlessui/react";
import mentor from "../../public/assets/img/mentor.png";
import Image from "next/image";
import { DownloadIcon } from "@heroicons/react/solid";
import Navbar from "../../components/Navbar";
import vscLogo from "../../public/assets/img/vscode.png";
import axios from "axios";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail() {
  let api;
  const [data, setData] = useState();
  const { query } = useRouter();

  useEffect(() => {
    axios
      .get("https://62a0b46ea9866630f815f720.mockapi.io//course")
      .then(async (response) => {
        const courseId = query.detailId;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api = response?.data.filter((data) => data.courseId == courseId);
        const data = api[0];
        setData(data);
      });
  }, [api]);

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className=" mt-20">
        <div className=" text-center">
          <h1 className=" text-4xl">{data?.courseName}</h1>
        </div>
        <div className=" flex justify-center mt-6">
          <div className="flex-col justify-center">
            <h1 className="flex justify-center">Member</h1>
            <p>{data?.courseStatus.member}</p>
          </div>
          <div className=" mx-12 flex-col justify-center">
            <h1>Serifikat</h1>
            <i className="flex justify-center">
              {data?.courseStatus.sertificate ? (
                <CheckCircleIcon className=" w-4" />
              ) : (
                <div></div>
              )}
            </i>
          </div>
          <div>
            <h1>Quiz</h1>
            <i className="flex justify-center">
              {data?.courseStatus.quiz ? (
                <CheckCircleIcon className=" w-4" />
              ) : (
                <div></div>
              )}
            </i>
          </div>
        </div>

        {/* contents video */}
        <div className="mx-20 grid grid-cols-12 gap-10 my-10 h-[424px] my-">
          {/* video */}
          <div className=" border-2 col-span-9 ">
            <iframe
              className="w-full h-full aspect-auto"
              src={data?.courseIntroductionVideo}
            />
          </div>
          {/* video */}

          {/* ennroll button */}
          <div className=" bg-[#F5F5F5] rounded-md col-span-3 p-6 grid">
            <h1 className=" font-bold mb-4 text-base">
              {`24 Video Lesson (${data?.courseLearningTime})`}
            </h1>
            <div className=" flex-col">
              {data?.courseLessons.map((item, index) => (
                <ButtonLearnNav
                  key={index}
                  className="mb-4"
                  icon={"video"}
                  title={item.name}
                  disabled={true}
                />
              ))}
              <ButtonLearnNav
                className="mb-4"
                icon={"video"}
                title={"more video"}
                disabled={true}
              />
            </div>
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
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl p-1">
                  <div className=" flex ">
                    {/* ====== tab about ====== */}
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "py-2.5 text-sm font-medium w-[71px]",
                          selected
                            ? " border-b-2 border-black focus-visible:outline-none"
                            : ""
                        )
                      }
                    >
                      About
                    </Tab>

                    {/* ====== tab lesson ====== */}
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "py-2.5 text-sm font-medium w-[71px]",
                          selected
                            ? " border-b-2 border-black focus-visible:outline-none"
                            : ""
                        )
                      }
                    >
                      Lesson
                    </Tab>

                    {/* ====== tab Tools ====== */}
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "py-2.5 text-sm font-medium w-[71px]",
                          selected
                            ? " border-b-2 border-black focus-visible:outline-none"
                            : ""
                        )
                      }
                    >
                      Tools
                    </Tab>

                    {/* ====== tab Reviews ====== */}
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "py-2.5 text-sm font-medium  w-[71px]",
                          selected
                            ? " border-b-2 border-black focus-visible:outline-none"
                            : ""
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
                        <p>{data?.courseAbout.about}</p>
                      </div>

                      <div className=" mb-12">
                        <h1>Learning Objective</h1>
                        <ul>
                          {data?.courseAbout.LearningObjectives.map(
                            (data, index) => (
                              <div key={index} className="flex">
                                <CheckCircleIcon className=" w-4 mr-2" /> {data}{" "}
                              </div>
                            )
                          )}
                        </ul>
                      </div>

                      <div className=" mb-12">
                        <h1>Advantages of using Golang</h1>
                        <ul>
                          {data?.courseAbout.advantages.map((data, index) => (
                            <li key={index}>
                              <div className="flex">
                                <CheckCircleIcon className=" w-4 mr-2" /> {data}{" "}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Tab.Panel>

                  {/* =================  tab lesson =================*/}
                  <Tab.Panel>
                    <div>
                      {data?.courseLessons.map((data, index) => {
                        return (
                          <div key={index}>
                            <h1 className=" mb-3">{data.name}</h1>
                            {data.listLearn.map((data, index) => (
                              <ButtonLearnNav
                                key={index}
                                icon={"video"}
                                title={data}
                                time={"11 min"}
                              />
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </Tab.Panel>

                  {/* =================  tab Tools =================*/}
                  <Tab.Panel>
                    <div className=" mb-12">
                      <h1>Tools</h1>
                      <p className=" text-[#8d8484]">
                        Complete all the supports below before learning
                      </p>
                    </div>
                    <div className="flex ">
                      {data?.courseTools.map((data, index) => (
                        <div
                          key={index}
                          className=" ml-3 w-[147px] h-[125px] bg-[#F5F5F5] p-2 text-center grid place-content-center"
                        >
                          <div>
                            <Image
                              src={vscLogo}
                              alt="Course1"
                              quality={100}
                              width="50px"
                            />
                          </div>
                          <div className="flex-col">
                            <h1 className=" text-sm">{data.name}</h1>
                            <p className="flex justify-center text-xs">
                              {" "}
                              <DownloadIcon className=" w-3" /> <a>Download</a>{" "}
                            </p>
                          </div>
                        </div>
                      ))}
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
                <p className=" text-sm my-1 ml-2 ">{data?.courseMentor.name}</p>
                <p className=" text-xs text-slate-300 my-1 ml-2 ">
                  {data?.courseMentor.skill}
                </p>
              </div>
            </div>
          </div>

          {/* mentor profil */}
        </div>

        {/* content detail */}
      </div>
    </div>
  );
}
