import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import ButtonLearnNav from "../../components/ButtonLearnNav";
import Navbar from "../../components/Navbar";

import { Tab, Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import LearnTools from "../../components/LearnTools";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

import { BASE_URL } from "../../config/API";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

export default function Learn() {
  let api;
  const [data, setData] = useState();
  const { query } = useRouter();
  const selectedCourseId = query.learn;
  const cookies = new Cookies();
  const [dataUser, setDataUser] = useState();
  const [dataEnrolled, setDataEnrolled] = useState();
  const [idEnrolled, setIdEnrolled] = useState();
  const [materialsReport, setMaterialsReport] = useState();

  useEffect(() => {
    axios.get(`${BASE_URL}/course`).then(async (response) => {
      const courseId = query.learn;
      console.log(query);
      console.log(response.data.data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      api = response?.data.data.filter((data) => data.id == courseId);
      const data = api[0];
      console.log(data);
      setData(data);
    });
  }, [api]);

  const totalCourse = 0;

  data?.sections.forEach((section) =>
    section.materials.forEach((material) => {
      totalCourse += 1;
    })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [toggleShow, setToggleShow] = useState(false);

  const toggleClassShow = () => {
    setToggleShow(!toggleShow);
  };

  const limitHandlerMin = (index) => {
    if (index < 0) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index - 1);
    }
  };

  const limitHandlerMax = (index) => {
    if (index >= totalCourse - 1) {
      setSelectedIndex(totalCourse - 1);
    } else {
      setSelectedIndex(index + 1);
    }
  };

  // get data user enrolled in this course
  const getUserEnrolled = () => {
    let token = cookies.get("token");
    let idCourse = query.learn;

    if (token) {
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

    if (idCourse) {
      axios
        .get(`${BASE_URL}/enrolled/courses/${idCourse}`)
        .then((res) => {
          setDataEnrolled(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  // check user to get enrolled id
  const checkUserEnrolled = () => {
    const userLogin = dataUser?.firstname;
    let userEnrolled;

    userEnrolled = dataEnrolled?.filter((user) => {
      return user.user.firstname == userLogin;
      // Use the toLowerCase() method to make it case-insensitive
    });

    userEnrolled?.slice(0).map((item) => {
      return setIdEnrolled(item.id);
    });

    userEnrolled?.slice(0).map((item) => {
      return setMaterialsReport(item.reports);
    });
    
  };

  useEffect(() => {
    getUserEnrolled();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkUserEnrolled();
  });

  const handleCompleteMaterial = (idMaterial) => {
    let token = cookies.get("token");
    console.log("id eroll:", idEnrolled, idMaterial);
    axios
      .put(
        `${BASE_URL}/enrolled/progress/${idEnrolled}`,
        {
          material_id: idMaterial,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        Swal.fire("completed!!", "you are so great", "success");
      })
      .catch((err) => {
        Swal.fire("oops!!", "there is something wrong", "error");
      });
  };

  const handleCheckCompleted = (idMaterial) => {
    let materials = materialsReport?.filter((material) => {
      return material.material.id == idMaterial;
      // Use the toLowerCase() method to make it case-insensitive
    });

    let material;


    if (materials) {
      material = materials[0];
    }

    if (material?.is_completed) {
      return (
        <button className="bg-white px-5 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none">
          COMPLETED
        </button>
      );
    } else {
      return (
        <button
          onClick={() => handleCompleteMaterial(idMaterial)}
          className="px-5 py-2 bg-[#126E64] sm:mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none"
        >
          FINISH
        </button>
      );
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="mx-8 md:mx-20">
        <div className="my-10 title flex flex-col md:flex-row justify-between md:items-center text-left">
          <h4 className="md:text-[28px] text-md">{data?.course_name}</h4>
          <button
            onClick={() => toggleClassShow()}
            className="flex flex-row gap-1 py-1 px-2 rounded hover:bg-green-700 hover:text-white w-fit self-end md:self-auto"
          >
            <MenuIcon className="block lg:hidden h-6 w-6" />
            <p className="block lg:hidden">Navigate</p>
          </button>
        </div>
        <div className="grid grid-cols-12 md:gap-12">
          {/* side navbar */}
          <Tab.Group
            vertical
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            {toggleShow ? (
              <div className="fixed inset-0 bg-opacity-75 bg-slate-800 opacity-100 z-40"></div>
            ) : (
              ""
            )}
            <div
              className={
                toggleShow
                  ? "absolute navbar bg-[#F5F5F5] p-6 rounded-md mb-8 h-fit max-h-[85vh] overflow-auto left-0 top-28 right-0 mr-auto ml-auto z-50 w-[66.6vw]"
                  : "navbar col-span-4 bg-[#F5F5F5] p-6 rounded-md mb-8 h-fit lg:block hidden"
              }
            >
              <Tab.List>
                {toggleShow ? (
                  <button
                    onClick={() => toggleClassShow()}
                    className="relative float-right"
                  >
                    <XIcon className="block lg:hidden h-5 w-5" />
                  </button>
                ) : (
                  ""
                )}
                {data?.sections.map((section) => (
                  <div className="mb-8 video-button" key={section.id}>
                    <h2 className="text-[13px] mb-4">{section.section_name}</h2>
                    <div className="flex flex-col">
                      {section.materials.map((material) => (
                        <Tab
                          key={material.id}
                          className="focus:outline-none"
                          onClick={() => (toggleShow ? toggleClassShow() : "")}
                        >
                          {({ selected }) => (
                            <ButtonLearnNav
                              icon={material.material_type}
                              title={material.material_name}
                              class={selected ? "true" : ""}
                            />
                          )}
                        </Tab>
                      ))}
                    </div>
                  </div>
                ))}
              </Tab.List>
              <div className="mb-8 prepatation">
                <h2 className=" text-[13px] mb-4">Certificate</h2>
                <Link href={`/learns/succes/${selectedCourseId}`}>
                  <a>
                    <ButtonLearnNav
                      icon={"preparation"}
                      title={"Download Certificate"}
                    />
                  </a>
                </Link>
              </div>
            </div>
            {/* side navbar */}

            {/* content video and quiz*/}
            <div className="col-span-12 lg:col-span-8 course-contents">
              {/* video */}
              <Tab.Panels>
                {data?.sections.map((section) =>
                  section.materials.map((material) => (
                    <Tab.Panel key={material.id}>
                      {material.material_type === "quiz" ? (
                        <div className="flex items-center justify-center w-full text-center align-top">
                          <iframe
                            src={material.material_url}
                            width={900}
                            height={2503}
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                          >
                            Memuat…
                          </iframe>
                        </div>
                      ) : (
                        <div className="border-2 rounded-md">
                          <iframe
                            className="w-full h-full rounded-md aspect-video"
                            src={material.material_url}
                          />
                        </div>
                      )}

                      <div className="flex gap-3 md:gap-0 flex-col sm:flex-row md:items-center justify-between py-5">
                        <h4 className="text-md md:text-2xl text-left">
                          {material.material_name}
                        </h4>
                        <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
                          <button
                            onClick={() => limitHandlerMin(selectedIndex)}
                            className="bg-white px-5 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none"
                          >
                            PREVIOUS
                          </button>
                          <button
                            onClick={() => limitHandlerMax(selectedIndex)}
                            className="px-5 py-2 bg-[#126E64] sm:mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none"
                          >
                            NEXT
                          </button>
                          {handleCheckCompleted(material.id)}
                        </div>
                      </div>

                      <div>
                        <h4>Tools Course</h4>
                        <div className="flex flex-col md:flex-row gap-3 pt-5 pb-8 items center">
                          {data?.tools.map((tool) => (
                            <LearnTools key={tool.id} tools={tool} />
                          ))}
                        </div>
                      </div>
                    </Tab.Panel>
                  ))
                )}
              </Tab.Panels>
              {/* tools reference */}
            </div>
          </Tab.Group>
          {/* content video and quiz*/}
        </div>
      </div>
    </>
  );
}
