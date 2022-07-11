import React, { useEffect, useState, createContext, useCallback } from "react";
import Head from "next/head";
import axios from "axios";
import Cookies from "universal-cookie";

// components

import AdminNavbar from "../components/admin/Navbars/AdminNavbar.js";
import Sidebar from "../components/admin/Sidebar/Sidebar.js";
import HeaderStats from "../components/admin/Headers/HeaderStats.js";

import { BASE_URL } from "../config/API.js";

export const CounterContext = createContext(null);

export default function Admin({ children }) {

  const [counterData, setCounterData] = useState();
  const [counterMember, setCounterMember] = useState();
  const cookies = new Cookies();
  let token = cookies.get('token');


  // let endpoints = [
  //   `${BASE_URL}/user/all`,
  // ]

  // Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: course }]) => {
  //   setDataCourse(course.data)
  // });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const counterFresh = () => {
    axios
      .get(`${BASE_URL}/course`)
      .then(async (response) => {
        console.log(response)
        setCounterData(response.data.data);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memberCounter = () => {
    axios.get(`${BASE_URL}/user/all`, { 
      headers: { "Authorization": `Bearer ${token}` } 
    })
    .then(function (res) {
      console.log('member',res);
      setCounterMember(res.data.data);
    })
  }

  const refreshCourse = useCallback(() => {
    counterFresh()
  }, [counterFresh])

  const refreshMember = useCallback(() => {
    memberCounter()
  }, [memberCounter])

  useEffect(() => {
    memberCounter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    counterFresh();
  }, []);

  const totalMember = counterMember?.length;

  const totalCourse = counterData?.length;

  const totalMaterial = counterData?.reduce((f, n) => {
    const countTotalMaterial = n.sections.reduce((f2, n2) => f2 + n2.materials.length, 0)
    return f + totalCourse
  }, 0);

  return (
    <CounterContext.Provider value={{ course: totalCourse, material: totalMaterial, member: totalMember, refreshCourse, refreshMember }}>
      <Head>
        <title>Edutiv Admin Dashboard</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          {children}
        </div>
      </div>
    </CounterContext.Provider>
  );
}
