import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import axios from 'axios';
import ButtonLearnNav from '../../components/ButtonLearnNav';
import Navbar from '../../components/Navbar';

import vscLogo from "../../public/assets/img/vscode.png";
import golangLogo from "../../public/assets/img/golang.png";

import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Learn() {

  let api;
  const [data, setData] = useState();
  const { query } = useRouter();

  useEffect(() => {
    axios
      .get("https://62a0b46ea9866630f815f720.mockapi.io//course")
      .then(async (response) => {
        const courseId = query.learn;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api = response?.data.filter((data) => (data.courseId == courseId));
        const data = api[0];
        setData(data);
        // console.log(data);
      });
  }, [api]);

  const [selectedIndex, setSelectedIndex] = useState(0)

  const totalCourse = data?.courseVideo.length;

  const limitHandlerMin = (index) => {
    if (index < 0) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(index - 1)
    }
  }

  const limitHandlerMax = (index) => {
    if (index >= totalCourse - 1) {
      setSelectedIndex(totalCourse - 1)
    } else {
      setSelectedIndex(index + 1)
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className='mx-20 '>
        <div className='my-10 title'>
          <h4 className='text-[28px]'>
            {data?.courseName}
          </h4>
        </div>
        <div className='grid grid-cols-12 gap-12'>

          {/* side navbar */}
          <Tab.Group vertical selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className='navbar col-span-3 bg-[#F5F5F5] p-6 rounded-md mb-8 h-fit'>
              <div className='mb-8 prepatation'>
                <h2 className=' text-[13px] mb-4'>Basic Programming</h2>
                <div>
                  <ButtonLearnNav icon={"preparation"} title={"Download Slide Materi"} />
                </div>
              </div>
              <Tab.List>
                <div className='mb-8 video-button'>
                  <h2 className='text-[13px] mb-4'>Data Structure Array - Slice - Map - Function</h2>
                  <div className='flex flex-col'>
                    {
                      data?.courseVideo.map((course) => (
                        <Tab key={course.videoDetailId}>
                          <ButtonLearnNav icon={"video"} title={course.videoDetailName} />
                        </Tab>
                      ))
                    }
                  </div>
                </div>

                <div className='closing-quiz'>
                  <h2 className=' text-[13px] mb-4'>Closing</h2>
                  <div className='flex flex-col'>
                    <Tab>
                      <ButtonLearnNav icon={"quiz"} title={"Quiz"} />
                    </Tab>
                  </div>
                </div>
              </Tab.List>
            </div>
            {/* side navbar */}

            {/* content video and quiz*/}
            <div className='col-span-9 course-contents'>
              {/* video */}

              <Tab.Panels>
                {
                  data?.courseVideo.map((course) => (
                    <Tab.Panel key={course.videoDetailId}>
                      <div className="border-2 rounded-md min-h-[424px]">
                        <iframe className="w-full h-full rounded-md aspect-video" src={course.videoUrl} />
                      </div>
                      {/* video */}

                      {/* video details */}
                      <div className="flex flex-row items-center justify-between py-5">
                        <h4 className="text-2xl">{course.videoDetailName}</h4>
                        <div className="flex gap-4">
                          <button onClick={() => limitHandlerMin(selectedIndex)} className="bg-white px-5 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                            PREVIOUS
                          </button>
                          <button onClick={() => limitHandlerMax(selectedIndex)} className="px-5 py-2 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                            NEXT VIDEO
                          </button>
                        </div>
                      </div>
                      {/* video details */}

                      {/* tools reference */}
                      <div className="">
                        <h4>Tools Course</h4>
                        <div className="flex flex-row gap-3 pt-5 pb-8 items center">
                          <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
                            <div className="grid h-full grid-cols-1 px-6 py-6 place-content-center">
                              <div className="grid overflow-hidden rounded-full place-content-center">
                                <Image
                                  src={vscLogo}
                                  alt="Course1"
                                  quality={100}
                                />
                              </div>
                              <div className="mt-3 text-center ">
                                <h1>Visual Studio Code</h1>
                                <p className="text-xs text-slate-400 ">
                                  Click to Download
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
                            <div className="grid h-full grid-cols-1 px-6 py-6 place-content-center">
                              <div className="grid overflow-hidden rounded-full place-content-center">
                                <Image
                                  src={golangLogo}
                                  alt="Course1"
                                  quality={100}
                                />
                              </div>
                              <div className="mt-3 text-center ">
                                <h1>Golang</h1>
                                <p className="text-xs text-slate-400 ">
                                  Click to Download
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  ))
                }
              </Tab.Panels>
              {/* tools reference */}
            </div>
          </Tab.Group>
          {/* content video and quiz*/}
        </div>
      </div>
    </>
  )
}
