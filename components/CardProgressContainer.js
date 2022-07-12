import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BASE_URL } from "../config/API";
import CardProgressCourse from "./CardProgressCourse";

export default function CardProgressContainer() {
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
  }, []);

  return (
    <div>
      <p className="text-base text-[#126E64]">Learning Progress</p>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="md:mb-12 mb-6 text-[30px] md:text-[2.5rem] w-full md:w-7/12">
          Let's continue to improve your skills
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
        {historyCourse?.map((item) => (
          <CardProgressCourse
            key={item.id}
            title={item.course.course_name}
            category={item.course.category.category_name}
            image={item.course.course_image}
          />
        ))}
      </div>
    </div>
  );
}
