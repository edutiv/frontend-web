import React, { useEffect, useState } from "react";
import axios from "axios";

// components

import CardTable from "../../components/admin/Cards/CardTable.js";

// layout for page

import Admin from "../../layouts/Admin.js";

// API Base Url
import { BASE_URL } from "../../config/API.js";


export default function Course() {
  const [dataCourse, setDataCourse] = useState([]);
  // const [categories, setCategories] = useState([]);

  // 'https://edutiv-springboot.herokuapp.com//category'
  // 'https://62a0b46ea9866630f815f720.mockapi.io//category'

  const getEdutivData = () => {
    let endpoints = [
      `${BASE_URL}/course`,
      // 'https://edutiv-springboot.herokuapp.com/category'
    ]

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }]) => {
      setDataCourse(course.data)
      // setCategories(categories.data)
      // console.log(dataCourse);
      // console.log(categories);
    });
  }

  useEffect(() => {
    getEdutivData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTable title={"Course Table"} sidebutton={true} type={'course'} data={dataCourse} refresh={getEdutivData}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Course.layout = Admin;
