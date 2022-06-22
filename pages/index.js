// Base Import
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardCourse from "../components/CardCourse";
import CardCategory from "../components/CardCategory";

// Asset Import
import codingCourse from "../public/assets/img/frontend-course.png";
import titleImg from "../public/assets/img/head-title.svg";
import courseBs from "../public/assets/img/bs5.png";
import mentorCourseBs from "../public/assets/img/mentor.png";
import { icons } from "./icons";
import Footer from "../components/Footer";


export default function Home() {

  let api;
  // const [data, setData] = useState();
  const [dataCourse, setDataCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getEdutivData();
  }, []);

  // get api
  // useEffect(() => {
  //   axios
  //     .get("https://62a0b46ea9866630f815f720.mockapi.io//course")
  //     .then((response) => {
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       api = response
  //       setData(api.data);
  //     });
  // }, [api]);
  // console.log(data);


  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* get started */}
        <div className="px-8 md:px-20 grid content-center mt-6 md:mt-16">
          <div className="grid content-center grid-cols-1 gap-6 md:grid-cols-2">
            {/* title */}
            <div className="grid content-center">
              <div>
                <p className="text-[30px] md:text-[2.5rem] text-center md:text-left">
                  <strong className=" text-[#126E64]">Grow</strong> Your Skills
                  to <br /> Advance <br />
                  Your <strong className="text-[#126E64]">Career Path </strong>
                </p>
                <p className="text-[#9E9E9E] pt-1 text-center md:text-left">
                  Learn from expert professionals and join the largest online
                  community <br /> for creatives
                </p>
              </div>
              <div className="flex mt-[48px] justify-center md:justify-start flex-col md:flex-row gap-3 md:gap-2">
                <button className="px-5 py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  GET STARTED
                </button>
                <button className="bg-white px-5 py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                  CATALOG COURSE
                </button>
              </div>
            </div>
            {/* image */}
            <div className="flex justify-center">
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

        <div className="px-20 py-6 md:py-24">
          <div className="hidden md:flex justify-center md:justify-around flex-col md:flex-row gap-3 md:gap-10">
            {icons.map((icon) => (
              <div className="flex items-center" key={icon.src}>
                <div className={'bg-[#126E6433] rounded-full p-2 md:p-4 grid place-content-center'}>
                  <Image
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt={icon.alt}
                  />
                </div>
                <p className="ml-6 ">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* features icon */}

        {/* Course Category */}

        <div className="mb-20 mx-8 md:mx-20">
          <div>
            <p className="text-base text-[#126E64]">Let’s learning today</p>
            <h1 className=" mb-12 text-[30px] md:text-[2.5rem] w-full md:w-7/12">
              Courses with categories that we
              have prepared for you
            </h1>
            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start w-full">
              {
                categories?.map((category) => (
                  <CardCategory key={category.id} image={category.category_image} name={category.category_name} desc={category.description} />
                ))
              }
            </div>
          </div>
        </div>

        {/* Course Category */}

        {/* Course Card  */}
        <div className="pb-20 mx-8 md:mx-20">
          <p className="text-base text-[#126E64]">Top Course</p>
          <h1 className="mb-12 text-[30px] md:text-[2.5rem]">Excellent Course For You</h1>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            {
              dataCourse?.slice(0, 4).map((item) => (
                <CardCourse 
                key={item.id} 
                image={item.course_image} 
                mentor={mentorCourseBs} 
                mentorName={"bessie chopper"} 
                title={item.course_name} 
                courseId={item.id}
                totaltimes={item.total_times}
                totalvideo={item.total_video}
                />
              ))
            }
          </div>

        </div>
        {/* Course Card */}
      </main>
    </>
  );
}
