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
import { BASE_URL } from "../../../config/API";
import Cookies from "universal-cookie";

export default function SuccesCourse() {
  const [dataCourse, setDataCourse] = useState([]);
  const { query } = useRouter();
  const [hidden, setHidden] = useState(false);
  const cookies = new Cookies();
  const [dataUser, setDataUser] = useState();
  const [dataEnrolled, setDataEnrolled] = useState();
  const [idEnrolled, setIdEnrolled] = useState();

  const handleHidden = () => {
    setHidden(true);
  };

  const getEdutivData = () => {
    let idCourse = query.succes;
    let endpoints = [`${BASE_URL}/course/${idCourse}`];

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

  const getUserEnrolled = () => {
    let token = cookies.get("token");
    let idCourse = query.succes;

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
  };

  useEffect(() => {
    getUserEnrolled();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkUserEnrolled();
  });

  const getDataReport = () => {
    let token = cookies.get("token");

    axios(`${BASE_URL}/enrolled/download-report/${idEnrolled}`, {
      method: "GET",
      responseType: "blob", //Force to receive data in a Blob Format
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], { type: "application/pdf" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <div>
                <button
                onClick={getDataReport}
                  className="bg-white md:w-80 w-full py-3 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md"
                >
                  Download Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
