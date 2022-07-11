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

  const getEdutivData = () => {
    let endpoints = [
      `${BASE_URL}/course`,
    ]

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }]) => {
      setDataCourse(course.data)
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
