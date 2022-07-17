import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BASE_URL } from "../config/API";

export default function ButtonCompleteCourse({ idMaterial, handleCompleteMaterial, dataUser, dataEnrolled}) {
  const [isCompleted, setIscompleted] = useState();
  let cookies = new Cookies();
  const [idEnrolled, setIdEnrolled] = useState();
  const [materialsReport, setMaterialsReport] = useState();
  const { query } = useRouter(); 

  // check user to get enrolled id
  const checkUserEnrolled = () => {
    const userLogin = dataUser?.firstname;
    let userEnrolled;

    userEnrolled = dataEnrolled?.filter((user) => {
      return user.user.firstname == userLogin;
      // Use the toLowerCase() method to make it case-insensitive
    });

    userEnrolled?.slice(0).map((item) => {
      return setIdEnrolled(item.id);
    });

    userEnrolled?.slice(0).map((item) => {
      return setMaterialsReport(item.reports);
    });
  };

  useEffect(() => {
    checkUserEnrolled();
  });

  const handleCheckCompleted = () => {
    let materials = materialsReport?.filter((material) => {
      return material.material.id == idMaterial;
      // Use the toLowerCase() method to make it case-insensitive
    });

    let material;

    
    if (materials) {
      material = materials[0];
    }
    

    if (material?.is_completed) {
      setIscompleted(true);
    } else {
      setIscompleted(false);
    }
  };

  useEffect(()=> {
    handleCheckCompleted();
  })

  return (
    <div>
      {isCompleted ? (
        <button className="bg-white px-5 py-2 text-[#126E64] rounded-md border-[1px] border-[#E0E0E0] text-[11px] hover:border-[#126E64] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none">
          COMPLETED
        </button>
      ) : (
        <button
          onClick={() => handleCompleteMaterial(idMaterial)}
          className="px-5 py-2 bg-[#126E64] sm:mr-2 rounded-md text-white text-[11px] hover:bg-[#09423c] hover:-translate-y-[0.15rem] hover:transition hover:duration-100 hover:ease-in-out hover:drop-shadow-md focus:outline-none"
        >
          FINISH
        </button>
      )}
    </div>
  );
}
