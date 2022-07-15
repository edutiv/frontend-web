/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ButtonLearnNav from "../../components/ButtonLearnNav";
import ReviewCard from "../../components/ReviewCard";
import { Tab } from "@headlessui/react";
import mentor from "../../public/assets/img/mentor.png";
import Image from "next/image";
import { DownloadIcon } from "@heroicons/react/solid";
import Navbar from "../../components/Navbar";
import vscLogo from "../../public/assets/img/vscode.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "../../config/API";
import { data } from "autoprefixer";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail() {
  const [checked, setChecked] = useState(true);
  const { query } = useRouter();
  const [dataCourse, setDataCourse] = useState();
  const [video, setVideo] = useState();
  const [dataEnrolled, setDataEnrolled] = useState();
  const [dataUser, setDataUser] = useState();
  const cookies = new Cookies();
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const handleLogin = () => {
    let token = cookies.get("token");

    if (token) {
      let userId = jwtDecode(token).jti;
      axios
        .get(`${BASE_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setDataUser(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const checkUserEnrolled = () => {
    // check if the user enrolled
    let userLogin = dataUser?.firstname;
    let userEnrolled = dataEnrolled?.filter((user) => {
      return user.user.firstname == userLogin;
      // Use the toLowerCase() method to make it case-insensitive
    });

    if (userEnrolled?.length > 0) {
      setIsUserEnrolled(true);
    }
  };

  const getEdutivData = () => {
    let idCourse = query.detailId;
    let endpoints = [
      `${BASE_URL}/course/${idCourse}`,
      `${BASE_URL}/enrolled/courses/${idCourse}`,
    ];

    if (idCourse) {
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        ([{ data: course }, { data: dataEnrolled }]) => {
          setDataCourse(course.data);
          setVideo(course.data?.sections[0]?.materials[0]?.material_url);
          setDataEnrolled(dataEnrolled.data);
          console.log(course.data);
        }
      );
    }
  };

  const handleEnrollUser = () => {
    let token = cookies.get("token");

    if (token) {
      axios
        .post(
          `${BASE_URL}/enrolled`,
          {
            user_id: dataUser.id,
            course_id: dataCourse.id,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          Swal.fire(
            'Congratulation!',
            'You can Access the Course',
            'success'
          )
          setIsUserEnrolled(true);
          setIsUserLogin(true);
        })
        .catch((err) => {
          alert(err);
        });
    }

   
  };

  useEffect(() => {
    getEdutivData();
    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkUserEnrolled();
  });

  if (!dataCourse) {
    return <div>loading ...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className=" mt-20 ">
        <div className=" text-center">
          <h1 className=" text-4xl px-3">{dataCourse?.course_name}</h1>
        </div>
        <div className=" flex justify-center mt-6">
          <div className="flex-col justify-center text-center">
            <h1 className="flex justify-center">Member</h1>
            <p>{`${dataEnrolled?.length} enrolled`}</p>
          </div>
          <div className=" mx-12 flex-col justify-center">
            <h1>Serifikat</h1>
            <i className="flex justify-center">
              {checked ? <CheckCircleIcon className=" w-4" /> : <div></div>}
            </i>
          </div>
          <div>
            <h1>Quiz</h1>
            <i className="flex justify-center">
              {checked ? <CheckCircleIcon className=" w-4" /> : <div></div>}
            </i>
          </div>
        </div>

        {/* contents video */}
        <div className="mx-10 md:mx-20 md:grid grid-cols-12 gap-10 my-10 max-h-[424px]">
          {/* video */}
          <div className="col-span-9 border-2  ">
            <iframe
              className="w-full h-fit aspect-auto md:h-full "
              src={video}
            />
          </div>
          {/* video */}

          {/* ennroll button */}
          <div className=" bg-[#F5F5F5] rounded-md col-span-3 p-6 grid">
            <h1 className=" font-bold mb-4 text-base">
              {`${dataCourse?.sections?.length} Video Lesson (${dataCourse?.total_times})`}
            </h1>
            <div className=" flex-col">
              {dataCourse?.sections?.slice(0, 1).map((item) => (
                <ButtonLearnNav
                  key={item.id}
                  className="mb-4"
                  icon={"video"}
                  title={item.section_name}
                />
              ))}
              {dataCourse?.sections?.slice(1, 5).map((item) => (
                <ButtonLearnNav
                  key={item.id}
                  className="mb-4"
                  icon={"video"}
                  title={item.section_name}
                  disabled={!isUserEnrolled}
                />
              ))}
              <ButtonLearnNav
                className="mb-4"
                icon={"video"}
                title={"more video"}
                disabled={!isUserEnrolled}
              />
            </div>
            {isUserEnrolled ? (
              <Link href={`/learns/${query.detailId}`}>
                <button className=" h-[41px] bg-[#126E64] rounded-md w-full place-self-end text-white">
                  LEARNS NOW
                </button>
              </Link>
            ) : isUserLogin ? (
              <button
                onClick={handleEnrollUser}
                className=" h-[41px] bg-[#126E64] rounded-md w-full place-self-end text-white"
              >
                ENROLL NOW
              </button>
            ) : (
              <Link href="/auth/login">
                <button
                  onClick={handleEnrollUser}
                  className=" h-[41px] bg-[#126E64] rounded-md w-full place-self-end text-white"
                >
                  ENROLL NOW
                </button>
              </Link>
            )}
          </div>
          {/* ennroll button */}
        </div>
        {/* contents video */}

        {/* content detail */}
        <div className=" relative grid md:grid-cols-12 grid-cols-1 gap-10 md:mx-20 mx-10 text-sm md:text-base">
          {/* tabs content */}
          <div className=" col-span-9 mt-10 md:mt-0 mx-5 md:mx-0">
            <div className="w-full px-2 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl md:p-1 px-10">
                  <div className=" flex ">
                    {/* ====== tab about ====== */}
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "py-2.5 text-sm font-medium w-[71px]",
                          selected
                            ? " border-b-2 border-black focus-visible:outline-none focus:outline-0"
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
                            ? " border-b-2 border-black focus-visible:outline-none focus:outline-0"
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
                            ? " border-b-2 border-black focus-visible:outline-none focus:outline-0"
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
                            ? " border-b-2 border-black focus-visible:outline-none focus:outline-0"
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
                      <div className=" my-12 text-center md:text-left">
                        <p>{dataCourse?.description}</p>
                      </div>

                      <div className=" mb-12">
                        <h1>Learning Objective</h1>
                        <ul>
                          {dataCourse?.learning_objectives?.map(
                            (item, index) => (
                              <li className="flex mt-3" key={index}>
                                <CheckCircleIcon className=" w-4 mr-2 hidden md:block " />
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className=" mb-12">
                        <h1>Advantages of using Golang</h1>
                        <ul>
                          {dataCourse?.advantages?.map((item, index) => (
                            <li key={index}>
                              <div className="flex mt-3">
                                <CheckCircleIcon className=" w-4 mr-2 hidden md:block" />
                                {item}
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
                      {dataCourse?.sections?.map((data) => {
                        return (
                          <div key={data.id}>
                            <h1 className=" mb-3">{data?.section_name}</h1>
                            {data?.materials.map((data) =>
                              isUserEnrolled ? (
                                <ButtonLearnNav
                                  key={data.id}
                                  icon={"video"}
                                  title={data.material_name}
                                  time={"11 min"}
                                />
                              ) : (
                                <ButtonLearnNav
                                  key={data.id}
                                  icon={"video"}
                                  title={data.material_name}
                                  disabled={true}
                                />
                              )
                            )}
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
                      {dataCourse?.tools?.map((data) => (
                        <div
                          key={data.id}
                          className=" ml-3 w-[147px] bg-[#F5F5F5] p-2 text-center grid place-content-center"
                        >
                          <div className=" flex justify-center mb-3">
                            <img
                              src={data.tool_icon}
                              alt="Course1"
                              width="50px"
                              className=""
                            />
                          </div>
                          <div className="flex-col">
                            <h1 className=" text-sm">{data.tool_name}</h1>
                            <p className="flex justify-center text-xs">
                              <a href={data.tool_url} className="flex mt-2">
                                <DownloadIcon className=" w-3" /> Download
                              </a>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>

                  {/* =================  tab Reviews =================*/}
                  <Tab.Panel>
                    <div className=" md:h-80 grid md:grid-cols-4 w-full gap-4">
                      {dataEnrolled
                        ?.filter((data) => {
                          return data.review !== null;
                        })
                        .map((data) => (
                          <ReviewCard
                            key={data.id}
                            rating={data.rating}
                            comment={data.review}
                            name={data.user.firstname}
                          />
                        ))}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
          {/* tabs content */}

          {/* mentor profil */}

          <div className="grid col-span-7 md:col-span-3 border-2 h-[173px] p-3 content-center">
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
                <p className=" text-xs text-slate-300 my-1 ml-2 ">
                  Full-Stack Developer
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
