import React from 'react';
import Image from 'next/image';
import ButtonLearnNav from '../../components/ButtonLearnNav';
import Navbar from '../../components/Navbar';

import vscLogo from "../../public/assets/img/vscode.png";
import golangLogo from "../../public/assets/img/golang.png";

export default function learn() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className=' mx-20'>
        <div className='title my-10'>
          <h4 className='text-[28px]'>Introduction to Backend Enginner with Golang</h4>
        </div>
        <div className='grid grid-cols-12 gap-12'>
          {/* side navbar */}
          <div className='navbar col-span-3 bg-[#F5F5F5] p-6 rounded-md mb-8 h-fit'>
            <div className='prepatation mb-8'>
              <h2 className=' text-[13px] mb-4'>Basic Programming</h2>
              <div>
                <ButtonLearnNav icon={"preparation"} title={"Download Slide Materi"} />
              </div>
            </div>

            <div className='video-button mb-8'>
              <h2 className=' text-[13px] mb-4'>Data Structure Array - Slice - Map - Function</h2>
              <div>
                <ButtonLearnNav check={true} icon={"video"} title={"Introduction Golang"} />
                <ButtonLearnNav check={true} icon={"video"} title={"Branching"} />
                <ButtonLearnNav icon={"video"} title={"Looping"} />
              </div>
            </div>

            <div className='closing-quiz'>
              <h2 className=' text-[13px] mb-4'>Closing</h2>
              <div>
                <ButtonLearnNav icon={"quiz"} title={"Quiz"} />
              </div>
            </div>
          </div>
          {/* side navbar */}

          {/* content video and quiz*/}
          <div className='course-contents col-span-9'>
            {/* video */}
            <div className="border-2 rounded-md min-h-[424px]">
              <iframe className="w-full h-full aspect-video rounded-md" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </div>
            {/* video */}

            {/* video details */}
            <div className="flex flex-row justify-between items-center py-5">
              <h4 className="text-2xl">Branching</h4>
              <div className="flex gap-4">
                <button className="bg-white px-5 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  PREVIOUS
                </button>
                <button className="px-5 py-2 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  NEXT VIDEO
                </button>
              </div>
            </div>
            {/* video details */}

            {/* tools reference */}
            <div className="">
              <h4>Tools Course</h4>
              <div className="flex flex-row gap-3 items center pt-5 pb-8">
                <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
                  <div className="grid grid-cols-1 place-content-center h-full px-6 py-6">
                    <div className="rounded-full overflow-hidden grid place-content-center">
                      <Image
                        src={vscLogo}
                        alt="Course1"
                        quality={100}
                      />
                    </div>
                    <div className=" text-center mt-3">
                      <h1>Visual Studio Code</h1>
                      <p className="text-xs text-slate-400 ">
                        Click to Download
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
                  <div className="grid grid-cols-1 place-content-center h-full px-6 py-6">
                    <div className="rounded-full overflow-hidden grid place-content-center">
                      <Image
                        src={golangLogo}
                        alt="Course1"
                        quality={100}
                      />
                    </div>
                    <div className=" text-center mt-3">
                      <h1>Golang</h1>
                      <p className="text-xs text-slate-400 ">
                        Click to Download
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tools reference */}
          </div>
          {/* content video and quiz*/}
        </div>
      </div>
    </>
  )
}
