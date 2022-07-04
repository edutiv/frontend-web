import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

// components

import AdminNavbar from "../components/admin/Navbars/AdminNavbar.js";
import Sidebar from "../components/admin/Sidebar/Sidebar.js";
import HeaderStats from "../components/admin/Headers/HeaderStats.js";

import { BASE_URL } from "../config/API.js";
import axios from "axios";

export const headerRefresh = () => {
  axios
    .get(`${BASE_URL}/course`)
    .then(async (response) => {
      setData(response.data.data);
    });
}

export default function Admin({ children }) {

  const [data, setData] = useState();
  const totalMaterials = 0
  const totalCourse = 0

  useEffect(() => {
    axios
      .get(`${BASE_URL}/course`)
      .then(async (response) => {
        setData(response.data.data);
      });
  }, [totalCourse]);

  data?.map((items => {
    totalCourse += 1;
    items.sections.forEach(section => section.materials.forEach(material => {
      totalMaterials += 1
    }));
  }))
  console.log('data', data);
  console.log('total course', totalCourse);

  return (
    <>
      <Head>
        <title>Edutiv Admin Dashboard</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats course={totalCourse} material={totalMaterials} />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          {children}
        </div>
      </div>
    </>
  );
}
