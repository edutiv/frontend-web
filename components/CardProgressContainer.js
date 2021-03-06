import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BASE_URL } from "../config/API";
import CardProgressCourse from "./CardProgressCourse";
import Link from "next/link";

export default function CardProgressContainer({ titleHidden, gridCol }) {
  let cookies = new Cookies();
  const [historyCourse, setHistoryCourse] = useState();

  const getHistoryData = () => {
    let token = cookies.get("token");

    axios
      .get(`${BASE_URL}/enrolled/history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("dataHistory", res.data.data);
        setHistoryCourse(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getHistoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {titleHidden ? (
        ""
      ) : (
        <div>
          <p className="text-base text-[#126E64]">Learning Progress</p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <h1 className="md:mb-12 mb-6 text-[30px] md:text-[2.5rem] w-full md:w-7/12">
              Let&apos;s continue to improve your skills
            </h1>
          </div>
        </div>
      )}
      {gridCol ? (
        <div className="grid gap-3 grid-cols-1">
        {historyCourse?.map((item) => (
          <Link key={item.id} href={`/learns/${item.course.id}`}>
            <a>
              <CardProgressCourse
                title={item.course.course_name}
                category={item.course.category.category_name}
                image={item.course.course_image}
                progress={item.progress}
              />
            </a>
          </Link>
        ))}
      </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
          {historyCourse?.map((item) => (
            <Link key={item.id} href={`/learns/${item.course.id}`}>
              <a>
                <CardProgressCourse
                  title={item.course.course_name}
                  category={item.course.category.category_name}
                  image={item.course.course_image}
                  progress={item.progress}
                />
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
