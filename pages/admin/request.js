import React from "react";

// components

import CardTable from "../../components/admin/Cards/CardTable.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Request() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTable title={"Request Table"}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Request.layout = Admin;
