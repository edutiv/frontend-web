// Base Import
import Image from "next/image";
import Navbar from "../components/Navbar";
import CardCourse from "../components/CardCourse";

// Asset Import
import codingCourse from "../public/assets/img/frontend-course.png";
import titleImg from "../public/assets/img/head-title.svg";
import courseBs from "../public/assets/img/bs5.png";
import mentorCourseBs from "../public/assets/img/mentor.png";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  let api;
  const [data, setData] = useState();

  // get api
  useEffect(() => {
    axios
      .get("https://62a0b46ea9866630f815f720.mockapi.io//course")
      .then( (response) => {      
        // eslint-disable-next-line react-hooks/exhaustive-deps
        api = response
        setData(api.data);
      });
  }, [api]);
  console.log(data);


  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* get started */}
        <div className="pl-20 pr-20 grid content-center h-[440px] mt-32 md:mt-16">
          <div className="grid content-center grid-cols-1 gap-6 md:grid-cols-2">
            {/* title */}
            <div className="grid content-center">
              <div>
                <p className="text-[36px] md:text-[3.063rem] text-center md:text-left">
                  <strong className=" text-[#126E64]">Grow</strong> Your Skills
                  to <br /> Advace <br />
                  Your <strong className="text-[#126E64]">Career Path </strong>
                </p>
                <p className=" text-[#9E9E9E] pt-1">
                  Learn from expert professionals and join the largest online
                  community <br /> for creatives
                </p>
              </div>
              <div className=" flex mt-[48px]">
                <button className="px-5 py-3 bg-[#126E64] mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  GET STARTED
                </button>
                <button className="bg-white px-5 py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  CATALOG COURSE
                </button>
              </div>
            </div>
            {/* image */}
            <div>
              <Image
                className="w-full max-h-[600px]"
                src={titleImg}
                alt="titleImage"
              />
            </div>
          </div>
        </div>
        {/* get started */}

        {/* features icon */}

        <div className="mx-20 my-24 ">
          <div className="flex justify-between mx-24">
            <div className="flex items-center ">
              {" "}
              <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center">
                <Image
                  src={"/assets/icon/Video.png"}
                  className="w-12 "
                  width="48px"
                  height="48px"
                  alt="video"
                />
              </i>{" "}
              <p className="ml-6 ">Video Learning</p>{" "}
            </div>
            <div className="flex items-center ">
              {" "}
              <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center">
                <Image
                  src={"/assets/icon/Certificate.png"}
                  className="w-12 "
                  width="48px"
                  height="48px"
                  alt="certif"
                />
              </i>{" "}
              <p className="ml-6 ">Certificates</p>{" "}
            </div>
            <div className="flex items-center ">
              {" "}
              <i className="bg-[#126E6433] rounded-full w-20 h-20 grid place-content-center">
                <Image
                  src={"/assets/icon/Test Passed.png"}
                  className="w-12 "
                  width="48px"
                  height="48px"
                  alt="test passed"
                />
              </i>{" "}
              <p className="ml-6 ">Quiz</p>{" "}
            </div>
          </div>
        </div>

        {/* features icon */}

        {/* Course Category */}

        <div className=" h-[392px] mb-20 mx-20">
          <div>
            <p className="text-base text-[#126E64]">Let’s learning today</p>
            <h1 className=" mb-12 text-[39px]">
              Courses with categories that we
              <br />
              have prepared for you
            </h1>
            <div className="bg-white max-w-[280px] border-[1px] border-[#C2C2C2] container rounded-md hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md hover:cursor-pointer">
              <div className="grid h-full grid-cols-1 px-6 py-6 place-content-center">
                <div className="grid overflow-hidden rounded-full place-content-center">
                  <Image
                    src={codingCourse}
                    alt="Course1"
                    className="object-scale-down rounded-full"
                  />
                </div>
                <div className="mt-3 text-center ">
                  <h1>Coding Course</h1>
                  <p className="text-xs text-slate-300 ">
                    Full-Stack Web & Mobile Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Category */}

        {/* Course Card  */}
        <div className="pb-20 mx-20">
          <p className="text-base text-[#126E64]">Top Course</p>
          <h1 className="mb-12 text-[39px]">Excellent Course For You</h1>
          <div className="grid grid-cols-4 gap-3 ">
            {
              data ? data?.map((item) => (
                <CardCourse key={item.courseId} image={item.courseBannerImg} mentor={mentorCourseBs} mentorName={"bessie chopper"} title={item.courseName} courseId={item.courseId} />
              )) : <div className="">Loading...</div>
            }
          </div>
          
        </div>
        {/* Course Card */}
      </main>

      <footer></footer>
    </>
  );
}
