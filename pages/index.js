// Base Import
import Image from "next/image";
import Navbar from "../components/Navbar";
import CardCourse from "../components/CardCourse";
import CardCategory from "../components/CardCategory";

// Asset Import
import codingCourse from "../public/assets/img/frontend-course.png";
import titleImg from "../public/assets/img/head-title.svg";
import courseBs from "../public/assets/img/bs5.png";
import mentorCourseBs from "../public/assets/img/mentor.png";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  let api;
  // const [data, setData] = useState();
  const [dataCourse, setDataCourse] = useState([]);
  const [categories, setCategories] = useState([]);

  const getEdutivData = () => {
    let endpoints = [
      'https://62a0b46ea9866630f815f720.mockapi.io//course',
      'https://62a0b46ea9866630f815f720.mockapi.io//category'
    ]

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }, { data: categories }]) => {
      setDataCourse(course)
      setCategories(categories)
      console.log(dataCourse);
      console.log(categories);
    });
  }

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
            <div className="grid grid-flow-col-dense">
              {
                categories?.map((category) => (
                  <CardCategory key={category.id} image={codingCourse} name={category.name} desc={category.description} />
                ))
              }
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
              dataCourse ? dataCourse?.map((item) => (
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
