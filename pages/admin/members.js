import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

// components

import CardTable from "../../components/admin/Cards/CardTable.js";

// layout for page

import Admin from "../../layouts/Admin.js";

import { BASE_URL } from "../../config/API.js";

export default function Tables() {
  const [dataMember, setDataMember] = useState([]);
  const cookies = new Cookies();
  let token = cookies.get('token');

  const getEdutivData = () => {
    // let endpoints = [
    //   `${BASE_URL}/user/all`,
    // ]

    // Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }]) => {
    //   setDataCourse(course.data)
    // });
    axios.get(`${BASE_URL}/user/all`, { 
      headers: { "Authorization": `Bearer ${token}` } 
    })
    .then(function (res) {
      console.log(res);
      setDataMember(res.data.data);
    })
  }

  useEffect(() => {
    getEdutivData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTable title={"Member Table"} sidebutton={true} type={'member'} data={dataMember} refresh={getEdutivData}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;
