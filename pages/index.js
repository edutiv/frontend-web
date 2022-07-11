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
import icons from "../icons";
import { BASE_URL } from "../config/API";
import Link from "next/link";

import { ArrowSmRightIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import CardProgressCourse from "../components/CardProgressCourse";
import Cookies from 'universal-cookie';

export default function Home() {
  let api;
  // const [data, setData] = useState();
  const [dataCourse, setDataCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const cookies = new Cookies();
  // 'https://edutiv-springboot.herokuapp.com//category'
  // 'https://62a0b46ea9866630f815f720.mockapi.io//category'

  const getEdutivData = () => {
    let endpoints = [`${BASE_URL}/course`, `${BASE_URL}/category`];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: course }, { data: categories }]) => {
        setDataCourse(course.data);
        setCategories(categories.data);
      }
    );
  };

  const handleLogin = () => {
    let token = cookies.get("token");

    if(token){
      // let userId = jwtDecode(token).jti;
      // console.log(userId)
      // axios.get(`${BASE_URL}/user/${userId}`, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) => {
      //   console.log(res.data.data)
      //   setIslogin(true);
      //   setDataUser(res.data.data)
      // }).catch((error) => {
      //   alert(error);
      // })

      setIsLogin(true)
    }

  }

  useEffect(() => {
    getEdutivData();
    handleLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {isLogin ? (
          <div className="px-8 mt-6 md:px-20 md:mt-16 ">
            <p className="text-base text-[#126E64]">Learning Progress</p>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h1 className="md:mb-12 mb-6 text-[30px] md:text-[2.5rem] w-full md:w-7/12">
                Let&apos;s continue to improve your skills
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <CardProgressCourse />
              <CardProgressCourse />
            </div>
          </div>
        ) : (
          <div className="grid content-center px-8 mt-6 md:px-20 md:mt-16">
            <div className="grid content-center grid-cols-1 gap-6 md:grid-cols-2">
              {/* title */}
              <div className="grid content-center">
                <div>
                  <p className="text-[30px] md:text-[2.5rem] text-center md:text-left">
                    <strong className=" text-[#126E64]">Grow</strong> Your
                    Skills to <br /> Advance <br />
                    Your{" "}
                    <strong className="text-[#126E64]">Career Path </strong>
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
                  <Link href="/courses">
                    <button className="bg-white px-5 py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                      CATALOG COURSE
                    </button>
                  </Link>
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
        )}

         {/* get started */}

        {/* features icon */}

        <div className="px-20 py-6 md:py-24">
          <div className="flex-col justify-center hidden gap-3 md:flex md:justify-around md:flex-row md:gap-10">
            {icons.icons.map((icon) => (
              <div className="flex items-center" key={icon.src}>
                <div
                  className={
                    "bg-[#126E6433] rounded-full p-2 md:p-4 grid place-content-center"
                  }
                >
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

        <div className="mx-8 mb-20 md:mx-20">
          <div>
            <p className="text-base text-[#126E64]">Let’s learning today</p>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h1 className="md:mb-12 mb-6 text-[30px] md:text-[2.5rem] w-full md:w-7/12">
                Courses with categories that we have prepared for you
              </h1>
              <Link href="/courses">
                <button className="flex flex-row items-center self-end gap-1 mb-4 md:self-auto md:mb-0">
                  See More <ArrowSmRightIcon className="w-6 h-6" />
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center w-full gap-3 md:flex-row md:justify-start">
              {categories?.map((category) => (
                <CardCategory
                  key={category.id}
                  image={category.category_image}
                  name={category.category_name}
                  desc={category.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Course Category */}

        {/* Course Card  */}
        <div className="pb-20 mx-8 md:mx-20">
          <p className="text-base text-[#126E64]">Top Course</p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <h1 className="md:mb-12 mb-6 text-[30px] md:text-[2.5rem]">
              Excellent Course For You
            </h1>
            <Link href="/courses">
              <button className="flex flex-row items-center self-end gap-1 mb-4 md:self-auto md:mb-0">
                See More <ArrowSmRightIcon className="w-6 h-6" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-2">
            {dataCourse?.slice(0, 4).map((item) => (
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
            ))}
          </div>
        </div>
        {/* Course Card */}
      </main>

      <Footer />
    </>
  );
}
