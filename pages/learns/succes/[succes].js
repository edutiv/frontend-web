/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ModalRating from "../../../components/ModalRating";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalCertificate from "../../../components/ModalCertificate";
import Navbar from "../../../components/Navbar";
import { BASE_URL } from '../../../config/API'

export default function SuccesCourse() {
  const [dataCourse, setDataCourse] = useState([]);
  const { query } = useRouter();
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden(true);
  };

  const getEdutivData = () => {
    let idCourse = query.succes;
    let endpoints = [
      `${BASE_URL}/course/${idCourse}`,
    ];

    if (idCourse) {
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        ([{ data: course }]) => {
          setDataCourse(course.data);
          console.log("bisa");
        }
      );
    }
    console.log(query.succes);
  };

  useEffect(() => {
    getEdutivData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid w-full place-content-center px-10 md:px-0">
        <div className="flex justify-center mb-4">
          <img className="md:h-[400px] h-fit" src="/assets/img/succes.png" />
        </div>
        {hidden ? (
          <h1 className="text-3xl text-center ">Excellent!</h1>
        ) : (
          <h1 className="text-3xl text-center ">What A Day!</h1>
        )}
        {hidden ? (
          <p className="mt-3 text-center text-md">
            Thanks for rating the course you have completed
          </p>
        ) : (
          <p className="mt-3 text-center text-md">
            {`Finally you have completed ${dataCourse?.course_name} course
            very well.`}
          </p>
        )}

        <div className="flex flex-col items-center justify-center mt-3 align-middle mb-6">
          {hidden ? (
            <Link href={`/learns/${dataCourse.id}`}>
              <button className="md:w-80 w-full py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                Back to Course
              </button>
            </Link>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="my-1 md:w-80 w-full">
                <ModalCertificate dataCourse={dataCourse} />
              </div>
              <div className="my-1 md:w-80 w-full">
                <ModalRating
                  dataCourse={dataCourse}
                  handleHidden={handleHidden}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
