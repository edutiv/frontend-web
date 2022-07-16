import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

// components

import CardTable from "../../components/admin/Cards/CardTable.js";
import { BASE_URL } from "../../config/API.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Request() {

  const [dataRequest, setDataRequest] = useState([]);
  const cookies = new Cookies();
  let token = cookies.get('token');

  const getEdutivData = () => {
    axios.get(`${BASE_URL}/request`, {
      headers: { "Authorization" : `Bearer ${token}` }
    })
    .then(function (res) {
      console.log('request', res);
      setDataRequest(res.data.data);
    })
  }
  
  useEffect(() => {
    getEdutivData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTable title={"Request Table"} sidebutton={false} type={'request'} data={dataRequest} refresh={getEdutivData}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Request.layout = Admin;
