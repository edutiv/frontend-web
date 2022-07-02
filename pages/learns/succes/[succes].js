/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ModalRating from "../../../components/ModalRating";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalCertificate from "../../../components/modalCertificate";
import Navbar from "../../../components/Navbar";

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
      `https://edutiv-springboot.herokuapp.com/course/${idCourse}`,
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
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid w-full place-content-center">
        <div className="flex justify-center mb-4">
          <img className="h-[400px]" src="/assets/img/succes.png" />
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
              <button className="w-80 py-3 bg-[#126E64] rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md">
                Back to Course
              </button>
            </Link>
          ) : (
            <div>
              <div className=" my-1 w-80 ">
                <ModalCertificate dataCourse={dataCourse} />
              </div>
              <div className=" my-1 w-80">
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
