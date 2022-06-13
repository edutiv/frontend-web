import React from "react";
import Head from "next/head";

// components

import AdminNavbar from "../components/admin/Navbars/AdminNavbar.js";
import Sidebar from "../components/admin/Sidebar/Sidebar.js";
import HeaderStats from "../components/admin/Headers/HeaderStats.js";

export default function Admin({ children }) {
  return (
    <>
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
    </>
  );
}
