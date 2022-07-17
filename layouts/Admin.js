import React, { useEffect, useState, createContext, useCallback } from "react";
import Head from "next/head";
import axios from "axios";
import Cookies from "universal-cookie";

// components

import AdminNavbar from "../components/admin/Navbars/AdminNavbar.js";
import Sidebar from "../components/admin/Sidebar/Sidebar.js";
import HeaderStats from "../components/admin/Headers/HeaderStats.js";

import { BASE_URL } from "../config/API.js";
import Router from "next/router.js";
import Swal from "sweetalert2";

export const CounterContext = createContext(null);

export default function Admin({ children }) {

  const [counterData, setCounterData] = useState();
  const [counterMember, setCounterMember] = useState();
  const [counterRequest, setCounterRequest] = useState();
  const [dataAdmin, setDataAdmin] = useState();
  const cookies = new Cookies();
  let token = cookies.get('token');

  const userChecking = () => {
    axios.get(`${BASE_URL}/user/`, { headers: { "Authorization": `Bearer ${token}` } }).then((result) => {
      let userinfo = result.data.data;
      if (userinfo.roles[0].name === "ROLE_ADMIN") {
        setDataAdmin(userinfo);
      } else {
        Swal.fire({
          title: 'Access Denied!',
          text: "You will be redirected to homepage",
          icon: 'warning',
          showConfirmButton: false,
          timer: 1600,
          timerProgressBar: true
        }).then(() => {
          Router.push('/');
        })
      }
    });
  }

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
      // console.log('member',res);
      setCounterMember(res.data.data);
    })
  }

  const requestCounter = () => {
    axios.get(`${BASE_URL}/request`, {
      headers: { "Authorization" : `Bearer ${token}` }
    })
    .then(function (res) {
      // console.log('request', res);
      setCounterRequest(res.data.data);
    })
  }

  const refreshCourse = useCallback(() => {
    counterFresh();
    requestCounter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counterFresh])

  const refreshMember = useCallback(() => {
    memberCounter();
    requestCounter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberCounter])

  useEffect(() => {
    memberCounter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    counterFresh();
  }, []);

  useEffect(() => {
    requestCounter();
    userChecking();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalMember = counterMember?.length;

  const totalCourse = counterData?.length;

  const totalRequest = counterRequest?.length;

  const totalMaterial = counterData?.reduce((f, n) => {
    const countTotalMaterial = n.sections.reduce((f2, n2) => f2 + n2.materials.length, 0)
    return f + totalCourse
  }, 0);

  return (
    <CounterContext.Provider value={{ course: totalCourse, material: totalMaterial, member: totalMember, request: totalRequest, admin: dataAdmin, refreshCourse, refreshMember }}>
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
